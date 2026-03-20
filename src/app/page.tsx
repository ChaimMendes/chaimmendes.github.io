'use client';

import { useRef, useLayoutEffect, useState, useEffect } from 'react';
import styles from './page.module.css';


export default function FrameScroll() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [displayedText, setDisplayedText] = useState('');
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const phrases = ['/>eveloping', '/<reating', '/>esigning', '/<haimmendes'];

  // Typewriter effect
  useEffect(() => {
    const currentPhrase = phrases[phraseIndex];
    const typingSpeed = isDeleting ? 50 : 150;
    const pauseTime = 1500;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        // Typing
        if (displayedText.length < currentPhrase.length) {
          setDisplayedText(currentPhrase.slice(0, displayedText.length + 1));
        } else {
          // Pause before deleting
          setTimeout(() => setIsDeleting(true), pauseTime);
        }
      } else {
        // Deleting
        if (displayedText.length > 0) {
          setDisplayedText(displayedText.slice(0, -1));
        } else {
          // Move to next phrase
          setPhraseIndex((prev) => (prev + 1) % phrases.length);
          setIsDeleting(false);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, phraseIndex, phrases]);

  return (
    <main className="bg-black">

      <div className={styles["herovideo"]}>
        <div className={styles["sticky"]}>
          <video autoPlay loop muted>
            <source src="Media\MechanicalSpiderInstectDroid.mp4" type="video/mp4" />
          </video>
          <div className={styles["welcomeMessage"]}>
            <span>
              {displayedText}
              <span className={styles["cursor"]}>|</span>
            </span>
          </div>
        </div>
      </div>
      {/* Placeholder section to allow scrolling past the canvas */}
      <div className={styles["next-section"]}>
        <p>Hi, i'm Chaim Mendes, and I beleive in making</p>
        <h2 className={styles['green']}>Functional Things Pretty,</h2>
        <h2 className={styles['purple']}>and Pretty Things Functional.</h2>
        <p>(like this site)</p>
      </div>
    </main>
  );
}