import React, { useState, useEffect } from 'react';
import StartScreen from './components/StartScreen';
import FadeInOut from './components/FadeInOut';
import TypewriterEffect from './components/TypewriterEffect';
import Articles from './components/Articles';
import { gsap } from 'gsap';

function App() {
  const [start, setStart] = useState(false);

  useEffect(() => {
    if (start) {
      const timeline = gsap.timeline();
      timeline
        .fromTo(".fade-container", { opacity: 0 }, { opacity: 1, duration: 1 })
        .fromTo(".typewriter", { opacity: 0 }, { opacity: 1, duration: 1 }, "+=0.5");

      return () => {
        timeline.kill(); 
      };
    }
  }, [start]);

  return (
    <div className="App">
      {!start ? (
        <StartScreen onStart={() => setStart(true)} />
      ) : (
        <div className="main-content">
          <FadeInOut key="fade" />
          <TypewriterEffect key="typewriter" />
          <Articles key="articles" />
        </div>
      )}
    </div>
  );
}

export default App;
