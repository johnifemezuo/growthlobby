import Image from "next/image"

export const HeroCard = ({image, label, className}:{image: string, label: string; className?: string}) => {
    return (
        <div className={`w-full relative h-[250px] md:h-[360px] rounded-xl overflow-hidden ${className}`}>
          <Image
            alt="growthlobby"
            src={image}
            className="w-full h-full object-cover "
            width={600}
            height={600}
          />
          <div className="bg-black/30 absolute inset-0" />
          <span className="inline rounded-full bg-white text-xs  lg:text-sm  font-medium py-1.5 px-3 absolute top-4 right-5">
            {label}
          </span>
        </div>
    )
}