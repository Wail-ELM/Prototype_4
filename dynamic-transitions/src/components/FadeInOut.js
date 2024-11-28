import React from 'react';
import { gsap } from 'gsap';

const FadeInOut = () => {
  React.useEffect(() => {
    gsap.fromTo(".fade-in", { opacity: 0 }, { duration: 1, opacity: 1 });
    gsap.to(".fade-out", { duration: 1, opacity: 0, delay: 2 });
  }, []);

  return (
    <div className="fade-transition">
      <div className="fade-in">Page 1</div>
      <div className="fade-out">Page 2</div>
    </div>
  );
};

export default FadeInOut;
