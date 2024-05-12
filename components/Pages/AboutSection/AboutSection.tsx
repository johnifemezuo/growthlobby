import { useAnimateEase } from "@/base/utils/useAnimateEase";
import { BehanceIcon } from "@/components/Global/Icons/BehanceIcon";
import CurvyIcon from "@/components/Global/Icons/CurvyIcon";
import { DribbbleIcon } from "@/components/Global/Icons/DribbbleIcon";
import { InstagramIcon } from "@/components/Global/Icons/InstagramIcon";
import { LinkedinIcon } from "@/components/Global/Icons/LinkedinIcon";
import { PointIcon } from "@/components/Global/Icons/PointIcon";
import { motion } from "framer-motion";
import Link from "next/link";
import { AboutBio } from "./AboutBio";

export const AboutSection = () => {
  const { ref, easeInVariant, mainControls } = useAnimateEase();

  return (
    <div
      ref={ref}
      id="about"
      className="bg-[#151212] overflow-hidden rounded-3xl min-h-screen py-12 mt-6 px-5 md:p-8 lg:py-20 md:mt-5 relative lg:px-20"
    >
      <div className="xl:flex md:space-y-12 lg:py-0 gap-5 md:gap-20">
        <motion.div
          variants={easeInVariant}
          initial="hidden"
          animate={mainControls}
          transition={{ duration: 1, delay: 0.2 }}
          className="xl:max-w-[400px] "
        >
          <div className="space-y-4 relative lg:space-y-6    text-white">
            <p className="flex items-center space-x-2 ">
              <PointIcon />
              <span className="text-base md:text-lg text-orange-600">
                Meet John
              </span>
            </p>
            <h1 className="text-2xl  md:text-3xl lg:text-4xl xl:text-4xl farro-bold relative">
              I&apos;m the guy behind Growthlobby - I am more than just a
              pixel-perfect designer.
            </h1>

            <div className="pt-4 space-y-3 xl:pt-20">
              <p className="flex items-center space-x-3">
                <span>
                  <CurvyIcon />
                </span>
                <span className="text-2xl md:text-2xl text-white f font-manrope lg:text-3xl">
                  Designer
                </span>
              </p>

              <p className="flex items-center space-x-3">
                <span>
                  <CurvyIcon />
                </span>
                <span className="text-2xl md:text-2xl text-white f font-manrope lg:text-3xl">
                  Developer
                </span>
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-4 xl:grid-cols-2 grid-cols-2 mt-12 xl:mt-44 gap-4">
            <Link
              href="https://www.linkedin.com/in/john-femezuo"
              className="bg-white/10 space-y-4 p-4 rounded-2xl text-white  hover:bg-white/20 duration-300 transition-all"
              target="_blank"
            >
              <LinkedinIcon />
              <p className="md:text-lg lg:text-2xl">Linkedin</p>
            </Link>
            <Link
              href="https://www.behance.net/johnifem"
              className="bg-white/10 space-y-4 p-4 rounded-2xl text-white  hover:bg-white/20 duration-300 transition-all"
              target="_blank"
            >
              <BehanceIcon className="w-8 h-8" />
              <p className="md:text-lg lg:text-2xl">Behance</p>
            </Link>
            <Link
              href="https://www.instagram.com/john_ifemezuo/"
              className="bg-white/10 space-y-4 p-4 rounded-2xl text-white  hover:bg-white/20 duration-300 transition-all"
              target="_blank"
            >
              <InstagramIcon />
              <p className="md:text-lg lg:text-2xl">Instagram</p>
            </Link>
            <Link
              href="https://dribbble.com/ifemezuo"
              className="bg-white/10 space-y-4 p-4 rounded-2xl text-white  hover:bg-white/20 duration-300 transition-all"
              target="_blank"
            >
              <DribbbleIcon className="w-8 h-8" />
              <p className="md:text-lg lg:text-2xl">Dribbble</p>
            </Link>
          </div>
        </motion.div>

        <motion.div
          variants={easeInVariant}
          initial="hidden"
          animate={mainControls}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <AboutBio />
        </motion.div>
      </div>
    </div>
  );
};
