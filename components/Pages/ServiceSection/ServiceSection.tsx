import { useAnimateEase } from "@/base/utils/useAnimateEase";
import { PointIcon } from "@/components/Global/Icons/PointIcon";
import { motion } from "framer-motion";
import Image from "next/image";
import { ServiceCard } from "./ServiceCard";
export const ServiceSection = () => {
  const { ref, easeInVariant, mainControls } = useAnimateEase();

  return (
    <div
      ref={ref}
      id="services"
      className="bg-[#F3F3EC] pb-12 overflow-hidden rounded-3xl min-h-screen mt-6 p-4 md:p-8 lg:pb-36 md:mt-5 relative"
    >
      <motion.div
        variants={easeInVariant}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="space-y-4  lg:space-y-6 py-12 md:py-20  md:px-12 text-center max-w-5xl relative z-10 mx-auto lg:px-44"
      >
        <p className="flex items-center space-x-2 justify-center">
          <PointIcon />
          <span className="text-base md:text-lg text-orange-600">
            Our services
          </span>
        </p>
        <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl farro-bold relative">
          We provide both design and website development service to our client
        </h1>

        <p className="text-base md:text-lg text-zinc-800 font-medium font-manrope">
          Your go-to solution for your website and mobile apps design needs, like
          many founders, startups, and agencies do.
        </p>
      </motion.div>

      <motion.div
        variants={easeInVariant}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.7, delay: 0.6 }}
        className="grid  gap-4 md:gap-6  md:grid-cols-2 py-30   mx-auto  lg:max-w-[1000px]"
      >
        <ServiceCard
          tag="Prototype"
          title="Website Design"
          description="We design sleek and user friendly websites for any need using figma."
          image="/images/serv1.png"
        />
        <ServiceCard
          tag="Prototype"
          title="Mobile app design."
          description="We design, refine, and make your app shine above the competition."
          image="/images/serv2.png"
          className=""
        />
        <ServiceCard
          tag="Prototype"
          title="Web apps."
          description="We design sleek and responsive web apps for any business challenge."
          image="/images/img12.png"
        />
        <ServiceCard
          tag=" Development"
          title="Website Development"
          description="We build all kind of  sleek  and responsive website for any business challenge."
          image="/images/serv3.png"
        />

        {/* <ServiceCard
          tag="Development"
          title="Mobile development"
          description="We also build the  front end  of the mobile app designs."
          image="/images/serv4.png"
        /> */}
      </motion.div>

      <Image
        src="/images/rec3.png"
        alt=""
        width={200}
        height={200}
        className="absolute -left-10 sm:-left-16 lg-left-16 -top-6 sm:w-[150px] lg:w-[200px] w-[100px] z-0 "
      />

      <Image
        src="/images/rec4.png"
        alt=""
        width={200}
        height={200}
        className="absolute -right-10 sm:-right-1  top-0 sm:w-[150px] lg:w-[250px] w-[120px] "
      />
    </div>
  );
};
