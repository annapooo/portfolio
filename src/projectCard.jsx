export default function ProjectCard({ title, subtitle, bullets, tech }) {
  return (
    <div
      style={{
        background: "rgba(124, 58, 237, 0.03)",
        border: "1px solid rgba(124, 58, 237, 0.15)",
        borderRadius: "10px",
        padding: "1.5rem",
        marginBottom: "2rem",
        transition: "transform 0.2s ease, box-shadow 0.2s ease"
      }}
      onMouseEnter={e => {
        e.currentTarget.style.transform = "translateY(-2px)";
        e.currentTarget.style.boxShadow =
          "0 10px 30px rgba(124, 58, 237, 0.08)";
      }}
      onMouseLeave={e => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow = "none";
      }}
    >
      <h3
        style={{
          fontSize: "1.2rem",
          marginBottom: "0.25rem",
          color: "var(--purple-accent)"
        }}
      >
        {title}
      </h3>

      <p style={{ fontSize: "0.9rem", opacity: 0.75, marginBottom: "1rem" }}>
        {subtitle}
      </p>

      <ul style={{ paddingLeft: "1.2rem", marginBottom: "1rem" }}>
        {bullets.map((point, idx) => (
          <li key={idx} style={{ marginBottom: "0.4rem" }}>
            {point}
          </li>
        ))}
      </ul>

      <p style={{ fontSize: "0.85rem", opacity: 0.7 }}>
        <strong>Tech:</strong> {tech}
      </p>
    </div>
  );
}
