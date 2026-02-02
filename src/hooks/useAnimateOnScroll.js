import { useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * Custom hook to centralize scroll-triggered GSAP animations
 * uses standard useLayoutEffect for maximum production compatibility
 */
export const useAnimateOnScroll = (selector, props = {}, containerRef) => {
  useLayoutEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
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
        clearProps: "all",
      });
    }, containerRef);

    return () => ctx.revert();
  }, [containerRef]);
};
