import { ReactNode } from "react";

export const OfferCard = ({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) => {
  return (
    <div className=" space-y-3 rounded-xl flex flex-col items-center  text-center  ">
      {children}

      <h3 className="text-xl md:text-xl font-medium">{title}</h3>
    </div>
  );
};
