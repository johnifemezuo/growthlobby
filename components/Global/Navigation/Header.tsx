import Link from "next/link";
import Button from "../Button/Button";
import { Logo } from "../Icons/Logo";

export const Header = () => {
  return (
    <div id="hero"  className="flex items-center justify-between">
      <Logo className="w-[180px] md:w-[230px]" />

      <Link href="https://cal.com/john-ifemezuo/15min" target="_blank">
        <button className="bg-black border-2 hover:bg-white/5 hover:text-black transition-all duration-300 text-sm md:text-base text-white rounded-full font-medium border-black py-2 md:py-3 px-4  md:px-6 hover:shadow-xl">
        Book a call
  </button>
      </Link>

    </div>
  );
};
