import React from 'react';
import Typewriter from 'typewriter-effect';

const TypewriterEffect = () => {
  return (
    <div className="typewriter">
      <Typewriter
        options={{
          strings: ["Welcome to you!", "Enjoy your time!"],
          autoStart: true,
          loop: true,
        }}
      />
    </div>
  );
};

export default TypewriterEffect;
