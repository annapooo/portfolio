export default function ProjectCard({ title, subtitle, bullets, tech }) {
  return (
    <div
      style={{
        padding: "1.5rem",
        border: "1px solid #E3DEF2",
        borderRadius: "8px",
        marginBottom: "2rem"
      }}
    >
      <h4 style={{ fontSize: "1.25rem", marginBottom: "0.5rem" }}>
        {title}
      </h4>

      <p style={{ fontSize: "0.95rem", marginBottom: "0.75rem" }}>
        {subtitle}
      </p>

      <ul style={{ paddingLeft: "1.2rem", marginBottom: "0.75rem" }}>
        {bullets.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      <p style={{ fontSize: "0.85rem", color: "var(--text-muted)" }}>
        Tech: {tech}
      </p>
    </div>
  )
}
