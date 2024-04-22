import Image from 'next/image'
import React from 'react'

export const AboutBio = () => {
  return (
    <div className='w-full mt-12 md:mt-0'>
    <Image
      src="/images/img4.png"
      alt="john"
      width={600}
      height={600}
      className="rounded-3xl w-full h-[300px] md:h-[450px] object-cover"
    />

    <div className="md:flex space-y-3 md:space-y-0 md:space-x-6 mt-5">
      <div className="text-4xl lg:text-5xl farro-bold text-white ">
        <h1>Hello</h1>
        <h1>Dear</h1>
      </div>

      <p className="text-zinc-300 leading-8 md:text-lg">
        I’m John Ifemezuo, an independent designer living in Nigeria. I
        have 5+ years of experience. I help brands craft meaningful
        digital experiences.As a designer, I value authenticity,
        transparency, and honesty above all else. No big, fancy words or
        same-old ideas. I will listen to your needs and work hard to bring
        your ideas to life. It&apos;s as simple as that.What makes me
        different? I&apos;m really passionate. I care a lot about doing
        meaningful work with my clients. If you want someone you can trust
        and someone who always puts your needs first, and build
        long-lasting relationships. I believe you’ve enough reasons to
        work with me.By now, you might be wondering about that &quot;WE&quot; right?
        That&apos;s because sometimes I team up with other skilled designers. I
        have a great team to make our ideas come to life.Anyway, How are
        you doing?
      </p>
    </div>
  </div>
  )
}
