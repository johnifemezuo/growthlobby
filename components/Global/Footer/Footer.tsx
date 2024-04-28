import Link from "next/link";
import { Logo } from "../Icons/Logo";

export const Footer = () => {
  return (
    <div className="rounded-3xl bg-[#F6F6F6] mt-12">
      <div className="lg:flex items-center justify-between px-4 md:px-12 lg:px-20 py-12 lg:py-34">
        <Logo className="w-[200px] md:w-[260px] mx-auto md:mx-0" />

        <div className="flex justify-center md:items-center space-x-6 mt-6 md:mt-0 flex-wrap ">
          <Link href="https://www.instagram.com/john_ifemezuo/" className="text-zinc-600 hover:text-sky-600 text-lg: md:text-xl">Instagram</Link>
          <Link href="https://www.behance.net/johnifem" className="text-zinc-600 hover:text-sky-600 text-lg: md:text-xl">Behance</Link>
          <Link href="https://dribbble.com/ifemezuo" className="text-zinc-600 hover:text-sky-600 text-lg: md:text-xl" target="_blank">Dribbble</Link>
          <Link href="https://www.linkedin.com/in/john-ifemezuo/" className="text-zinc-600 hover:text-sky-600 text-lg: md:text-xl" target="_blank">Linkedin</Link>
          <Link href="https://johnsinsight.com" className="text-zinc-600 hover:text-sky-600 text-lg: md:text-xl" target="_blank">Blog</Link>
        </div>
      </div>

      <p className="text-center text-zinc-600 text-sm md:text-lg pb-4">
      © Growthlobby 2024. All rights reserved.
      </p>
    </div>
  );
};
