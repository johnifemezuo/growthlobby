import { useAnimateEase } from "@/base/utils/useAnimateEase";
import { OfferSvgFour } from "@/components/Global/Icons/OfferSvgFour";
import { OfferSvgOne } from "@/components/Global/Icons/OfferSvgOne";
import { OfferSvgTwo } from "@/components/Global/Icons/OfferSvgTwo";
import { PointIcon } from "@/components/Global/Icons/PointIcon";
import { motion } from "framer-motion";
import { OfferCard } from "./OfferCard";
import Image from "next/image";

export const HowWeDoIt = () => {
  const { ref, easeInVariant, mainControls } = useAnimateEase();

  return (
    <div
      ref={ref}
      id="intro"
      className="bg-[#f2f6f8] overflow-hidden rounded-3xl mt-6 p-4 md:p-8 lg:pb-36 md:mt-5 relative"
    >
      <motion.div
        variants={easeInVariant}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.9, delay: 0.3 }}
        className="space-y-4 relative lg:space-y-6 py-12 md:py-20  md:px-12 text-center max-w-5xl mx-auto lg:px-44"
      >
        <p className="flex items-center space-x-2 justify-center">
          <PointIcon />
          <span className="text-base md:text-lg text-orange-600">
            A client side solution
          </span>
        </p>
        <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl farro-bold relative">
          A website design and development solution to suit your need.
        </h1>
        <div>
          <p className="text-base md:text-lg text-zinc-800 font-medium font-manrope">
            We provide solutions to user facing interface.
          </p>
          <p className="text-base md:text-lg text-zinc-800 font-medium font-manrope">
            Impress that customer with a great client side experience.
          </p>
        </div>
      </motion.div>

      <motion.div
        variants={easeInVariant}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 1, delay: 0.6 }}
        className="grid md:grid-cols-2 gap-4 md:gap-6 lg:gap-9 lg:grid-cols-3 py-30 space-y-9 md:space-y-0 pb-14 md:pb-0 max-w-[1200px] mx-auto "
      >
        <OfferCard title="Subscribe to a plan & request as many designs as you’d like.">
          <OfferSvgOne />
        </OfferCard>

        <OfferCard title="Receive your design within two business days on average.">
          <OfferSvgTwo />
        </OfferCard>

        <OfferCard title="When we build, we make sure your website is search engine optimized to help customers find you where they’re searching.">
          <OfferSvgFour />
        </OfferCard>
      </motion.div>

      <Image
        src="/images/rec7.png"
        alt=""
        width={200}
        height={200}
        className="absolute -right-10 sm:-right-16 lg-right-16 -top-6 sm:w-[150px] lg:w-[200px] w-[100px] z-0 "
      />

      <Image
        src="/images/rec13.png"
        alt=""
        width={200}
        height={200}
        className="absolute -left-10   top-0 sm:w-[150px] lg:w-[250px] w-[120px] "
      /> 
    </div>
  );
};
