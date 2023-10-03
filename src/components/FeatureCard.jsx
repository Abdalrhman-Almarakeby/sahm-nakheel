export default function FeatureCard({ name, description, src, alt }) {
  return (
    <div className="feature-card">
      <img src={src} alt={alt} />
      <h5>{name}</h5>
      <p>{description}</p>
    </div>
  );
}
