export default function SectionTitle({ children, description }) {
  return (
    <div className="section-title">
      <h3>{children}</h3>
      <span>{children}</span>
      <p>{description}</p>
    </div>
  );
}
