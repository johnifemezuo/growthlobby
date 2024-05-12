import Image from "next/image";
import Link from "next/link";

export const BookACallCard = () => {
  return (
    <div className="bg-white mt-12 shadow-xl relative overflow-hidden rounded-2xl px-5 py-12 lg:p-20 space-y-6 text-center h-[400px] lg:w-[500px] lg:h-[500px]  mx-auto">
      <Image
        src="/images/rec8.png"
        className="w-12 md:w-[80px] absolute -bottom-1 left-0 "
        width={300}
        height={300}
        alt="phone"
      />
      <Image
        src="/images/rec9.png"
        className="w-20 md:w-[80px] absolute -top-7 right-0 "
        width={300}
        height={300}
        alt="phone"
      />

      <div className="rounded-full border-4 border-zinc-200 overflow-hidden w-24 h-24 lg:w-28 lg:h-28 mx-auto grid place-content-center">
        <Image
          src="/images/phone.png"
          className="w-[80px] "
          width={300}
          height={300}
          alt="phone"
        />
      </div>
      <div className="space-y-5">
        <h1 className="text-3xl font-semibold">Book a 15-minute intro call</h1>

        <Link
          href="https://cal.com/growthlobby/15min"
          target="_blank"
          className="inline-block w-full"
        >
          <button className="bg-black text-white rounded-full py-4 px-6 w-full text-cent">
            Book a call
          </button>
        </Link>
      </div>
    </div>
  );
};
