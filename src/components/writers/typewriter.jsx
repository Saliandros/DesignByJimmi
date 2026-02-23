import React, { useState, useEffect } from "react";

/**
 * Typewriter-effekt med valgfri prefix.
 * Eksempel på brug:
 * <Typewriter words={["React", "Angular"]} prefix="Programmets tech stack er: " />
 * Hvis prefix ikke angives, bruges "I Can: " som standard.
 */
const Typewriter = ({ words = [""], prefix = "I Can: " }) => {
  const [displayed, setDisplayed] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [pauseStep, setPauseStep] = useState(0); // 0 = ingen pause, 1-4 = sekunder

  useEffect(() => {
    if (hovered) return; // Stop animation når man hover
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
        // Vent 3 sekunder, opdater pauseStep hvert sekund
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
  }, [charIndex, isDeleting, wordIndex, words, prefix, hovered, pauseStep]);

  return (
    <span
      className="typewriter"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {displayed}
      <span
        className={
          `typewriter__cursor${
            (!isDeleting && charIndex > (words[wordIndex % words.length] || "").length && (pauseStep === 2 || pauseStep === 3))
              ? " typewriter__cursor--pulse"
              : ""
          }`
        }
      >
        |
      </span>
      {hovered && words.length > 0 && (
        <ul
          className="typewriter__dropdown"
        >
          {words.map((word, idx) => (
            <li key={idx} className="typewriter__item">{word}</li>
          ))}
        </ul>
      )}
    </span>
  );
};

export default Typewriter;