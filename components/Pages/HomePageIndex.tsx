import { HeroSection } from "./HeroSection/HeroSection";
import { IntroSection } from "./IntroSection/IntroSection";
import { ServiceSection } from "./ServiceSection/ServiceSection";
import { WorksSection } from "./WorksSection/WorksSection";
import { DealsSection } from "./DealsSection/DealsSection";
import { AboutSection } from "./AboutSection/AboutSection";

export const HomePageIndex = () => {
  return (
    <div>
      <HeroSection />
      <IntroSection />
      <ServiceSection />
      <WorksSection />
      <DealsSection />
      <AboutSection />
      {/* about */}
      {/* faq */}
      {/* contact me */}
      {/* footer */}
    </div>
  );
};
