import { testimonials } from "@/base/data/testimonialData";
import { useSelectedSnapDisplay } from "@/base/utils/useSelectedSnapDisplay";
import { ArrowIcon } from "@/components/Global/Icons/ArrowIcon";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback } from "react";
import { Testimonial } from "./Testimonial";

export const Testimonials = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "center" },
    // eslint-disable-next-line new-cap
    [Autoplay()]
  );

  const { selectedSnap, snapCount } = useSelectedSnapDisplay(emblaApi as any);

  const handlePrevClick = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const handleNextClick = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <div className="flex flex-col w-full items-center mt-20">
      <h1 className="text-xl  xl:text-3xl farro-bold relative text-white ">
        What our clients have to say
      </h1>

      <div ref={emblaRef} className="flex overflow-x-hidden">
        <div className="mt-6 md:mt-12 flex space-x-4 md:space-x-6 px-5 ">
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
              />
            </div>
          ))}
        </div>
      </div>

      <div className="flex items-center space-x-4 pt-4">
        <button
          onClick={handlePrevClick}
          className="rotate-180 rounded-full w-12 h-12 border border-white grid place-content-center justify-center"
        >
          <ArrowIcon className="text-white w-7 h-7" />
        </button>

        <div className="text-white px-4">
          <span>{selectedSnap + 1}</span> /{" "}
          <span className="text-white/50">{snapCount}</span>
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
