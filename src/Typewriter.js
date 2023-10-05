import React, { useState, useEffect } from 'react';

const Typewriter = ({ text, delay }) => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const typingInterval = setInterval(() => {
      if (!isPaused) {
        if (currentIndex < text.length) {
          setCurrentText(prevText => prevText + text[currentIndex]);
          setCurrentIndex(prevIndex => prevIndex + 1);
        } else {
          // Typing is complete, pause for 2 seconds
          setIsPaused(true);
          setTimeout(() => {
            setCurrentText(''); // Clear the text
            setCurrentIndex(0); // Reset the index
            setIsPaused(false); // Resume typing
          }, 2000); // 2-second pause
        }
      }
    }, delay);

    return () => clearInterval(typingInterval);
  }, [currentIndex, delay, text, isPaused]);

  return <span>{currentText}</span>;
};

export default Typewriter;
