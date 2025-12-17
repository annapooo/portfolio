import ProjectCard from "./projectCard";

export default function App() {
  return (
   <main
  style={{
    minHeight: "100vh",
    padding: "4rem 2rem",
    display: "flex",
    justifyContent: "center"
  }}
>    
 <div style={{ maxWidth: "900px", width: "100%" }}>
    <nav
    style={{
      width: "100%",
      maxWidth: "900px",
      marginBottom: "3rem",
      display: "flex",
      gap: "2rem",
      fontSize: "0.95rem"
    }}
  >
    <a href="#home" style={{ textDecoration: "none", color: "var(--text-main)" }}>
      Home
    </a>
    <a href="#projects" style={{ textDecoration: "none", color: "var(--text-main)" }}>
      Projects
    </a>
    <a href="#skills" style={{ textDecoration: "none", color: "var(--text-main)" }}>
      Skills
    </a>
  </nav>
     {/* Home Section */}
      <section id="home" style={{ maxWidth: "800px", width: "100%" }}>
        <h1 style={{ fontSize: "2.5rem", marginBottom: "0.5rem" }}>
          Annapoorani Lakshmanan
        </h1>

        <h2
          style={{
            fontSize: "1.25rem",
            fontWeight: "500",
            color: "var(--purple-accent)",
            marginBottom: "1.5rem"
          }}
        >
          AI/ML Student building applied, data-driven systems
        </h2>

        <p style={{ fontSize: "1rem", marginBottom: "2rem" }}>
          I design and develop practical applications that combine machine learning,
          backend logic, and system integrations, with experience working on real-world
          industry projects.
        </p>

        <div style={{ display: "flex", gap: "1.5rem" }}>
          <a href="https://github.com/annapooo" target="_blank" rel="noreferrer" style={{textDecoration:"none", color:"var(--purple-accent)"}}>GitHub</a>
          <a href="https://www.linkedin.com/in/annapoorani-lakshmanan-a60655335/" target="_blank" rel="noreferrer" style={{textDecoration:"none", color:"var(--purple-accent)"}}>LinkedIn</a>
          <a href="mailto:anprnilax0414@gmail.com" style={{textDecoration:"none", color:"var(--purple-accent)"}}>Email</a>
        </div>
        <hr style={{marginTop: "3rem",border: "none",borderTop: "1px solid #E3DEF2"}}/>
      </section>
      {/* Projects Section */}
    <section id="projects" style={{ marginTop: "4rem" }}>
      <h2 style={{ fontSize: "1.75rem", marginBottom: "2rem" }}>Projects</h2>
      <h3 style={{ fontSize: "1.1rem", fontWeight: "500",color: "var(--purple-accent)",marginBottom: "2rem"}}> Industry Projects </h3>
     <ProjectCard
  title="Document Signing System"
  subtitle="Full-stack Prototype · Industry Project"
  bullets={[
    "Designed and implemented an end-to-end document signing workflow",
    "Built frontend interfaces and backend APIs for document lifecycle management",
    "Re-architected the data layer from SQL to MongoDB based on scalability requirements",
    "Delivered a working prototype that served as the foundation for further development"
  ]}
  tech="React, Node.js, Express, MongoDB, SQL"
/>

<ProjectCard
  title="Lead Management System"
  subtitle="Backend Developer · Industry Project"
  bullets={[
    "Implemented missing core backend workflows for lead and task management",
    "Fixed broken logic and improved workflow consistency",
    "Modified and redesigned database schemas to address missing or incorrect data models",
    "Made targeted frontend fixes in the React codebase to resolve UI state issues (light/dark mode)"
  ]}
  tech="Node.js, Express, MongoDB, React (minor fixes)"
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

<h3 style={{fontSize: "1.1rem",fontWeight: "500",color: "var(--purple-accent)",marginBottom: "2rem",marginTop: "3rem"}}>Personal Projects</h3>
<ProjectCard
  title="Meeting Minutes (MOM) Generator"
  subtitle="AI/ML · Personal Project"
  bullets={[
    "Built an automated pipeline to generate structured Minutes of Meeting from audio recordings",
    "Used Whisper for speech-to-text transcription",
    "Designed a custom summarization approach using NLTK, regex-based filtering, and pattern matching",
    "Focused on extracting actionable and readable summaries rather than generic text condensation"
  ]}
  tech="React, Python, Whisper, NLTK, Regex"
/>

<ProjectCard
  title="Rain Prediction & Alert System"
  subtitle="AI/ML · Personal Project"
  bullets={[
    "Built a data-driven alerting system to estimate rain likelihood using historical and real-time weather data",
    "Implemented an SVM-based classifier as part of the decision pipeline",
    "Integrated Twilio to send SMS reminders when rain probability exceeded defined thresholds",
    "Focused on end-to-end workflow design rather than model performance optimization"
  ]}
  tech="Python, scikit-learn, Weather API, Twilio, Tkinter"
/>
  {/* Skills Section */}
  </section>
  <section id="skills" style={{ marginTop: "4rem" }}>
  <h2 style={{ fontSize: "1.75rem", marginBottom: "2rem" }}>Skills</h2>
  <div style={{ display: "grid", gap: "2rem" }}>
  <div>
    <h3 style={{ fontSize: "1.1rem", marginBottom: "0.5rem" }}>Languages</h3>
    <p>Python, JavaScript, SQL</p>
  </div>

  <div>
    <h3 style={{ fontSize: "1.1rem", marginBottom: "0.5rem" }}>
      Machine Learning & Data
    </h3>
    <p>
      scikit-learn, NLP, data preprocessing & feature engineering
    </p>
  </div>

  <div>
    <h3 style={{ fontSize: "1.1rem", marginBottom: "0.5rem" }}>
      Backend & Systems
    </h3>
    <p>
      Node.js, Express.js, REST APIs, backend workflow logic, MongoDB, SQL databases
    </p>
  </div>

  <div>
    <h3 style={{ fontSize: "1.1rem", marginBottom: "0.5rem" }}>
      DevOps & Infrastructure
    </h3>
    <p>
      Linux, SSH, VPS setup, VPN & tunneling basics
    </p>
  </div>

  <div>
    <h3 style={{ fontSize: "1.1rem", marginBottom: "0.5rem" }}>
      Tools & Integrations
    </h3>
    <p>
      Git & GitHub, Postman, VS Code, Twilio API, external APIs, Whisper
    </p>
  </div>
</div>
</section>
  </div>
  </main>
  );
}
