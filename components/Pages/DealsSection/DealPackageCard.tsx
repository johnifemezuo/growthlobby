import { TickIcon } from "@/components/Global/Icons/TickIcon";
import Link from "next/link";

export const DealPackageCard = () => (
  <div className="text-left relative z-30 rounded-[30px] overflow-hidden bg-[#F2F2F2] max-w-[450px]">
    <div className="p-4 md:p-6">
      <div className="flex-col-reverse flex md:grid md:grid-cols-2 gap-2">
        <h1 className="px-5 py-3 font-semibold text-white rounded-sm  bg-[#082F34] border-b-4 border-yellow-400 border- w-full text-lg md:text-xl text-center mb-3">
          Standard
        </h1>

        {/* <h1 className="px-5 py-2 text-zinc-700 font-semibold bg-transparent rounded-sm text-lg md:text-xl text-center mb-3">
          Agency plus
        </h1> */}
      </div>
      <p className="text-zinc-600">
        Perfect for startups & founders who need design work and want to grow.
      </p>

      <div className="mt-4">
        <h3 className="space-x-2">
          <span className="text-xl md:text-3xl font-semibold">$2,000</span>{" "}
          <span className="text-zinc-500 font-medium">/Mo</span>
        </h3>
        <p className="text-sm font-medium text-zinc-500">
          Pause or cancel anytime
        </p>
      </div>
    </div>

    <div className="bg-white px-4 md:px-6 py-4 md:py-6 space-y-5 rounded-tl-3xl rounded-tr-3xl">
      <p className="font-medium ">Whats Included</p>
      <div className="space-x-3 flex items-center">
        <TickIcon />{" "}
        <p className="text-sm md:text-base">Production-ready web/app designs
</p>
      </div>
      <div className="space-x-3 flex items-center">
        <TickIcon />{" "}
        <p className="text-sm md:text-base">Unlimited Design request</p>
      </div>
      <div className="space-x-3 flex items-center">
        <TickIcon />{" "}
        <p className="text-sm md:text-base">One request at a time</p>
      </div>
      <div className="space-x-3 flex items-center">
        <TickIcon />{" "}
        <p className="text-sm md:text-base">Average 48 hour delivery</p>
      </div>
      <div className="space-x-3 flex items-center">
        <TickIcon />{" "}
        <p className="text-sm md:text-base">Strategic Kick-off Call</p>
      </div>
      <div className="space-x-3 flex items-center">
        <TickIcon />{" "}
        <p className="text-sm md:text-base">1:1 async communication</p>
      </div>
      <div className="space-x-3 flex items-center">
        <TickIcon />{" "}
        <p className="text-sm md:text-base">Project Update</p>
      </div>
      <div className="space-x-3 flex items-center">
        <TickIcon /> <p className="text-sm md:text-base">Framer development</p>
      </div>
      <div className="space-x-3 flex items-center">
        <TickIcon /> <p className="text-sm md:text-base">Unlimited Users </p>
      </div>

      <div className="space-x-3 flex items-center">
        <TickIcon />{" "}
        <p className="text-sm md:text-base">
          Front end development(Custom code){" "}
        </p>
      </div>
      <div className="space-x-3 flex items-center">
        <TickIcon />{" "}
        <p className="text-sm md:text-base">Pause or cancel anytime</p>
      </div>

      <Link
        href="https://cal.com/john-ifemezuo/15min"
        target="_blank"
        className="pt-4 inline-block w-full"
      >
        <button className="bg-black text-white rounded-full py-4 px-6 w-full text-cent">
          Book a call
        </button>
      </Link>
    </div>
  </div>
);
