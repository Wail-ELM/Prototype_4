import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ScrollEffect = () => {
  useEffect(() => {
    gsap.fromTo(
      '.scroll-box',
      { opacity: 0, y: 100 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.3,
        scrollTrigger: {
          trigger: '.scroll-container',
          start: 'top 80%',
          end: 'top 30%',
          scrub: true,
        },
      }
    );
  }, []);

  return (
    <div className="scroll-container">
      {[...Array(5)].map((_, i) => (
        <div key={i} className="scroll-box">
          Scroll Box {i + 1}
        </div>
      ))}
    </div>
  );
};

export default ScrollEffect;
