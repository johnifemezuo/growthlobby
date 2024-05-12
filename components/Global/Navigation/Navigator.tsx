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
      className={`z-50  md:mx-auto bg-black/80 md:rounded-full  py-3 md:max-w-[670px] px-3  fixed bottom-5 left-3 md:inset-x-0 ${
        isOpen ? "rounded-lg " : "rounded-full"
      }`}
    >
      {isOpen && (
        <div className="items-center justify-between md:flex pt-2 md:pt-0">
          <Link href="/#hero" className="-mb-1 ml-3 md:ml-0">
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
        {isOpen ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M10.5859 12L2.79297 4.20706L4.20718 2.79285L12.0001 10.5857L19.793 2.79285L21.2072 4.20706L13.4143 12L21.2072 19.7928L19.793 21.2071L12.0001 13.4142L4.20718 21.2071L2.79297 19.7928L10.5859 12Z"></path>
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M3 4H21V6H3V4ZM9 11H21V13H9V11ZM3 18H21V20H3V18Z"></path>
          </svg>
        )}
      </button>
    </div>
  );
};
