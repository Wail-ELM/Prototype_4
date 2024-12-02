import React, { useEffect, useRef } from 'react';
import anime from 'animejs';

const AnimeJS = () => {
  const imageRef = useRef();

  useEffect(() => {
    anime({
      targets: imageRef.current,
      translateX: [-500, 0],
      scale: [0.5, 1],
      opacity: [0, 1],
      easing: 'easeInOutExpo',
      duration: 2000,
      delay: 500,
    });
  }, []);

  return (
    <div className="anime-container">
      <img
        ref={imageRef}
        src="https://via.placeholder.com/400"
        alt="Animated"
        className="anime-image"
      />
    </div>
  );
};

export default AnimeJS;
