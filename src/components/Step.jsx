import arrow from "../assets/icons/next-arrow.svg";

export default function Step({ src, alt, name, description, arrowAfter }) {
  return (
    <>
      <div className="flex max-w-[15rem] flex-col items-center gap-3 p-8 text-center xl:p-0">
        <img src={src} alt={alt} />
        <h5 className="text-xl font-bold ms:text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl">
          {name}
        </h5>
        <p className="text-sm font-light capitalize text-darkGreen ms:text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl">
          {description}
        </p>
      </div>
      {arrowAfter && (
        <img
          src={arrow}
          alt="Dashed arrow going to the next step"
          className="hidden xl:block"
        />
      )}
    </>
  );
}
