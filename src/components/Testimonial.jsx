export default function Testimonial({ img, name, content }) {
  return (
    <div className="flex flex-col gap-1.5 rounded-3xl bg-white px-5 pb-4 pt-3 shadow-4 md:p-8 md:px-10 md:py-6 lg:gap-2.5 lg:font-normal lg:shadow-5">
      <img
        src={img}
        alt="User Avatar"
        className="h-12 w-12 md:h-14 md:w-14 lg:h-20 lg:w-20"
      />
      <p className="font-bold text-black lg:text-xl">{name}</p>
      <p className="text-2xs font-light text-black ms:text-xs sm:text-sm md:text-lg lg:text-xl">
        {content}
      </p>
    </div>
  );
}
