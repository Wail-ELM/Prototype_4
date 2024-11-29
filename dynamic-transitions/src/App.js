import React, { useState } from "react";
import StartScreen from "./components/StartScreen";
import FadeInOut from "./components/FadeInOut";
import Articles from "./components/Articles";
import DistortedImages from "./components/DistortedImages";
import TypewriterEffect from "./components/Typewriter";

function App() {
  const [experienceStarted, setExperienceStarted] = useState(false);

  return (
    <div className="App">
      {!experienceStarted ? (
        <StartScreen startExperience={() => setExperienceStarted(true)} />
      ) : (
        <>
          <FadeInOut />
          <TypewriterEffect />
          <Articles />
          <DistortedImages />
        </>
      )}
    </div>
  );
}

export default App;
