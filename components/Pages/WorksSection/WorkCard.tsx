import Image from "next/image";
import Link from "next/link";

export const WorkCard = ({ link, image }: { link: string, image: string }) => {
  return (
    <Link href={link}>
      <div className="rounded-2xl overflow-hidden group h-[250px] md:h-[350px] bg-red-50">
        <Image
          src={image}
          alt=""
          width={700}
          height={700}
          className="w-full h-full object-cover group-hover:scale-125 transition-all duration-300 ease-in-out"
        />
      </div>
    </Link>
  );
};
