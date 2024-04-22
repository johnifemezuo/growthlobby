import { EmailIcon } from "@/components/Global/Icons/EmailIcon";
import { PointIcon } from "@/components/Global/Icons/PointIcon";
import { WhatsappChat } from "@/components/Global/Icons/WhatsappChat";
import { WhatsappIcon } from "@/components/Global/Icons/WhatsappIcon";
import Image from "next/image";
import React from "react";

export const ContactUs = () => {
  return (
    <div
      id="contactus"
      className="bg-[#EDF6F8] overflow-hidden rounded-3xl min-h-screen mt-6 p-4 md:p-0 lg:py-20 md:mt-5 relative lg:px-9"
    >
      <div className="space-y-4 relative lg:space-y-6 py-12 md:py-20  md:px-12 text-center max-w-5xl mx-auto lg:px-44 text-white">
        <p className="flex items-center space-x-2 justify-center">
          <PointIcon />
          <span className="text-base md:text-lg text-orange-600">
            Contact us
          </span>
        </p>
        <h1 className="text-3xl  md:text-4xl lg:text-4xl xl:text-5xl farro-bold text-zinc-800 relative">
          Lets talk about that great idea or project
        </h1>
      </div>
      <div className="flex flex-wrap lg:flex-nowrap lg:w-[1600px]  mx-auto justify-center lg:justify-between items-center space-x-2 md:space-x-3  gap-4">
        <button className="f bg-[#C6EC59] text-sm md:text-base text-black rounded-full py-3 px-5 font-medium ">
          Landing design
        </button>
        <button className="bg-[#4ED374] text-xs md:text-base text-white rounded-full py-3 px-5 font-medium   text-cent">
          Framer
        </button>
        <button className="bg-[#A359EC] text-xs md:text-base text-white rounded-full py-3 px-5 font-medium   text-cent">
          Book a call
        </button>{" "}
        <button className="inline text-xs md:text-base bg-[#C6EC59] text-black rounded-full py-3 px-5 font-medium   text-cent">
          Mobile Development
        </button>
        <button className="inline text-xs md:text-base bg-[#EC59B1] text-black rounded-full py-3 px-5 font-medium text-cent">
          Landing design
        </button>
        <button className="inline text-xs md:text-base bg-[#ECA959] text-black rounded-full py-3 px-5 font-medium  text-cent">
          Animations
        </button>
        <button className="inline text-xs md:text-base bg-[#59B7EC] text-black rounded-full py-3 px-5 font-medium  text-cent">
          website design
        </button>
        <button className="inline bg-[#5971EC] text-xs md:text-base text-white rounded-full py-3 px-5 font-medium  text-cent">
          wordpress
        </button>
        <button className="inline bg-[#5971EC] text-xs md:text-base text-white rounded-full py-3 px-5 font-medium  text-cent">
          wordpress
        </button>
      </div>

      <div className="mt-10 lg:mt-28 max-w-2xl mx-auto grid md:grid-cols-2 gap-3 md:gap-5">
        <button className="justify-center lg:space-x-8 bg-black text-lg  text-white rounded-full py-3 lg:py-4 px-6 w-full inline-flex items-center space-x-3 text-cent">
          <span>Send us Email</span>
          <EmailIcon />
        </button>

        <button className="justify-center lg:space-x-8 bg-white border border-green-500 text-lg lg:text-xl text-green-600 rounded-full py-3 lg:py-4 px-6 w-full inline-flex items-center space-x-3 text-cent">
          <span>Chat Us Whatsapp</span>
          <WhatsappChat />
        </button>
      </div>

      
      <Image src="/images/rec13.png" className="w-20 lg:w-[160px] z-0 absolute -bottom-1 left-0 " width={500} height={500} alt="phone" />

      <Image src="/images/rec14.png" className="w-24 md:w-[280px] absolute -bottom-1 right-0 " width={500} height={500} alt="phone" />
    </div>
  );
};
