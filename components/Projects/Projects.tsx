"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import styles from "./Projects.module.css"
import { ExternalLink, Github } from "lucide-react"
import { projects, type ProjectCategory, type Project } from "@/data/projectsData"

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>("all")

  const filteredProjects =
    activeCategory === "all" ? projects : projects.filter((project) => project.category.includes(activeCategory))

  return (
    <section id="projects" className={`section ${styles.projects}`}>
      <div className="container">
        <h2 className="section-title">My Projects</h2>

        <div className={styles.categories}>
          <button
            className={`${styles.categoryBtn} ${activeCategory === "all" ? styles.active : ""}`}
            onClick={() => setActiveCategory("all")}
          >
            All
          </button>
          <button
            className={`${styles.categoryBtn} ${activeCategory === "fullstack" ? styles.active : ""}`}
            onClick={() => setActiveCategory("fullstack")}
          >
            Full Stack
          </button>
          <button
            className={`${styles.categoryBtn} ${activeCategory === "ai" ? styles.active : ""}`}
            onClick={() => setActiveCategory("ai")}
          >
            AI & ML
          </button>
          <button
            className={`${styles.categoryBtn} ${activeCategory === "aiagent" ? styles.active : ""}`}
            onClick={() => setActiveCategory("aiagent")}
          >
            Ai Agent & Chatbot
          </button>
          <button
            className={`${styles.categoryBtn} ${activeCategory === "mobile" ? styles.active : ""}`}
            onClick={() => setActiveCategory("mobile")}
          >
            Mobile
          </button>
        </div>

        <div className={styles.projectsGrid}>
          {filteredProjects.map((project) => (
            <div key={project.id} className={styles.projectCard}>
              <div className={styles.projectImage}>
                <Image
                  src={project.image}
                  alt={project.title}
                  width={600}
                  height={400}
                  className={styles.image}
                />
                <div className={styles.overlay}>
                  <div className={styles.links}>
                    {project.githubUrl && (
                      <Link
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.link}
                        aria-label="GitHub Repository"
                      >
                        <Github size={20} />
                      </Link>
                    )}
                    {project.liveUrl && (
                      <Link
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.link}
                        aria-label="Live Demo"
                      >
                        <ExternalLink size={20} />
                      </Link>
                    )}
                  </div>
                </div>
              </div>
              <div className={styles.projectContent}>
                <h3 className={styles.projectTitle}>{project.title}</h3>
                <p className={styles.projectDescription}>{project.description}</p>
                <div className={styles.technologies}>
                  {project.technologies.map((tech, index) => (
                    <span key={index} className={styles.tech}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
