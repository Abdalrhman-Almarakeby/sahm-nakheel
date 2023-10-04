export default function FeatureCard({ name, description, src, alt }) {
  return (
    <div className="feature-card">
      <img src={src} alt={alt} />
      <h5 className="heading-2">{name}</h5>
      <p className="main-p text-darkGreen">{description}</p>
    </div>
  );
}
