import Image from "next/image"

export const Testimonial = ({name, title, message, profilePics}:{ name: string, title: string, message: string; profilePics: string}) => {
    return (
        

      <div className="justify-center flex flex-col items-center mt-12 lg:mt-24">
      <div className="space-y-2">
        <div className="rounded-full overflow-hidden w-12 h-12 lg:w-14 lg:h-14 mx-auto grid place-content-center">
          <Image
            src={profilePics}
            alt=""
            width={200}
            height={200}
            className="object-cover"
          />
        </div>
        <div>
        <h2 className="text-white text-base lg:text-xl mt-2 text-center">
          {name}
        </h2>
        <p className="text-white/60 text-sm lg:text-base text-center ">
          {title}
        </p>
        </div>
      </div>

      <div className="mt-6">
        <p className="text-white text-sm lg:text-lg text-center">
          {message}
        </p>
      </div>
    </div>
    )
}