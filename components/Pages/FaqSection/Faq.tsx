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
    <div className="grid">
      <div
        onClick={handleOpen}
        className="flex items-center justify-between cursor-pointer"
      >
        <h3 className="text-zinc-700  md:text-2xl font-medium">
          {question}
        </h3>

        <span className={`${isActive ? "rotate-180" : ""}`}>
          <DownIcon />
        </span>
      </div>
      <p
        className={`${
          isActive ? "block" : "hidden"
        } text-zinc-600 text-lg py-4`}
      >
        {answer}
      </p>
    </div>
  );
};
