export default function Step({ src, alt, name, description }) {
  return (
    <div className="flex flex-col items-center gap-3 text-center max-w-[15rem]">
      <img src={src} alt={alt} />
      <h5 className="heading-2">{name}</h5>
      <p className="main-p text-darkGreen">{description}</p>
    </div>
  );
}
