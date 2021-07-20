import { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

export const Animation = () => {
  useEffect(() => {
    let timeLine = gsap.timeline();
    gsap.registerPlugin(ScrollTrigger);

    timeLine
      .from("#animation-nav", {
        scale: 0.5,
        duration: 1,
        opacity: 0,
        y: 50,
        stagger: { each: 0.2 },
        ease: "ease",
      })
      .from("#animation-initialState", {
        duration: 1,
        opacity: 0,
        y: 300,
        stagger: { each: 0.2 },
        ease: "ease",
      });

    gsap.from("#animation-about", {
      duration: 1,
      opacity: 0,
      y: 300,
      stagger: { each: 0.2 },
      ease: "ease",
      scrollTrigger: { trigger: "#animation-about" },
    });
    gsap.from("#animation-skill", {
      duration: 1,
      opacity: 0,
      y: 300,
      stagger: { each: 0.2 },
      ease: "ease",
      scrollTrigger: { trigger: "#animation-skill" },
    });
    gsap.from("#animation-project", {
      duration: 1,
      opacity: 0,
      y: 300,
      stagger: { each: 0.2 },
      ease: "ease",
      scrollTrigger: { trigger: "#animation-project" },
    });
    gsap.from("#animation-contact", {
      duration: 1,
      opacity: 0,
      y: 300,
      stagger: { each: 0.2 },
      ease: "ease",
      scrollTrigger: { trigger: "#animation-contact" },
    });
  }, []);

  return <></>;
};
