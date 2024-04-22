import { DownIcon } from "@/components/Global/Icons/DownIcon";
import { PointIcon } from "@/components/Global/Icons/PointIcon";
import React from "react";
import { Faq } from "./Faq";
import Image from "next/image";

export const FaqSection = () => {
  return (
    <div
      id="about"
      className="bg-[#FAF8F4] overflow-hidden rounded-3xl min-h-screen mt-6 p-4 md:p-8 lg:py-20 md:mt-5 relative lg:px-9"
    >
      <div className="lg:flex lg:space-x-12 justify-between mx-auto relative z-10 ">
        <div className="space-y-4 relative lg:space-y-6   max-w-[600px] mx-aut text-white">
          <p className="flex items-center space-x-2 ">
            <PointIcon />
            <span className="text-base md:text-lg text-orange-600">Faq</span>
          </p>
          <h1 className="text-2xl text-zinc-800  md:text-3xl lg:text-5xl xl:text-6xl farro-bold relative">
            Commonly asked questions
          </h1>

          <div className="pt-4 space-y-4 lg:space-y-8 xl:pt-12 ">
            <Faq
              question="Why wouldn`t just hre a full-time designer?"
              answer="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis sit magnam eum."
            />
            <Faq
              question="Is there a limit to how many requests I can have?"
              answer="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis sit magnam eum."
            />
            <Faq
              question="Why wouldn`t just hre a full-time designer?"
              answer="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis sit magnam eum."
            />
            <Faq
              question="Why wouldn`t just hre a full-time designer?"
              answer="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis sit magnam eum."
            />
          </div>
        </div>

        <div className="bg-white mt-12 shadow-xl relative overflow-hidden rounded-2xl px-5 py-12 lg:p-20 space-y-6 text-center lg:w-[500px] mx-auto">
        <Image src="/images/rec8.png" className="w-12 md:w-[80px] absolute -bottom-1 left-0 " width={300} height={300} alt="phone" />
        <Image src="/images/rec9.png" className="w-20 md:w-[80px] absolute -top-7 right-0 " width={300} height={300} alt="phone" />

          <div className="rounded-full border-4 border-zinc-200 overflow-hidden w-24 h-24 lg:w-28 lg:h-28 mx-auto grid place-content-center">
            <Image src="/images/phone.png" className="w-[80px] " width={300} height={300} alt="phone" />
          </div>
          <div className="space-y-5">
            <h1 className="text-3xl font-semibold">Book a 15-minute intro call</h1>
            <button className="bg-black text-white rounded-full py-4 px-6 w-full text-cent">
              Book a call
            </button>
          </div>
        </div>
      </div>

      <Image src="/images/rec11.png" className="w-20 lg:w-[140px] z-0 absolute -bottom-1 left-0 " width={300} height={300} alt="phone" />

      <Image src="/images/rec10.png" className="w-24 md:w-[280px] absolute -bottom-1 right-0 " width={300} height={300} alt="phone" />
    </div>
  );
};
