import Link from "next/link";
import Button from "../Button/Button";
import { TabLogo } from "../Icons/TabLogo";
import { useRouter } from "next/router";

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
        className={`capitalize rounded-3xl py-2 px-4  transition-all duration-300 ${
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
  const {pathname} = useRouter();
  return (
    <div className="hidden z-50 md:flex space-x-2 mx-auto bg-black/80 rounded-full py-3 max-w-[670px] px-3 items-center justify-between fixed bottom-8 inset-x-0">
      <Link href="/" className="-mb-1">
        <button
        >
          <TabLogo />
        </button>
      </Link>

      <NavLink name="Intro" link="#intro" active={pathname === "#intro"} />
      <NavLink name="services" link="#services" active={pathname === "#services"}/>
      <NavLink name="works" link="#works" active={pathname === "#works"} />
      <NavLink name="packages" link="#packages" active={pathname === "#packes"}/>
      <NavLink name="about" link="#about" active={pathname === "#about"}/>
      <NavLink name="contact us" link="#contactus" active={pathname === "#intro"} />
    </div>
  );
};
