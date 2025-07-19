// src/components/AnimatedText.js
import React, { useState, useEffect } from 'react';

const phrases = [
  "Your Design to a web site",
  "Shopify Themes",
  "WordPress Templates",
  "React Applications",
  "PHP Applications",
  "Node.js APIs",
  "MongoDB Databases",
  "Shopify Custom Checkout",
  "Funnel Templates",
  "Elementor Design",
  "Real-Time Web Apps",
  "AJAX Form Integrations",
  "Responsive UI Components",
  "RESTful API Integration"
];

const AnimatedText = () => {
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150); // Speed of typing

  useEffect(() => {
    const handleTyping = () => {
      const fullTxt = phrases[currentPhraseIndex];
      const updatedText = isDeleting
        ? fullTxt.substring(0, currentText.length - 1)
        : fullTxt.substring(0, currentText.length + 1);

      setCurrentText(updatedText);

      if (!isDeleting && updatedText === fullTxt) {
        // Pause at end of phrase, then start deleting
        setTimeout(() => setIsDeleting(true), 1500); // Pause for 1.5 seconds
        setTypingSpeed(75); // Faster deleting speed
      } else if (isDeleting && updatedText === '') {
        // Finished deleting, move to next phrase
        setIsDeleting(false);
        setCurrentPhraseIndex((prevIndex) => (prevIndex + 1) % phrases.length);
        setTypingSpeed(150); // Normal typing speed
      } else {
        // Continue typing or deleting
        setTypingSpeed(isDeleting ? 75 : 150);
      }
    };

    const typingInterval = setInterval(handleTyping, typingSpeed);

    return () => clearInterval(typingInterval);
  }, [currentPhraseIndex, currentText, isDeleting, typingSpeed]);

  return (
    <span className="animated-text">{currentText}</span>
  );
};

export default AnimatedText;