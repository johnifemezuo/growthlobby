import Image from "next/image";

export const ServiceCard = ({title, tag, description, image, className}:{ title: string, tag: string, description: string, image: string; className?: string}) => (
  <div className={`space-y-3 shadow-xl md:min-w-[400px] rounded-[40px] bg-white p-4 md:p-6 overflow-hidden relative ${className}`}>
    <Image
      src={image}
      width={350}
      height={350}
      className="w-[300px] -mt-12 mx-auto"
      alt=""
    />

    <div className="pt-4 md:space-y-3 space-y-2 ">
      <span className="px-2 text-xs md:text-sm font-medium py-1 rounded-full border bg-[#EDF4EC]">
        {tag}
      </span>

      <h3 className="text-xl md:text-2xl font-semibold">{title}</h3>
      <p className="text-zinc-600">
        {description}
      </p>
    </div>
  </div>
);
