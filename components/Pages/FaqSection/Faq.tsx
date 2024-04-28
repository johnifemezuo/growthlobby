import { DownIcon } from "@/components/Global/Icons/DownIcon";
import React from "react";

export const Faq = ({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) => {
  const [isActive, setIsActive] = React.useState(false);
  const handleOpen = () => setIsActive(!isActive);

  return (
    <div className="grid w-full">
      <div
        onClick={handleOpen}
        className="flex items-center justify-between cursor-pointer w-full "
      >
        <h3 className="text-zinc-700  md:text-lg font-semibold w-full">{question}</h3>

        <span className={`${isActive ? "rotate-180" : ""} rounded-full w-6 h-6 grid place-content-center bg-black/20`}>
          <DownIcon />
        </span>
      </div>

      <div
        className={`transition-all duration-300 overflow-hidden text-zinc-600 text-base py-2 ${
          isActive ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        } 4`}
      >
        <p className="text-sm md:text-base lg:text-lg font-medium">{answer}</p>
      </div>
    </div>
  );
};
