import React, { useState } from "react";
import StartScreen from "./components/StartScreen";
import FadeInOut from "./components/FadeInOut";

function App() {
  const [experienceStarted, setExperienceStarted] = useState(false);

  return (
    <div className="App">
      {!experienceStarted ? (
        <StartScreen startExperience={() => setExperienceStarted(true)} />
      ) : (
        <>
          <FadeInOut />
        </>
      )}
    </div>
  );
}

export default App;
