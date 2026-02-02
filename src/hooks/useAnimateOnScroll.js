import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * Custom hook to centralize scroll-triggered GSAP animations
 * uses fromTo to ensure visibility state is captured and applied only on trigger
 */
export const useAnimateOnScroll = (selector, props = {}, containerRef) => {
  useGSAP(
    () => {
      if (!containerRef.current) return;

      const {
        y = 40,
        x = 0,
        duration = 1,
        stagger = 0.1,
        ease = "power3.out",
        start = "top 95%",
        toggleActions = "play none none reverse",
      } = props;

      gsap.from(selector, {
        scrollTrigger: {
          trigger: containerRef.current,
          start,
          toggleActions,
        },
        y,
        x,
        opacity: 0,
        duration,
        stagger,
        ease,
        clearProps: "all", // Clean up after animation
      });
    },
    { scope: containerRef },
  );
};
