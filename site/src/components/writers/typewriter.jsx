import React, { useState, useEffect } from "react";

/**
 * Typewriter-effekt med valgfri prefix.
 * Eksempel på brug:
 * <Typewriter words={["React", "Angular"]} prefix="Programmets tech stack er: " />
 * Hvis prefix ikke angives, bruges "I Can: " som standard.
 */
const Typewriter = ({ words, prefix = "I Can: " }) => {
  const [displayed, setDisplayed] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [pauseStep, setPauseStep] = useState(0); // 0 = ingen pause, 1-4 = sekunder

  useEffect(() => {
    if (hovered) return; // Stop animation når man hover
    const currentWord = words[wordIndex % words.length];
    let timeout;

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
      className="relative cursor-pointer inline-block text-primary size-md"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {displayed}
      <span
        className={
          `typewriter-cursor inline-block ml-1 align-baseline${
            (!isDeleting && charIndex > (words[wordIndex % words.length] || "").length && (pauseStep === 2 || pauseStep === 3))
              ? " animate-pulse"
              : ""
          }`
        }
      >
        |
      </span>
      {hovered && (
        <ul
          className="absolute left-0 top-full bg-white border border-gray-300 shadow-lg z-10 list-none min-w-[120px] p-2 mt-1 rounded"
        >
          {words.map((word, idx) => (
            <li key={idx} className="py-1 px-2 hover:bg-gray-100 rounded transition-colors duration-150">{word}</li>
          ))}
        </ul>
      )}
    </span>
  );
};

export default Typewriter;