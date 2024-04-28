import { PointIcon } from "@/components/Global/Icons/PointIcon";
import { TickIcon } from "@/components/Global/Icons/TickIcon";
import Image from "next/image";
import { DealList } from "./DealList";
import { DealLists } from "./DealLists";
import { DealContact } from "./DealContact";
import { DealPackageCard } from "./DealPackageCard";

export const DealsSection = () => {
  return (
    <div
      id="packages"
      className="bg-[#082F34] overflow-hidden rounded-3xl min-h-screen mt-6 p-5 md:p-8 lg:pb-36 md:mt-5 relative lg:px-20"
    >
      <div className="space-y-4 relative lg:space-y-6 py-12 md:py-20  md:px-12 text-center max-w-5xl mx-auto lg:px-44 text-white">
        <p className="flex items-center space-x-2 justify-center">
          <PointIcon />
          <span className="text-base md:text-lg text-orange-600">
            Our Deals
          </span>
        </p>
        <h1 className="text-2xl  md:text-3xl lg:text-4xl xl:text-5xl farro-bold relative">
          A breakdown of what we do
        </h1>

        <p className="text-base md:text-lg text-white font-medium font-manrope">
          Whether it&apos;s a vibrant website or a minimal mobile app you seek.
          We deliver exceptional quality for all.
        </p>
      </div>

      <div className="grid xl:grid-cols-2 gap-4 md:gap-6 w-full xl:justify-center  mt-6 border-white/20 py-30 xl:space-x-20 mx-auto space-y-2  md:space-y-0 border-t ">
        <div className="relative">
          <div className="space-y-4 relative lg:space-y-6 py-12 md:py-14     lg:max-w-xl text-white">
            <h1 className="text-2xl lg:max-w-xl md:text-3xl lg:text-4xl capitalize xl:text-5xl farro-bold relative">
              special service subscription
            </h1>

            <p className="text-base md:text-lg text-white font-medium font-manrope">
              If you are interested in a more long term contract. you can feel
              free to choose our plan or reach out to us.
            </p>
          </div>

          <DealPackageCard />

          <Image
            src="/images/rec6.png"
            alt=""
            width={200}
            height={200}
            className="absolute left-56   top-56  sm:w-[150px] lg:w-[300px] w-[100px] z-0 "
          />
        </div>

        <DealLists />
      </div>

      <DealContact />

      <Image
        src="/images/rec13.png"
        alt=""
        width={200}
        height={200}
        className="absolute -left-4   top-0 sm:w-[150px] lg:w-[200px] w-[100px] z-0 "
      />
      <Image
        src="/images/rec7.png"
        alt=""
        width={200}
        height={200}
        className="absolute -right-10 sm:-right-1  top-0 sm:w-[150px] lg:w-[160px] w-[100px] "
      />
    </div>
  );
};
