import { Logo } from "../Icons/Logo";

export const Header = () => {
  return (
    <div className="flex items-center justify-between">
      <Logo className="w-[200px] md:w-[230px]" />

      <button className="bg-black text-white rounded-3xl py-3 px-6">
        Book a call
      </button>
    </div>
  );
};
