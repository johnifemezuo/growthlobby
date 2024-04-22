export const DealList = ({title, description, price}: {title: string; description: string; price: string}) => {
    return (
        <div className="space-y-4 border-b pb-6 border-white/20">
            <h1 className="text-lg text-white  md:text-xl lg:text-2xl xl:text-xl font-manrope font-semibold relative">
              {title}
            </h1>
            <p className="text-zinc-300 w-full ">
              {description}
            </p>

            <p className="flex items-center space-x-4">
              <span className="text-zinc-300">Starts At</span>
              <span className="text-lg md:text-xl font-bold text-white">
               {price}
              </span>
            </p>
          </div>
    )
}