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


      {/* About Me Section */}
      <div className={styles["AboutContainer"]}>
        <div className={styles["splash"]}>/&lt;</div>
        <div className={`${styles["left"]} ${styles["aboutcontainers"]}`}>
          <h1>Chaim<br />Mendes</h1>
        </div>
        <div className={`${styles["right"]} ${styles["aboutcontainers"]}`}>
          <h3>3D artist.</h3>
          <hr />
          <h3>Web developer.</h3>
          <hr />
          <h3>Fluent in Next.js, TypeScript, HTML, CSS, Python.</h3>
          <hr />
          <h3>Engineer</h3>
        </div>
      </div>



      {/* Design Ideology*/}
      <div className={styles["next-section"]}>
        <h2 className={styles['green']}>Making Pretty Things Functional, &</h2>
        <h2 className={styles['purple']}>Functional Things Pretty.</h2>
      </div>
      {/* Blender Portfolo Section */}
      <div className={styles["skillContainer"]}>
        <div className={`${styles['skillimage']} ${styles['BlenderImage']}`}></div>
        <div className={styles['stencilbacker']}></div>
        <div className={styles["skillstencil"]}>
          <p>Blender</p>
        </div>
        <div className={styles["skillInfo"]}>
          <h3>I am a 3D artist and I love bringing ideas to life in my virtual universe so that they can iterate, grow, and mature into the world we know.</h3>
          <a href="/portfolio">View My Portfolio◭</a>
        </div>
      </div>
      {/* Web Development Section */}
      <div className={styles["skillContainer"]}>
        <div className={`${styles['skillimage']} ${styles['WebDevImage']}`}></div>
        <div className={styles['stencilbacker']}></div>
        <div className={styles["skillstencil"]}>
          <p>WebDev</p>
        </div>
        <div className={styles["skillInfo"]}>
          <h3>I am a web developer and I love to build, grow and decorate my internet real estate collection.</h3>
          <h2>I am fluent in Next.js, TypeScript, HTML, CSS, and JavaScript.</h2>
        </div>
      </div>
    </main>
  );
}