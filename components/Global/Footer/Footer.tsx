import Link from "next/link";
import { Logo } from "../Icons/Logo";

export const Footer = () => {
  return (
    <div className="rounded-3xl bg-[#F6F6F6] mt-12">
      <div className="lg:flex items-center justify-between px-4 md:px-12 lg:px-20 py-12 lg:py-34">
        <Logo className="w-[200px] md:w-[260px] mx-auto md:mx-0" />

        <div>
          <div className="flex justify-center md:items-center space-x-6 mt-6 md:mt-0 flex-wrap ">
            <Link
              href="https://web.facebook.com/profile.php?id=61560579084916"
              className="text-zinc-600 hover:text-sky-600 text-lg: md:text-xl"
              target="_blank"
            >
              Facebook
            </Link>
            <Link
              href="https://www.instagram.com/growthlobby.co?igsh=dzJkenNtN3UyeTFl&utm_source=qr"
              className="text-zinc-600 hover:text-sky-600 text-lg: md:text-xl"
            >
              Instagram
            </Link>
            <Link
              href="https://www.behance.net/johnifem"
              className="text-zinc-600 hover:text-sky-600 text-lg: md:text-xl"
            >
              Behance
            </Link>
            <Link
              href="https://dribbble.com/ifemezuo"
              className="text-zinc-600 hover:text-sky-600 text-lg: md:text-xl"
              target="_blank"
            >
              Dribbble
            </Link>
            <Link
              href="https://www.linkedin.com/company/103254607/admin/feed/posts/"
              className="text-zinc-600 hover:text-sky-600 text-lg: md:text-xl"
              target="_blank"
            >
              Linkedin
            </Link>
          </div>

          <p className="text-center md:text-right text-zinc-600 text-sm md:text-sm mt-6 pb-4">
            www.Growthlobbyagency@gmail.com
          </p>
        </div>
      </div>

      <p className="text-center text-zinc-600 text-sm md:text-lg pb-4">
        © Growthlobby 2024. All rights reserved.
      </p>
    </div>
  );
};
