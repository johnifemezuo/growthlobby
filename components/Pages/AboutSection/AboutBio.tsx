import Image from "next/image";

export const AboutBio = () => {
  return (
    <div className="w-full mt-12 md:mt-0">
      <Image
        src="/images/growthlobby-johnny.jpg"
        alt="john ifemezuo Growthlobby"
        width={1200}
        height={1200}
        className="rounded-3xl w-full h-[300px] md:h-[550px] object-cover object-top"
      />

      <div className="md:flex space-y-3 md:space-y-0 md:space-x-6 mt-5 lg:mt-8">
        <div className="text-4xl lg:text-5xl farro-bold text-white ">
          <h1>Hello</h1>
          <h1>Dear</h1>
        </div>

        <div className="text-zinc-300 leading-8 md:text-lg font-medium space-y-4">
          <p>
            I’m John Ifemezuo, an independent designer and developer living in
            Nigeria. I have 5+ years of experience in the tech industry. I help
            brands craft meaningful digital experiences.
          </p>
          <p>
            As a designer, I value authenticity, transparency, and honesty above
            all else. No big, fancy words or same-old ideas. I will listen to
            your needs and work hard to bring your ideas to life. It&apos;s as
            simple as that.
          </p>
          <p>
            What makes me different? I&apos;m really passionate. I love to
            design and build. I care a lot about doing meaningful work with my
            clients. If you want someone you can trust and someone who always
            puts your needs first, and build long-lasting relationships. I
            believe you’ve enough reasons to work with me.
          </p>
          <p>
            By now, you might be wondering about that &quot;WE&quot; right?
            That&apos;s because sometimes I team up with other skilled designers
            and software engineers to make your ideas come to life.
          </p>

          <p className="font-bold">Anyway, How are you doing? 🤓</p>
        </div>
      </div>
    </div>
  );
};
