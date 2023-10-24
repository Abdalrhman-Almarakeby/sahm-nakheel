export default function ContactFrom() {
  return (
    <form className="flex flex-col gap-3.5 text-xs text-lightGreen ms:text-sm">
      <input
        name="name"
        id="name"
        autoComplete="on"
        type="text"
        placeholder="Name"
        className="rounded-2xl px-4 py-2.5 text-inherit shadow-testimonials placeholder:text-inherit focus-within:outline-lightGreen"
      />
      <input
        autoComplete="on"
        id="email"
        name="email"
        type="email"
        placeholder="Email"
        className="rounded-2xl px-4 py-2.5 text-inherit shadow-testimonials placeholder:text-inherit focus-within:outline-lightGreen"
      />
      <textarea
        autoComplete="on"
        id="message"
        name="message"
        placeholder="Query"
        className="min-h-[100px] resize-none rounded-2xl px-4 py-2.5 text-inherit shadow-testimonials placeholder:absolute placeholder:top-1/2 placeholder:-translate-y-1/2 placeholder:text-inherit focus-within:outline-lightGreen focus:placeholder:invisible"
      />
      <div className="flex px-2">
        <p className="pr-5 text-2xs text-darkBlue ms:text-xs">
          You will receive a response within 48 hours from our team.
        </p>
        <input
          type="submit"
          value="Send Message"
          className="btn pointer px-4 py-2 text-xs ms:text-sm"
          disabled
        />
      </div>
    </form>
  );
}
