import { PointIcon } from "@/components/Global/Icons/PointIcon";
import Image from "next/image";
import React from "react";
import { WorkCard } from "./WorkCard";
import Button from "@/components/Global/Button/Button";
import Link from "next/link";

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
        <WorkCard image="/images/img1.png" link="https://www.google.com" />
        <WorkCard image="/images/img3.png" link="https://www.google.com" />
        <WorkCard image="/images/img4.png" link="https://www.google.com" />
        <WorkCard image="/images/img5.png" link="https://www.google.com" />
        <WorkCard image="/images/img4.png" link="https://www.google.com" />
        <WorkCard image="/images/img2.png" link="https://www.google.com" />
      </div>

<div className="w-full pt-8 xl:pt-12 justify-center grid">
  <Link href={"/works"}>
      <Button className="mt-6 inline-block " name="View all works" />
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
