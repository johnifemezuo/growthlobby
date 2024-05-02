import Button from "@/components/Global/Button/Button";
import Image from "next/image";
import Link from "next/link";
import { HeroCard } from "./HeroCard";

export const HeroSection = () => {

  return (
    <div className="bg-[#F2F5F1] overflow-hidden rounded-3xl min-h-screen mt-6 md:mt-5 relative">
      <div className="text-center px-4 md:px-20 lg:px-44 py-20 md:py-12 lg:py-20 relative space-y-5">
        <div className="bg-white text-sm md:text-base space-x-2  md:space-x-4 rounded-full border py-2 px-4 inline-flex items-center ">
          <span>🤓 We</span>
          <svg
            width="14"
            height="9"
            viewBox="0 0 14 9"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.5 0.5L13.5 4.5M13.5 4.5L9.5 8.5M13.5 4.5H0.5"
              stroke="#898989"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>

          <span>Design</span>
          <svg
            width="14"
            height="9"
            viewBox="0 0 14 9"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.5 0.5L13.5 4.5M13.5 4.5L9.5 8.5M13.5 4.5H0.5"
              stroke="#898989"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>

          <span>Develop 🚀</span>
        </div>
        <h1 className="text-4xl md:text-5xl lg:text-5xl xl:text-8xl font-bold farro-bold">
          Transform your online presence with endless creativity
        </h1>
        <p className="text-base  md:text-lg lg:text-xl text-zinc-700 font-manrope">
          Skip the ugly hiring process and unpredictable costs. Get on demand
          high-quality design. Unlimited requests for monthly fee. It&apos;s as
          simple as that!
        </p>

        <Link href="/#packages" className="inline-block ">
          <Button name="What we offer" />
        </Link>

        <div className="flex items-center space-x-2 md:space-x-4 justify-center">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
          </span>
          <p className=" text-zinc-700 text-sm md:text-base">
            Available for new projects now
          </p>
        </div>

        <Image
          src="/images/rocket.png"
          alt=""
          width={200}
          height={200}
          className="absolute -left-10 sm:-left-16 lg-left-16 top-0 sm:w-[200px] w-[120px] lg:w-[250px] "
        />
        <Image
          src="/images/location.png"
          alt=""
          width={200}
          height={200}
          className="absolute -right-3 w-[80px] sm:-right-2 lg:-right-10 top-0 sm:w-[140px] lg:w-[200px]"
        />
        <Image
          src="/images/brush.png"
          alt=""
          width={200}
          height={200}
          className="absolute -left-10 lg:-left-16 bottom-0 sm:w-[150px] lg:w-[220px] w-[120px]"
        />
        <Image
          src="/images/bulb.png"
          alt=""
          width={200}
          height={200}
          className="absolute -right-10 md:-right-14 sm:-right-16 bottom-0 sm:w-[150px] lg:w-[220px] w-[120px]"
        />
      </div>

      <div className="overflow-x-auto md:overflow-x-hidden">
        <div className="flex items-center space-x-4 md:space-x-3 p-3 md:p-8 w-[1200px] lg:w-[1600px] ">
          <HeroCard
            image="/images/pd.png"
            label="App design"
            className="w-[380px]"
          />
          <HeroCard
            image="/images/dev.jpg"
            label="Development"
            className="w-[260px]"
          />
          <HeroCard
            image="/images/img3.png"
            label="Mockups"
            className="w-[380px]"
          />
          <HeroCard
            image="/images/framer.jpg"
            label="Framer"
            className="w-[380px]"
          />
          <HeroCard
            image="/images/img5.png"
            label="App Design"
            className="w-[380px]"
          />
        </div>
      </div>
    </div>
  );
};
