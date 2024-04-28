import Link from "next/link";

export const DealContact = () => (
  <div className="p-5 space-y-5 md:space-x-0 md:p-12 bg-black/20 rounded-3xl lg:flex items-center justify-between w-full">
    <div className="space-y-3">
      <h1 className="text-lg text-white  md:text-xl lg:text-2xl xl:text-2xl font-manrope font-semibold relative">
        Are you interested in a quoted project?
      </h1>
      <p className="text-zinc-300">
        If your project doesn&lsquo;t fit the plans mentioned above or if
        you&lsquo;d like to discuss before deciding, book a call with us.
      </p>
    </div>

    <Link
      href="https://cal.com/john-ifemezuo/15min"
    target="_blank"
      className="inline-block"
    >
      <button className=" min-w-[150px] space-x-4 bg-white hover:bg-black hover:text-white transition-all duration-300 text-black rounded-full py-4 px-8 font-medium  text-cent">
        Book a call
      </button>
    </Link>
  </div>
);
