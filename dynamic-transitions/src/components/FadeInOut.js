import React, { useEffect } from 'react';
import { gsap } from 'gsap';

const FadeInOut = () => {
  useEffect(() => {
    gsap.to(".page1", { duration: 1, opacity: 0, delay: 2 });
    gsap.fromTo(".page2", { opacity: 0 }, { duration: 1, opacity: 1, delay: 3 });
  }, []);

  return (
    <div className="fade-container">
      <div className="page1">Page 1</div>
      <div className="page2">Page 2</div>
    </div>
  );
};

export default FadeInOut;
