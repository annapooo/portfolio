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
        <hr
  style={{
    marginTop: "3rem",
    border: "none",
    borderTop: "1px solid #E3DEF2"
  }}
/>

      </section>
    </main>
  )
}
