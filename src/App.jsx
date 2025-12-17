export default function App() {
  return (
   <main
  style={{
    minHeight: "100vh",
    padding: "4rem 2rem",
    display: "flex",
    justifyContent: "center"
  }}
>     <div style={{ maxWidth: "900px", width: "100%" }}>
     {/* Home Section */}
      <section style={{ maxWidth: "800px", width: "100%" }}>
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
          <a href="https://www.linkedin.com/in/annapoorani-lakshmanan-a60655335/" target="_blank" rel="" style={{textDecoration:"none", color:"var(--purple-accent)"}}>LinkedIn</a>
          <a href="mailto:anprnilax0414@gmail.com" style={{textDecoration:"none", color:"var(--purple-accent)"}}>Email</a>
        </div>
        <hr style={{marginTop: "3rem",border: "none",borderTop: "1px solid #E3DEF2"}}/>
      </section>
      {/* Projects Section */}
    <section style={{ marginTop: "4rem" }}>
      <h2 style={{ fontSize: "1.75rem", marginBottom: "2rem" }}>Projects</h2>
      <h3 style={{ fontSize: "1.1rem", fontWeight: "500",color: "var(--purple-accent)",marginBottom: "2rem"}}> Industry Projects </h3>
      <div
  style={{
    padding: "1.5rem",
    border: "1px solid #E3DEF2",
    borderRadius: "8px",
    marginBottom: "2rem"
  }}
>
  <h4 style={{ fontSize: "1.25rem", marginBottom: "0.5rem" }}>
    Document Signing System
  </h4>

  <p style={{ fontSize: "0.95rem", marginBottom: "0.75rem" }}>
    Full-stack Prototype · Industry Project
  </p>

  <ul style={{ paddingLeft: "1.2rem", marginBottom: "0.75rem" }}>
    <li>Designed and implemented an end-to-end document signing workflow</li>
    <li>Built frontend interfaces and backend APIs for document lifecycle management</li>
    <li>Re-architected the data layer from SQL to MongoDB based on scalability requirements</li>
    <li>Delivered a working prototype that served as the foundation for further development</li>
  </ul>

  <p style={{ fontSize: "0.85rem", color: "var(--text-muted)" }}>
    Tech: React, Node.js, Express, MongoDB, SQL
  </p>
</div>
 <div
  style={{
    padding: "1.5rem",
    border: "1px solid #E3DEF2",
    borderRadius: "8px",
    marginBottom: "2rem"
  }}
>
  <h4 style={{ fontSize: "1.25rem", marginBottom: "0.5rem" }}>
    Lead Management System
  </h4>

  <p style={{ fontSize: "0.95rem", marginBottom: "0.75rem" }}>
    Backend Developer · Industry Project
  </p>

  <ul style={{ paddingLeft: "1.2rem", marginBottom: "0.75rem" }}>
    <li>Implemented missing core backend workflows for lead and task management</li>
    <li>Fixed broken logic and improved workflow consistency</li>
    <li>Modified and redesigned database schemas to address missing or incorrect data models</li>
    <li>Extended backend structure to support future integrations with external lead sources</li>
  </ul>

  <p style={{ fontSize: "0.85rem", color: "var(--text-muted)" }}>
    Tech: React, Node.js, Express, MongoDB
  </p>
  </div>
   <div
  style={{
    padding: "1.5rem",
    border: "1px solid #E3DEF2",
    borderRadius: "8px",
    marginBottom: "2rem"
  }}
>
  <h4 style={{ fontSize: "1.25rem", marginBottom: "0.5rem" }}>
    VPN Network Setup
  </h4>

  <p style={{ fontSize: "0.95rem", marginBottom: "0.75rem" }}>
    DevOps / Systems · Industry Task
  </p>

  <ul style={{ paddingLeft: "1.2rem", marginBottom: "0.75rem" }}>
    <li>Set up and configured a VPN on a cloud-hosted server</li>
    <li>Worked with tunneling and routing configurations</li>
    <li>Debugged connectivity issues related to network routing</li>
  </ul>

  <p style={{ fontSize: "0.85rem", color: "var(--text-muted)" }}>
    Tech: Linux, SSH, VPS, VPN, WireGuard
  </p>
</div>

    </section>
  </div>
    </main>
  );
}
