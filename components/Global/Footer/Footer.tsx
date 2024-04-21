import Link from "next/link";
import { Logo } from "../Icons/Logo";

export const Footer = () => {
  return (
    <div className="rounded-3xl bg-[#F6F6F6] mt-12">
      <div className="md:flex items-center justify-between px-4 md:px-12 lg:px-20 py-12 lg:py-34">
        <Logo className="w-[200px] md:w-[260px]" />

        <div className="flex items-center space-x-6 mt-6 md:mt-0">
          <Link href="/" className="text-zinc-600 hover:text-sky-600 text-lg: md:text-xl">Privacy policy</Link>
          <Link href="https://johnifemezuo.vercel.app" className="text-zinc-600 hover:text-sky-600 text-lg: md:text-xl" target="_blank">About me</Link>
          <Link href="https://johnsinsight.com" className="text-zinc-600 hover:text-sky-600 text-lg: md:text-xl" target="_blank">Blog</Link>
        </div>
      </div>

      <p className="text-center text-zinc-600 text-sm md:text-lg pb-4">
        © 2024 Glowthlobby Studios
      </p>
    </div>
  );
};
