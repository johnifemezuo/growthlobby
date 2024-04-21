import Head from "next/head";
import { HeroSection } from "./HeroSection/HeroSection";
import { IntroSection } from "./IntroSection/IntroSection";
import { ServiceSection } from "./ServiceSection/ServiceSection";
import { WorksSection } from "./WorksSection/WorksSection";

export const HomePageIndex = () => {
  return (
    <>
      <Head>
        <title>Growthlobby : Welcome</title>
      </Head>

      <div>
        <HeroSection />
        <IntroSection />
        <ServiceSection />
        <WorksSection />
        {/* Work */}
        {/* packages */}
        {/* faq */}
        {/* about */}
        {/* contact me */}
        {/* footer */}
      </div>
    </>
  );
};
