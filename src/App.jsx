import { useState } from "react";
import ProjectCard from "./projectCard";

export default function App() {
  const [activeTab, setActiveTab] = useState("industry");

  return (
    <main
      style={{
        minHeight: "100vh",
        padding: "4rem",
        display: "grid",
        gridTemplateColumns: "320px 1fr",
        gap: "4rem"
      }}
    >
      {/* LEFT SIDEBAR */}
      <aside
        style={{
          position: "sticky",
          top: "4rem",
          height: "fit-content"
        }}
      >
        <h1 style={{ fontSize: "2.2rem", marginBottom: "0.5rem" }}>
          Annapoorani Lakshmanan
        </h1>

        <p
          style={{
            color: "var(--purple-accent)",
            marginBottom: "1.25rem"
          }}
        >
          AI/ML Student
        </p>

        <p style={{ opacity: 0.75, marginBottom: "2.5rem" }}>
          Building applied, data-driven systems with real-world impact.
        </p>

        {/* NAV */}
        <nav
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
            marginBottom: "2.5rem"
          }}
        >
          {[
            ["01.", "About", "#about"],
            ["02.", "Projects", "#projects"],
            ["03.", "Skills", "#skills"],
            ["04.", "Education", "#education"]
          ].map(([num, label, link]) => (
            <a
              key={label}
              href={link}
              style={{
                textDecoration: "none",
                fontSize: "0.95rem",
                color: "var(--text-main)"
              }}
            >
              <span
                style={{
                  color: "var(--purple-accent)",
                  marginRight: "0.75rem"
                }}
              >
                {num}
              </span>
              {label}
            </a>
          ))}
        </nav>

        {/* SOCIALS */}
      <div style={{ display: "flex", gap: "1.25rem", opacity: 0.85 }}>
  <a
    href="https://github.com/annapooo"
    target="_blank"
    rel="noreferrer"
    style={{
      color: "var(--text-main)",
      textDecoration: "none"
    }}
    onMouseEnter={e =>
      (e.currentTarget.style.color = "var(--purple-accent)")
    }
    onMouseLeave={e =>
      (e.currentTarget.style.color = "var(--text-main)")
    }
  >
    GitHub
  </a>

  <a
    href="https://www.linkedin.com/in/annapoorani-lakshmanan-a60655335/"
    target="_blank"
    rel="noreferrer"
    style={{
      color: "var(--text-main)",
      textDecoration: "none"
    }}
    onMouseEnter={e =>
      (e.currentTarget.style.color = "var(--purple-accent)")
    }
    onMouseLeave={e =>
      (e.currentTarget.style.color = "var(--text-main)")
    }
  >
    LinkedIn
  </a>

  <a
    href="mailto:anprnilax0414@gmail.com"
    style={{
      color: "var(--text-main)",
      textDecoration: "none"
    }}
    onMouseEnter={e =>
      (e.currentTarget.style.color = "var(--purple-accent)")
    }
    onMouseLeave={e =>
      (e.currentTarget.style.color = "var(--text-main)")
    }
  >
    Email
  </a>
