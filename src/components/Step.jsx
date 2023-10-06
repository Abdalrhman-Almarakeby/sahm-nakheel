export default function Step({ src, alt, name, description }) {
  return (
    <div className="flex flex-col p-8 xl:p-0 items-center gap-3 text-center border shadow-lg xl:rounded-none xl:shadow-none xl:border-none rounded-xl max-w-[15rem]">
      <img src={src} alt={alt} />
      <h5 className="heading-2">{name}</h5>
      <p className="main-p text-darkGreen">{description}</p>
    </div>
  );
}
