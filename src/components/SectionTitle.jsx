export default function SectionTitle({ children, description }) {
  return (
    <div className={`section-title before-content-[${children}]`}>
      <h3>{children}</h3>
      <p>{description}</p>
    </div>
  );
}