</div>


      </aside>

      {/* RIGHT CONTENT */}
      <div style={{ maxWidth: "820px" }}>
        {/* ABOUT */}
        <section id="about" style={{ marginBottom: "5rem" }}>
          <h2 style={{ marginBottom: "1.5rem" }}>
            <span style={{ color: "var(--purple-accent)" }}>01.</span> About
          </h2>

          <p style={{ opacity: 0.85, lineHeight: "1.7" }}>
            I am an AI/ML undergraduate student focused on building practical systems that
            combine machine learning, backend engineering, and infrastructure.
            I have experience delivering end-to-end prototypes in industry
            settings, working across databases, APIs, and system workflows.
          </p>
        </section>

        {/* PROJECTS */}
        <section id="projects" style={{ marginBottom: "5rem" }}>
          <h2 style={{ marginBottom: "2rem" }}>
            <span style={{ color: "var(--purple-accent)" }}>02.</span> Projects
          </h2>

          {/* TABS */}
          <div style={{ display: "flex", gap: "1.5rem", marginBottom: "2.5rem" }}>
            <button
              onClick={() => setActiveTab("industry")}
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                fontSize: "0.95rem",
                fontWeight: activeTab === "industry" ? "600" : "400",
                color:
                  activeTab === "industry"
                    ? "var(--purple-accent)"
                    : "var(--text-main)"
              }}
            >
              Industry Projects
            </button>

            <button
              onClick={() => setActiveTab("personal")}
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                fontSize: "0.95rem",
                fontWeight: activeTab === "personal" ? "600" : "400",
                color:
                  activeTab === "personal"
                    ? "var(--purple-accent)"
                    : "var(--text-main)"
              }}
            >
              Personal Projects
            </button>
          </div>

          {/* INDUSTRY PROJECTS */}
          {activeTab === "industry" && (
            <>
              <ProjectCard
                title="Document Signing System"
                subtitle="Full-stack Prototype · Industry Project"
                bullets={[
                  "Designed and implemented an end-to-end document signing workflow",
                  "Built frontend interfaces and backend APIs",
                  "Migrated data layer from SQL to MongoDB for scalability",
                  "Delivered a production-ready prototype"
                ]}
                tech="React, Node.js, Express, MongoDB, SQL"
              />

              <ProjectCard
                title="Lead Management System"
                subtitle="Backend Developer · Industry Project"
                bullets={[
                  "Implemented missing lead and task workflows",
                  "Fixed broken backend logic and data flow",
                  "Redesigned database schemas",
                  "Made targeted frontend fixes in React"
                ]}
                tech="Node.js, Express, MongoDB, React"
              />

              <ProjectCard
                title="VPN Network Setup"
                subtitle="DevOps / Systems · Industry Task"
                bullets={[
                  "Set up and configured a VPN on a cloud-hosted server",
                  "Worked with tunneling and routing configurations",
                  "Debugged connectivity issues related to network routing"
                ]}
                tech="Linux, SSH, VPS, VPN, WireGuard"
              />
            </>
          )}

          {/* PERSONAL PROJECTS */}
          {activeTab === "personal" && (
            <>
              <ProjectCard
                title="Meeting Minutes (MOM) Generator"
                subtitle="AI/ML · Personal Project"
                bullets={[
                  "Built an automated pipeline to generate structured Minutes of Meeting from audio",
                  "Used Whisper for speech-to-text transcription",
                  "Designed rule-based summarization using NLP and regex",
                  "Focused on extracting actionable, readable summaries"
                ]}
                tech="Python, Whisper, NLTK, Regex"
              />

              <ProjectCard
                title="Rain Prediction & Alert System"
                subtitle="AI/ML · Personal Project"
                bullets={[
                  "Built a data-driven alerting system using historical and real-time weather data",
                  "Implemented an SVM-based classifier",
                  "Integrated Twilio to send SMS alerts based on rain probability"
                ]}
                tech="Python, scikit-learn, Weather API, Twilio, Tkinter"
              />
            </>
          )}
        </section>

        {/* SKILLS */}
        <section id="skills" style={{ marginBottom: "5rem" }}>
          <h2 style={{ marginBottom: "2rem" }}>
            <span style={{ color: "var(--purple-accent)" }}>03.</span> Skills
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              gap: "1.5rem"
            }}
          >
            {[
              ["Languages", "Python, JavaScript, SQL"],
              ["Machine Learning", "scikit-learn, NLP, feature engineering"],
              ["Backend", "Node.js, Express, REST APIs, MongoDB"],
              ["Systems", "Linux, SSH, VPS, VPN basics"],
              ["Tools", "Git, GitHub, Postman, Twilio, Whisper"]
            ].map(([title, content]) => (
              <div
                key={title}
                style={{
                  background: "rgba(124, 58, 237, 0.03)",
                  border: "1px solid rgba(124, 58, 237, 0.15)",
                  borderRadius: "10px",
                  padding: "1.25rem"
                }}
              >
                <h3
                  style={{
                    fontSize: "1rem",
                    marginBottom: "0.5rem",
                    color: "var(--purple-accent)"
                  }}
                >
                  {title}
                </h3>
                <p>{content}</p>
              </div>
            ))}
          </div>
        </section>

        {/* EDUCATION */}
        <section id="education">
          <h2 style={{ marginBottom: "2rem" }}>
            <span style={{ color: "var(--purple-accent)" }}>04.</span> Education
          </h2>

          <div
            style={{
              background: "rgba(124, 58, 237, 0.04)",
              border: "1px solid rgba(124, 58, 237, 0.2)",
              borderRadius: "10px",
              padding: "1.5rem",
              maxWidth: "600px"
            }}
          >
            <h3>B.E — CSE(Artificial Intelligence & Machine Learning)</h3>
            <p>Jerusalem College of Engineering</p>
            <p style={{ fontSize: "0.85rem", opacity: 0.7 }}>
              Undergraduate · Chennai, India
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
