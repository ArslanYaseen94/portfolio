import { NextResponse } from "next/server"
import nodemailer from "nodemailer"

// Simple in-memory store for IP-based rate limiting
const emailLimits = new Map<string, { count: number; lastReset: number }>()
const MAX_EMAILS = 2 // max emails per IP
const WINDOW_MS = 60 * 60 * 1000 // 1 hour window (you can adjust)

export async function POST(req: Request) {
  try {
    // Extract IP address (works in most hosting environments)
    const ip =
      req.headers.get("x-forwarded-for")?.split(",")[0] ||
      "unknown-ip"

    const now = Date.now()
    const record = emailLimits.get(ip)

    if (record) {
      // Reset count after the window
      if (now - record.lastReset > WINDOW_MS) {
        emailLimits.set(ip, { count: 1, lastReset: now })
      } else if (record.count >= MAX_EMAILS) {
        return NextResponse.json(
          { message: "We have already received your message, we will be in touch soon." },
          { status: 429 }
        )
      } else {
        record.count += 1
      }
    } else {
      emailLimits.set(ip, { count: 1, lastReset: now })
    }

    const { name, email, subject, message } = await req.json()

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    })

    const htmlContent = `
      <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; background-color: #ffffff; color: #1f1f1f; border: 1px solid #e0e0e0; border-radius: 10px;">
        <h2 style="color: #4ADEDE;">📩 New Message via Portfolio</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <div style="background: #f9f9f9; padding: 15px; border-left: 4px solid #4ADEDE; border-radius: 6px; white-space: pre-wrap;">
          ${message}
        </div>
      </div>
    `

    await transporter.sendMail({
      from: email,
      to: process.env.GMAIL_USER,
      subject: `Portfolio Contact: ${subject}`,
      html: htmlContent,
      replyTo: email,
    })

    return NextResponse.json(
      { message: "Email sent successfully!" },
      { status: 200 }
    )
  } catch (error) {
    console.error("Error sending email:", error)
    return NextResponse.json(
      { message: "Failed to send email. Please try again." },
      { status: 500 }
    )
  }
}
