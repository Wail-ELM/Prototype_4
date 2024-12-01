import React from 'react';
import { gsap } from 'gsap';

const StartScreen = ({ onStart }) => {
  React.useEffect(() => {
    const timeline = gsap.timeline();
    timeline
      .fromTo(".title", { opacity: 0, y: 50 }, { duration: 1, opacity: 1, y: 0 })
      .fromTo(".start-btn", { opacity: 0, scale: 0.8 }, { duration: 1, opacity: 1, scale: 1, delay: 0.5 });
  }, []);

  return (
    <div className="start-screen">
      <h1 className="title">Welcome to Dynamic Transistions</h1>
      <button className="start-btn" onClick={onStart}>Start</button>
    </div>
  );
};

export default StartScreen;

