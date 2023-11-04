import { useState } from "react";

export default function ContactFrom() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  function handleInputsChange(event) {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  }

  return (
    <form className="flex flex-col gap-3.5 text-xs text-lightGreen ms:gap-4 ms:text-sm sm:gap-6 sm:text-lg md:gap-7 md:text-lg lg:text-xl xl:gap-8 xl:text-2xl">
      <input
        required
        onChange={handleInputsChange}
        value={formData.name}
        name="name"
        id="name"
        autoComplete="on"
        type="text"
        placeholder="Name"
        className="rounded-2xl px-4 py-2.5 text-inherit shadow-testimonials placeholder:text-inherit focus-within:outline-lightGreen sm:p-4 lg:p-6 xl:shadow-none"
      />
      <input
        required
        onChange={handleInputsChange}
        autoComplete="on"
        value={formData.email}
        id="email"
        name="email"
        type="email"
        placeholder="Email"
        className="rounded-2xl px-4 py-2.5 text-inherit shadow-testimonials placeholder:text-inherit focus-within:outline-lightGreen sm:p-4 lg:p-6 xl:shadow-none"
      />
      <textarea
        required
        onChange={handleInputsChange}
        autoComplete="on"
        value={formData.message}
        id="message"
        name="message"
        placeholder="Query"
        className="max-h-80 min-h-[100px] lg:min-h-[150px] lg:max-h-[500px] resize-y rounded-2xl px-4 py-2.5 text-inherit shadow-testimonials placeholder:absolute placeholder:top-1/2 placeholder:-translate-y-1/2 placeholder:text-inherit focus-within:outline-lightGreen focus:placeholder:invisible sm:p-4 lg:p-6 xl:shadow-none"
      />
      <div className="flex justify-between items-center px-2">
        <p className="pr-5 text-2xs text-darkBlue ms:text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl">
          You will receive a response within 48 hours from our team.
        </p>
        <input
          type="submit"
          value="Send Message"
          className="px-4 py-2 text-xs cursor-pointer btn pointer ms:text-sm sm:text-lg md:text-lg lg:text-xl xl:text-2xl"
          disabled
        />
      </div>
    </form>
  );
}
