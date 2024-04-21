import { PointIcon } from "@/components/Global/Icons/PointIcon";
import Image from "next/image";
import React from "react";

export const IntroSection = () => {
  return (
    <div id="intro" className="bg-[#F8F3F2] overflow-hidden rounded-3xl min-h-screen mt-6 p-4 md:p-8 lg:pb-36 md:mt-5 relative">
      <div className="space-y-4 relative lg:space-y-6 py-12 md:py-20  md:px-12 text-center max-w-5xl mx-auto lg:px-44">
        <p className="flex items-center space-x-2 justify-center">
          <PointIcon />
          <span className="text-base md:text-lg text-orange-600">
            Who is it for
          </span>
        </p>
        <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl farro-bold relative">
          Basically Everyone who needs to grow their business, team or agency
        </h1>
        <p className="text-base md:text-lg text-orange-600 font-medium font-manrope">
          It&apos;s simple. You request, we design or build, Together!
        </p>
        <p className="text-base md:text-lg text-zinc-800 font-medium font-manrope">
          We begin each project by attentively li stening to grasp your
          requirements. After that, we divide your project into specific,
          manageable tasks. This method guarantees that every task gets the
          focus, time, and care it needs.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-4 md:gap-6 lg:gap-9 lg:grid-cols-3 py-30 max-w-[1200px] mx-auto ">
        <div className="border space-y-3 border-zinc-400 rounded-xl p-4 md:p-6  text-center  ">
          <Image
            src="/images/individual.png"
            width={150}
            height={150}
            className="justify-center w-[130px] mx-auto"
            alt=""
          />

          <h3 className="text-xl md:text-2xl font-semibold">
            Individual/Freelance
          </h3>
          <p className="text-zinc-600">
            Do you want to grow you business, need a website, an app design,
            flayer grow online?. Would like to collaborate on a project? We got
            your back.
          </p>
        </div>

        <div className="border space-y-3 border-zinc-400 rounded-xl p-4 md:p-6  text-center  ">
          <Image
            src="/images/agency.png"
            width={150}
            height={150}
            className="justify-center w-[130px] mx-auto"
            alt=""
          />

          <h3 className="text-xl md:text-2xl font-semibold">Agency</h3>
          <p className="text-zinc-600">
            Do you need a designer or front end developer for a contract term to
            help you team reach the company goal?. You found us..
          </p>
        </div>

        <div className="border space-y-3 border-zinc-400 rounded-xl p-4 md:p-6  text-center  ">
          <Image
            src="/images/company.png"
            width={150}
            height={150}
            className="justify-center w-[130px] mx-auto"
            alt=""
          />

          <h3 className="text-xl md:text-2xl font-semibold">Company</h3>
          <p className="text-zinc-600">
            Do you want to grow you business, need a website, an app design,
            flayer grow online. We got your back.
          </p>
        </div>
      </div>

      <Image
        src="/images/rec1.png"
        alt=""
        width={200}
        height={200}
        className="absolute -left-10 sm:-left-16 lg-left-16 -top-6 sm:w-[150px] lg:w-[200px] w-[100px] z-0 "
      />

      <Image
        src="/images/rec2.png"
        alt=""
        width={200}
        height={200}
        className="absolute -right-10 sm:-right-1  top-0 sm:w-[150px] lg:w-[250px] w-[120px] "
      />
    </div>
  );
};
