import React, { useState, useEffect } from "react";

const TypewriterSimple = ({ words = [""], prefix = "I Can: " }) => {
  const [displayed, setDisplayed] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [pauseStep, setPauseStep] = useState(0);

  useEffect(() => {
    let timeout;

    if (!words.length) {
      timeout = setTimeout(() => {
        setDisplayed("");
        setCharIndex(0);
        setWordIndex(0);
        setIsDeleting(false);
        setPauseStep(0);
      }, 0);
      return () => clearTimeout(timeout);
    }

    const currentWord = words[wordIndex % words.length];

    if (!isDeleting) {
      if (charIndex <= currentWord.length) {
        timeout = setTimeout(() => {
          setDisplayed(prefix + currentWord.slice(0, charIndex));
          setCharIndex(charIndex + 1);
        }, 100);
      } else if (pauseStep < 3) {
        timeout = setTimeout(() => {
          setPauseStep(pauseStep + 1);
        }, 1000);
      } else {
        timeout = setTimeout(() => {
          setPauseStep(0);
          setIsDeleting(true);
        }, 0);
      }
    } else {
      if (charIndex > 0) {
        timeout = setTimeout(() => {
          setDisplayed(prefix + currentWord.slice(0, charIndex - 1));
          setCharIndex(charIndex - 1);
        }, 50);
      } else {
        timeout = setTimeout(() => {
          setIsDeleting(false);
          setWordIndex((wordIndex + 1) % words.length);
        }, 400);
      }
    }
    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, wordIndex, words, prefix, pauseStep]);

  return (
    <span className="typewriter">
      {displayed}
      <span
        className={
          `typewriter-cursor${
            (!isDeleting && charIndex > (words[wordIndex % words.length] || "").length && (pauseStep === 2 || pauseStep === 3))
              ? " typewriter-cursor-pulse"
              : ""
          }`
        }
      >
        |
      </span>
    </span>
  );
};

export default TypewriterSimple;
