import Image from "next/image";
import Link from "next/link";

export const WorkCard = ({ link, image,title, tags }: { link: string; image: string;title: string; tags: string[]; }) => {
  return (
    <Link href={link} target="_blank">
      <div className="rounded-2xl relative overflow-hidden group h-[250px] md:h-[350px] bg-red-50">
        <Image
          src={image}
          alt=""
          width={700}
          height={700}
          className="w-full h-full object-cover group-hover:scale-125 transition-all duration-500 ease-in-out"
        />

        <div className="z-30 absolute bottom-0 group-hover:-translate-y-0 space-y-3 duration-500 transition-all translate-y-24 p-4 ">
          <div className="flex items-center space-x-2">
            {tags.map((tag, i) => (
              <span key={i} className="px-2  text-white  text-xs font-medium py-1 rounded-full border bg-[#ffffff2b]">
              {tag}
            </span>
            ))}
          </div>
          <h2 className="text-white  md:text-2xl relative z-30 farro-bold">
            {title}
          </h2>

        </div>
        <div className=" absolute inset-0 group-hover:bg-black/40 bg-transparent transition-all duration-500 z-10"></div>
      </div>
    </Link>
  );
};
