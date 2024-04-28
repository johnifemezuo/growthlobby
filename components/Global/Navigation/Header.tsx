import Link from "next/link";
import Button from "../Button/Button";
import { Logo } from "../Icons/Logo";

export const Header = () => {
  return (
    <div id="hero"  className="flex items-center justify-between">
      <Logo className="w-[180px] md:w-[230px]" />

      <Link href="https://cal.com/john-ifemezuo/15min" target="_blank">
        <Button name="Book a call" />
      </Link>
    </div>
  );
};
