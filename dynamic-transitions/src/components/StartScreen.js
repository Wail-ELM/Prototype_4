import React from 'react';
import { gsap } from 'gsap';

const StartScreen = ({ startExperience }) => {
  React.useEffect(() => {
    const timeline = gsap.timeline();
    timeline
      .from(".title", { duration: 1, opacity: 0, y: 50 })
      .from(".start-btn", { duration: 1, opacity: 0, scale: 0.8 }, "-=0.5");
  }, []);

  return (
    <div className="start-screen">
      <h1 className="title">Welcome to Dynamic Transistions</h1>
      <button className="start-btn" onClick={startExperience}>Start</button>
    </div>
  );
};

export default StartScreen;
