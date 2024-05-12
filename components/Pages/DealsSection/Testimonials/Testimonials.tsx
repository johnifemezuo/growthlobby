import { ArrowIcon } from "@/components/Global/Icons/ArrowIcon";
import { useEffect, useRef, useState } from "react";
import { Testimonial } from "./Testimonial";
import { testimonials } from "@/base/data/testimonialData";

export const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef<any>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const handlePrevClick = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
    );
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };



  useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.scrollLeft =
        carouselRef.current.clientWidth * currentIndex;
    }
  }, [currentIndex]);

  return (
    <div className="flex flex-col w-full items-center mt-20">
      <h1 className="text-xl  xl:text-3xl farro-bold relative text-white ">
        What our clients have to say
      </h1>

      <div ref={carouselRef} className="flex lg:overflow-x-hidden mx-auto  overflow-x-scroll  w-full snap-x md:max-w-[700px]">
        {testimonials.map((testimony, index) => (
          <div
            key={index}
            className="flex-none snap-start space-x-4 lg:space-x-32 md:px-6 w-full"
            style={{ scrollSnapAlign: "start" }}
          >
            <Testimonial
              title={testimony.title}
              message={testimony.message}
              name={testimony.name}
              profilePics={testimony.profilePics}
            />``
          </div>
        ))}
      </div>

      <div className="flex items-center space-x-4 pt-4">
        <button
          onClick={handlePrevClick}
          className="rotate-180 rounded-full w-12 h-12 border border-white grid place-content-center justify-center"
        >
          <ArrowIcon className="text-white w-7 h-7" />
        </button>

        <div className="text-white px-4">
            <span >{currentIndex + 1}</span> / <span className="text-white/50">{testimonials.length}</span>
        </div>

        <button
          onClick={handleNextClick}
          className="rounded-full w-12 h-12 border border-white grid place-content-center justify-center"
        >
          <ArrowIcon className="text-white w-7 h-7" />
        </button>
      </div>
    </div>
  );
};
