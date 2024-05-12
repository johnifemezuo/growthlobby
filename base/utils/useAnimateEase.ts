import { useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

export const useAnimateEase = () => {
  const easeInVariant = {
    hidden: { y: 120, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]);

  return {
    easeInVariant,
    ref,
    mainControls,
  };
};
