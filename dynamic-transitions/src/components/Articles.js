import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const Articles = () => {
  const articlesRef = useRef([]);

  useEffect(() => {
    gsap.fromTo(
      articlesRef.current,
      { clipPath: "circle(0% at 50% 50%)" },
      {
        clipPath: "circle(150% at 50% 50%)",
        duration: 1.5,
        stagger: 0.3,
        ease: "power2.out",
      }
    );
  }, []);

  return (
    <div className="articles">
      {["Article 1", "Article 2", "Article 3", "Article 4"].map((article, index) => (
        <div
          key={index}
          className="article"
          ref={(el) => (articlesRef.current[index] = el)}
        >
          {article}
        </div>
      ))}
    </div>
  );
};

export default Articles;
