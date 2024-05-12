import { useRouter } from "next/router";
import { useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import { TabLogo } from "../Icons/TabLogo";

const NavLink = ({
  name,
  link,
}: {
  name: string;
  link: string;
}) => {
  return (
    <ScrollLink
      to={link}
      spy={true}
      smooth={true}
      duration={500}
      className="capitalize w-[180px] md:w-auto block text-white cursor-pointer md:ml-0 rounded-3xl py-2.5 md:py-2 px-4  transition-all duration-300"
      activeClass="bg-white/30"
    >
      {name}
    </ScrollLink>
  );
};

export const Navigation = () => {
  const { pathname } = useRouter();

  const router = useRouter();
  const { hash } = router.query;

  // Check if the hash exists in the current URL
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={`z-50  md:mx-auto bg-black/90 md:rounded-full  py-3 md:max-w-[670px] px-3  fixed bottom-5 left-3 md:inset-x-0 ${
        isOpen ? "rounded-xl " : "rounded-full"
      }`}
    >
      <div
        className={`${
          isOpen ? "block" : "hidden"
        } items-center justify-between block  md:flex md:space-y-0 space-y-1 pt-2 md:pt-0`}
      >
        <ScrollLink
          to="hero"
          spy={true}
          smooth={true}
          duration={500}
          className="-mb-1 ml-3 md:ml-0"
          activeClass="hero"
        >
          <button>
            <TabLogo />
          </button>
        </ScrollLink>

        <NavLink name="Intro" link="intro"  />
        <NavLink
          name="services"
          link="services"
        />
        <NavLink name="works" link="works"  />
        <NavLink
          name="packages"
          link="packages"
        />
        <NavLink name="about" link="about"  />
        <NavLink
          name="contact us"
          link="contactus"
        />
      </div>

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
