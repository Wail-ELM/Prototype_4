import React, { useState, useEffect } from 'react';
import StartScreen from './components/StartScreen';
import FadeInOut from './components/FadeInOut';
import TypewriterEffect from './components/TypewriterEffect';
import Articles from './components/Articles';
import FramerMotion from './components/FramerMotion';
import AnimeJS from './components/AnimeJS';
import D3BarChart from './components/D3BarChart';
import ScrollEffect from './components/ScrollEffect';
import { gsap } from 'gsap';

function App() {
  const [start, setStart] = useState(false); 
  const [currentPage, setCurrentPage] = useState(0); 

  const pages = [
    <FadeInOut key="fade" />,
    <TypewriterEffect key="typewriter" />,
    <Articles key="articles" />,
    <FramerMotion key="framer" />,
    <AnimeJS key="anime" />,
    <D3BarChart key="d3" />,
    <ScrollEffect key="scroll" />,
  ];

  useEffect(() => {
    if (start) {
      const timeline = gsap.timeline();
      timeline.fromTo(
        `.page-${currentPage}`,
        { opacity: 0, scale: 0.9, y: 50 },
        { opacity: 1, scale: 1, y: 0, duration: 1 }
      );

      return () => {
        timeline.kill();
      };
    }
  }, [start, currentPage]);

  const handleNext = () => {
    if (currentPage < pages.length - 1) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  const handlePrevious = () => {
    if (currentPage > 0) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  return (
    <div className="App">
      {!start ? (
        <StartScreen onStart={() => setStart(true)} />
      ) : (
        <div className={`page page-${currentPage}`}>
          {pages[currentPage]}
          <div className="navigation">
            {currentPage > 0 && (
              <button onClick={handlePrevious} className="nav-button">
                Previous
              </button>
            )}
            {currentPage < pages.length - 1 && (
              <button onClick={handleNext} className="nav-button">
                Next
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
