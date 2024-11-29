import React from 'react';
import { gsap } from 'gsap';

const DistortedImages = () => {
  React.useEffect(() => {
    gsap.to(".image", {
      duration: 2,
      scale: 1.1,
      filter: "blur(4px)",
      repeat: -1,
      yoyo: true,
    });
  }, []);

  return (
    <div className="images">
      <img src="/batman.jpg" alt="Distorted" className="image" />
    </div>
  );
};

export default DistortedImages;
