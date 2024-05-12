import { useAnimateEase } from "@/base/utils/useAnimateEase";
import { EmailIcon } from "@/components/Global/Icons/EmailIcon";
import { PointIcon } from "@/components/Global/Icons/PointIcon";
import { WhatsappChat } from "@/components/Global/Icons/WhatsappChat";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export const ContactUs = () => {
  const { ref, easeInVariant, mainControls } = useAnimateEase();
  const buttonVariants = {
    animate: {
      x: ["-95%", "100%"],
      transition: {
        x: {
          duration: 50,
          ease: "linear",
          repeat: Infinity,
          repeatType: "loop",
        },
      },
    },
  };

  return (
    <div
      ref={ref}
      id="contactus"
      className="bg-[#EDF6F8] overflow-hidden rounded-3xl h-auto lg:h-[90vh]  p-4 md:p-0 lg:py-20 md:mt-12 relative lg:px-9"
    >
      <motion.div
        variants={easeInVariant}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 1, delay: 0.2 }}
        className="space-y-4 relative lg:space-y-6 py-12 md:py-20  md:px-12 text-center max-w-5xl mx-auto lg:px-44 text-white"
      >
        <p className="flex items-center space-x-2 justify-center">
          <PointIcon />
          <span className="text-base md:text-lg text-orange-600">
            Contact us
          </span>
        </p>
        <h1 className="text-3xl  md:text-4xl lg:text-4xl xl:text-5xl farro-bold text-zinc-800 relative">
          Lets talk about that great idea or project
        </h1>
      </motion.div>

      <motion.div
        variants={buttonVariants}
        initial="initial"
        animate="animate"
        className="flex w-[2200px]  mx-auto justify-center lg:justify-between items-center space-x-2 md:space-x-3  gap-4"
      >
        <button className=" bg-[#C6EC59] text-sm md:text-base text-black rounded-full py-3 px-5 font-medium ">
          Landing page
        </button>
        <button className="bg-[#4ED374] text-xs md:text-base text-black rounded-full py-3 px-5 font-medium   text-cent">
          E-commerce
        </button>
        <button className="bg-[#A359EC] text-xs md:text-base text-white rounded-full py-3 px-5 font-medium   text-cent">
          Corporate site
        </button>{" "}
        <button className="inline text-xs md:text-base bg-[#C6EC59] text-black rounded-full py-3 px-5 font-medium   text-cent">
          Government Site
        </button>
        <button className="inline text-xs md:text-base bg-[#EC59B1] text-white rounded-full py-3 px-5 font-medium text-cent">
          Portfolio site
        </button>
        <button className="inline text-xs md:text-base bg-[#ECA959] text-black rounded-full py-3 px-5 font-medium  text-cent">
          Entertainment site
        </button>
        <button className="inline text-xs md:text-base bg-[#59B7EC] text-black rounded-full py-3 px-5 font-medium  text-cent">
          Listing sites
        </button>
        <button className="inline bg-[#5971EC] text-xs md:text-base text-white rounded-full py-3 px-5 font-medium  text-cent">
          Review site
        </button>
        <button className="inline text-xs md:text-base bg-[#EC59B1] text-white rounded-full py-3 px-5 font-medium text-cent">
          Personal site
        </button>
        <button className="inline bg-[#5971EC] text-xs md:text-base text-white rounded-full py-3 px-5 font-medium  text-cent">
          Business site
        </button>
        <button className="inline bg-[#5971EC] text-xs md:text-base text-white rounded-full py-3 px-5 font-medium  text-cent">
          Social media app
        </button>
        <button className="inline text-xs md:text-base bg-[#59B7EC] text-black rounded-full py-3 px-5 font-medium  text-cent">
          Dashboard
        </button>
      </motion.div>

      <motion.div
        variants={easeInVariant}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 1, delay: 0.5 }}
        className="mt-10 relative  z-20 pb-8 md:pb-20 lg:mt-28 max-w-2xl mx-auto grid md:grid-cols-2 gap-3 md:gap-5"
      >
        <Link
          href="mailto:ifemezuojohn@gmail.com?subject=Website%20Inquiry&body=Hello%2C%20I%20found%20your%20contact%20on%20your%20website"
          target="_blank"
        >
          <button className="justify-center lg:space-x-8 bg-black text-lg  text-white rounded-full py-3 lg:py-4 px-6 w-full inline-flex items-center space-x-3 text-cent">
            <span>Send us Email</span>
            <EmailIcon />
          </button>
        </Link>

        <Link
          href="https://wa.me/+2347060696371?text=Hello%2C%20I%20found%20your%20contact%20on%20your%20website"
          target="_blank"
        >
          <button className="justify-center lg:space-x-8 bg-white border border-green-500 text-lg lg:text-xl text-green-600 rounded-full py-3 lg:py-4 px-6 w-full inline-flex items-center space-x-3 text-cent">
            <span>Chat Us Whatsapp</span>
            <WhatsappChat />
          </button>
        </Link>
      </motion.div>

      <Image
        src="/images/rec13.png"
        className="w-20 lg:w-[160px] z-0 absolute -bottom-1 left-0 "
        width={500}
        height={500}
        alt="phone"
      />

      <Image
        src="/images/rec14.png"
        className="w-24 lg:w-[280px] absolute -bottom-1 right-0 "
        width={500}
        height={500}
        alt="phone"
      />
    </div>
  );
};
