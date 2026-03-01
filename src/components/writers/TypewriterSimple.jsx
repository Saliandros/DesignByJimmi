import React, { useState, useEffect } from "react";

const TypewriterSimple = ({ words = [""], prefix = "I Can: ", initialDelay = 0 }) => {
  const [ready, setReady] = useState(initialDelay === 0);
  const [word, setWord] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [pauseStep, setPauseStep] = useState(0);

  useEffect(() => {
    if (initialDelay === 0) return;
    const t = setTimeout(() => setReady(true), initialDelay);
    return () => clearTimeout(t);
  }, [initialDelay]);

  useEffect(() => {
    if (!ready || !words.length) return;
    let timeout;

    const currentWord = words[wordIndex % words.length];

    if (!isDeleting) {
      if (charIndex <= currentWord.length) {
        timeout = setTimeout(() => {
          setWord(currentWord.slice(0, charIndex));
          setCharIndex(charIndex + 1);
        }, 100);
      } else if (pauseStep < 3) {
        timeout = setTimeout(() => setPauseStep(pauseStep + 1), 1000);
      } else {
        timeout = setTimeout(() => { setPauseStep(0); setIsDeleting(true); }, 0);
      }
    } else {
      if (charIndex > 0) {
        timeout = setTimeout(() => {
          setWord(currentWord.slice(0, charIndex - 1));
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
  }, [ready, charIndex, isDeleting, wordIndex, words, pauseStep]);

  const isPulsing = !isDeleting && charIndex > (words[wordIndex % words.length] || "").length && (pauseStep === 2 || pauseStep === 3);

  return (
    <span className="typewriter">
      {prefix}{word}
      <span className={`typewriter-cursor${isPulsing ? " typewriter-cursor-pulse" : ""}`}>|</span>
    </span>
  );
};

export default TypewriterSimple;
