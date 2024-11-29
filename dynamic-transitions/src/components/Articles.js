import React from 'react';
import { gsap } from 'gsap';

const Articles = () => {
  React.useEffect(() => {
    gsap.from(".article", {
      duration: 1,
      opacity: 0,
      y: 50,
      stagger: 0.2,
    });
  }, []);

  return (
    <div className="articles">
      <div className="article">Article 1</div>
      <div className="article">Article 2</div>
      <div className="article">Article 3</div>
    </div>
  );
};

export default Articles;
