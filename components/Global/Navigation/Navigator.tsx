import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { TabLogo } from "../Icons/TabLogo";

const NavLink = ({
  name,
  link,
  active,
}: {
  name: string;
  link: string;
  active?: boolean;
}) => {
  return (
    <Link href={link}>
      <button
        className={`capitalize block rounded-3xl py-2 px-4  transition-all duration-300 ${
          active
            ? "bg-white text-black hover:bg-white"
            : "bg-transparent hover:bg-white/10 text-white"
        }`}
      >
        {name}
      </button>
    </Link>
  );
};

export const Navigation = () => {
  const { pathname } = useRouter();
  console.log(pathname);

  const router = useRouter();
  const { hash } = router.query;

  // Check if the hash exists in the current URL
  const hashExists = hash && hash[0] === "packages";
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={`z-50  md:mx-auto bg-black/80 md:rounded-full  py-3 md:max-w-[670px] px-3  fixed bottom-8 left-3 md:inset-x-0 ${
        isOpen ? "rounded-lg " : "rounded-full"
      }`}
    >
      {isOpen && (
        <div className="items-center justify-between md:flex">
          <Link href="/#hero" className="-mb-1 hidden md:block">
            <button>
              <TabLogo />
            </button>
          </Link>

          <NavLink name="Intro" link="/#intro" active={pathname === "#intro"} />
          <NavLink
            name="services"
            link="/#services"
            active={pathname === "#services"}
          />
          <NavLink name="works" link="/#works" active={pathname === "#works"} />
          <NavLink
            name="packages"
            link="/#packages"
            active={pathname === "#packages"}
          />
          <NavLink name="about" link="#about" active={pathname === "#about"} />
          <NavLink
            name="contact us"
            link="#contactus"
            active={pathname === "#intro"}
          />
        </div>
      )}

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="text-white w-8 h-8 md:hidden px-1"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M3 4H21V6H3V4ZM9 11H21V13H9V11ZM3 18H21V20H3V18Z"></path>
        </svg>
      </button>
    </div>
  );
};
