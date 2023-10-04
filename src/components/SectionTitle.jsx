export default function SectionTitle({ children, description }) {
  return (
    <div className="section-title">
      <h3 className="main-heading">{children}</h3>
      <span>{children}</span>
      <p className="main-p max-w-[45ch]">{description}</p>
    </div>
  );
}
