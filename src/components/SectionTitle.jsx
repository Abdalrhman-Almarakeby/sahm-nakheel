export default function SectionTitle({
  children,
  description,
  className,
  isContactSection,
}) {
  return (
    <div
      className={`relative flex flex-col items-center gap-2.5 text-center md:font-light md:text-inherit lg:py-20 ${className} ${
        isContactSection ? "text-left" : ""
      }`}
    >
      <h3
        className={`text-fill-transparent lg:text-fill-unset relative bg-gradient-t-b bg-clip-text text-4xl font-bold capitalize ms:text-5xl sm:text-6xl sm:leading-[90px] md:text-7xl lg:bg-none lg:font-light ${
          isContactSection ? "text-left" : ""
        }`}
      >
        {children}
      </h3>
      <span
        className={`absolute left-1/2 top-4 hidden w-full -translate-x-1/2 text-5xl text-[#00263a08] ms:top-6 ms:text-7xl sm:top-8 sm:text-8xl lg:block ${
          isContactSection
            ? "2xl:top-0  2xl:left-0  2xl:-translate-x-[87px] 2xl:translate-y-[60px]"
            : ""
        }`}
      >
        {children}
      </span>
      <p
        className={`max-w-[45ch] px-2 text-sm font-light capitalize ms:text-base sm:text-lg md:text-xl ${
          isContactSection ? "text-left" : ""
        }`}
      >
        {description}
      </p>
    </div>
  );
}
