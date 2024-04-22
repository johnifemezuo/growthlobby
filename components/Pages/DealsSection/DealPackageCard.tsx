import { TickIcon } from "@/components/Global/Icons/TickIcon";

export const DealPackageCard = () => (
    <div className="text-left relative z-30 rounded-[30px] overflow-hidden bg-[#F2F2F2] max-w-[450px]">
    <div className="p-4 md:p-6">
      <div className="flex-col-reverse flex md:grid md:grid-cols-2 gap-2">
        <h1 className="px-5 py-3 font-semibold text-white bg-[#B2B608] rounded-full text-lg md:text-xl text-center mb-3">
          Standard
        </h1>

        <h1 className="px-5 py-2 text-zinc-700 font-semibold bg-transparent rounded-sm text-lg md:text-xl text-center mb-3">
          Agency plus
        </h1>
      </div>
      <p className="text-zinc-600">
        Perfect for startups & founders who need design work and want to
        grow.
      </p>

      <div className="mt-4">
        <h3 className="space-x-2">
          <span className="text-xl md:text-3xl font-semibold">
            $5,000
          </span>{" "}
          <span className="text-zinc-500">/Mo</span>
        </h3>
        <p className="text-sm text-zinc-500">Pause or cancel anytime</p>
      </div>
    </div>

    <div className="bg-white px-4 md:px-6 py-4 md:py-9 space-y-5 ">
      <div className="space-x-3 flex items-center">
        <TickIcon /> <p className="text-sm md:text-base">Production-ready web/app designs</p>
      </div>
      <div className="space-x-3 flex items-center">
        <TickIcon /> <p className="text-sm md:text-base">Production-ready web/app designs</p>
      </div>
      <div className="space-x-3 flex items-center">
        <TickIcon /> <p className="text-sm md:text-base">Production-ready web/app designs</p>
      </div>

      <button className="bg-black text-white rounded-full py-4 px-6 w-full text-cent">
        Book a call
      </button>
    </div>
  </div>
)