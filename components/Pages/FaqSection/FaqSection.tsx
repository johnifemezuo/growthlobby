import { faqsData } from "@/base/data/faqs";
import { PointIcon } from "@/components/Global/Icons/PointIcon";
import Image from "next/image";
import { BookACallCard } from "./BookACallCard";
import { Faq } from "./Faq";

export const FaqSection = () => {
  return (
    <div
      id="about"
      className="bg-[#FAF8F4] overflow-hidden rounded-3xl h-auto mt-6 py-12 px-4 md:p-8 lg:py-20 md:mt-5 relative lg:px-14 xl:px-20"
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

          <div className="pt-4 space-y-4  xl:pt-12 ">
            {faqsData.map((faq, ind: number) => (
              <Faq key={ind} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </div>

        <BookACallCard />
      </div>

      <Image
        src="/images/rec11.png"
        className="w-20 lg:w-[140px] z-0 absolute -bottom-1 left-0 "
        width={300}
        height={300}
        alt="phone"
      />

      <Image
        src="/images/rec10.png"
        className="w-24 md:w-[280px] absolute -bottom-1 right-0 "
        width={300}
        height={300}
        alt="phone"
      />
    </div>
  );
};
