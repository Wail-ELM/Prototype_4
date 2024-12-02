import React from 'react';
import { motion } from 'framer-motion';

const FramerMotion = () => {
  const cards = ["Card 1", "Card 2", "Card 3", "Card 4"];

  return (
    <div className="motion-container">
      {cards.map((card, index) => (
        <motion.div
          key={index}
          className="motion-card"
          whileHover={{
            scale: 1.2,
            rotate: 10,
            boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.3)",
          }}
          whileTap={{ scale: 0.8 }}
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ type: "spring", stiffness: 200, delay: index * 0.3 }}
        >
          {card}
        </motion.div>
      ))}
    </div>
  );
};

export default FramerMotion;
