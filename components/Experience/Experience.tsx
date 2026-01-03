import styles from "./Experience.module.css"

interface ExperienceItem {
  title: string
  company: string
  period: string
  description: string[]
}

interface EducationItem {
  degree: string
  institution: string
  period: string
  description: string
}

const Experience = () => {
  const experiences: ExperienceItem[] = [
    {
      title: "Software Engineer",
      company: "Transdata",
      period: "Nov 2025 - Ongoing",
      description: [
        "Developing and maintaining web applications using React, Node.js, and MongoDB, resulting in a 20% increase in user engagement.",
        "Collaborating with cross-functional teams to design and implement new features, improving overall application performance by 15%.",
        "Participating in code reviews and providing constructive feedback to team members, enhancing code quality and maintainability.",
        "Utilizing Agile methodologies to manage project timelines and deliverables, ensuring timely completion of tasks.",
        "Implementing automated testing frameworks using Jest and Cypress, reducing bug rates by 25%.",
      ],
    },
    {
      title: "Associate Software Engineer",
      company: "MeemSOft Technologies",
      period: "Jan 2024 - Sep 2025",
      description: [
        "Assisted in the development of a customer relationship management (CRM) system using Laravel, contributing to a 10% increase in sales team efficiency.",
        "Collaborated with senior developers to troubleshoot and resolve software bugs, improving application stability by 15%.",
        "Participated in daily stand-up meetings and sprint planning sessions, gaining experience in Agile development practices.",
        "Conducted research on emerging technologies and presented findings to the development team, leading to the adoption of new tools that enhanced productivity.",
        "Created comprehensive documentation for developed features, facilitating easier onboarding for future interns and new team members.",
      ],
    },
    
  ]

  const education: EducationItem[] = [
    {
      degree: "Bachelor of Science in Computer Science",
      institution: "Superior University Gold Campus, Lahore",
      period: "August 2022 - June 2026",
      description:
        "Pursuing a Bachelor's degree in Computer Science with a focus on software development, algorithms, and data structures. Relevant coursework includes Web Development, Database Management, and Software Engineering.",
      },
  ]

  return (
    <section id="experience" className={`section ${styles.experience}`}>
      <div className="container">
        <h2 className="section-title">Experience & Education</h2>

        <div className={styles.content}>
          <div className={styles.experienceSection}>
            <h3 className={styles.sectionTitle}>Work Experience</h3>

            <div className={styles.timeline}>
              {experiences.map((exp, index) => (
                <div key={index} className={styles.timelineItem}>
                  <div className={styles.timelineMarker}></div>
                  <div className={styles.timelineContent}>
                    <h4 className={styles.itemTitle}>{exp.title}</h4>
                    <div className={styles.itemMeta}>
                      <span className={styles.company}>{exp.company}</span>
                      <span className={styles.period}>{exp.period}</span>
                    </div>
                    <ul className={styles.description}>
                      {exp.description.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.educationSection}>
            <h3 className={styles.sectionTitle}>Education</h3>

            <div className={styles.timeline}>
              {education.map((edu, index) => (
                <div key={index} className={styles.timelineItem}>
                  <div className={styles.timelineMarker}></div>
                  <div className={styles.timelineContent}>
                    <h4 className={styles.itemTitle}>{edu.degree}</h4>
                    <div className={styles.itemMeta}>
                      <span className={styles.company}>{edu.institution}</span>
                      <span className={styles.period}>{edu.period}</span>
                    </div>
                    <p className={styles.eduDescription}>{edu.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
