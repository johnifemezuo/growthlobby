import Button from "@/components/Global/Button/Button";
import { PointIcon } from "@/components/Global/Icons/PointIcon";
import Image from "next/image";
import Link from "next/link";
import { WorkCard } from "./WorkCard";

export const WorksSection = () => {
  return (
    <div
      id="works"
      className="bg-[#F2F5FC] overflow-hidden rounded-3xl min-h-screen mt-6 p-4 md:p-8 lg:pb-36 md:mt-5 relative"
    >
      <div className="space-y-4 relative lg:space-y-6 py-12 md:py-20  md:px-12 text-center max-w-5xl mx-auto lg:px-44">
        <p className="flex items-center space-x-2 justify-center">
          <PointIcon />
          <span className="text-base md:text-lg text-orange-600">
            Our Works
          </span>
        </p>
        <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl farro-bold relative">
          Selected work
        </h1>

        <p className="text-base md:text-lg text-zinc-800 font-medium font-manrope">
          Whether it&apos;s a vibrant website or a minimal mobile app you seek.
          We deliver exceptional quality for all.
        </p>
      </div>

      <div className="grid gap-4 md:gap-6 md:grid-cols-2  xl:grid-cols-3 py-30  xl:px-28">
        <WorkCard
          title="Rendlr.com"
          tags={["UI/UX Design", "Prototype"]}
          image="/images/rendlr.png"
          link="https://www.rendlr.com"
        />
        <WorkCard
          title="Ventlio"
          tags={["UI/UX Design", "Development"]}
          image="/images/ventlio.jpg"
          link="https://www.ventlio.vercel.app"
        />
        <WorkCard
          title="Portfolio"
          tags={["UI/UX Design", "Prototype", "Development"]}
          image="/images/portfolio.png"
          link="https://www.johnifemezuo.vercel.app"
        />
        <WorkCard
          title="Dating App"
          tags={["UI/UX Design", "App Design", "Prototype"]}
          image="/images/moonlights.png"
          link="https://johnifemezuo.vercel.app/work/moonlight"
        />
        <WorkCard
          title="Moonlight Dating app"
          tags={["UI/UX Design", "App  design", "Prototype"]}
          image="/images/rendlrs.png"
          link="https://www.behance.net/gallery/183368231/Rendlr-Dating-App"
        />

        <Link href="" target="_blank">
          <div className="rounded-2xl relative overflow-hidden group h-[250px] md:h-[350px] bg-red-50">
            <Image
              src={"/images/design project.png"}
              alt=""
              width={700}
              height={700}
              className="w-full h-full  transition-all "
            />

            <div className="z-30 absolute bottom-0  space-y-3 duration-500 transition-all grid place-content-center justify-center items-center w-full h-full p-4 ">
              <h1 className="text-white text-2xl text-center">
                All Design Projects
              </h1>
              <button className="bg-white hover:bg-white/80  transition-all duration-300  text-black rounded-full font-medium  py-4 px-6 hover:shadow-xl">
                See All
              </button>
            </div>
          </div>
        </Link>
      </div>

      <Image
        src="/images/rec6.png"
        alt=""
        width={200}
        height={200}
        className="absolute -left-10 sm:-left-16 lg-left-12 -top-6 sm:w-[150px] lg:w-[270px] w-[100px] z-0 "
      />

      <Image
        src="/images/rec5.png"
        alt=""
        width={200}
        height={200}
        className="absolute -right-10 sm:-right-1  top-0 sm:w-[150px] lg:w-[300px] w-[120px] "
      />
    </div>
  );
};
