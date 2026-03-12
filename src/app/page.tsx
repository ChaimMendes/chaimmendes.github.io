'use client';

import { useRef, useLayoutEffect, useState, useEffect } from 'react';
import styles from './page.module.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function FrameScroll() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [displayedText, setDisplayedText] = useState('');
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const phrases = ['/>eveloping', '/<reating', '/>esigning', '/<haimmendes'];
  
  // Settings - Update these to match your project
  const frameCount = 39;
  const currentFrame = (index: number) =>
    `/Media/frames/${(index + 1).toString().padStart(5, '0')}.jpg`;

  useLayoutEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    // Set canvas dimensions to window size
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    const context = canvas.getContext('2d');

    // 1. Create an array of image objects for preloading
    const images: HTMLImageElement[] = [];
    const airpods = { frame: 0 }; // GSAP will animate this 'frame' number

    // 2. Preload all images to prevent flickering
    for (let i = 0; i < frameCount; i++) {
      const img = new Image();
      img.src = currentFrame(i);
      images.push(img);
    }

    // 3. Function to draw the image onto the canvas
    const render = () => {
      if (context && images[airpods.frame]) {
        // Clear canvas and draw the new image
        context.clearRect(0, 0, canvas.width, canvas.height);
        context.drawImage(
          images[airpods.frame],
          0, 0, canvas.width, canvas.height
        );
      }
    };

    // 4. Create the Scroll Animation
    gsap.to(airpods, {
      frame: frameCount - 1,
      snap: "frame", // Ensures we don't land "between" frames
      ease: "none",
      scrollTrigger: {
        trigger: canvas,
        start: "top top",
        end: "+=1000", // Distance to scroll (higher = slower animation)
        scrub: 0.5,    // Smoothing (0.5 is great for touchpads)
        pin: true,     // Stuck to screen while scrolling
      },
      onUpdate: render // Every time scroll moves, redraw
    });

    // Draw the very first frame immediately
    images[0].onload = render;

    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

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
      {/* The Canvas container */}
      <div className={styles['canvas-wrapper']}>
        <div className="canvasCont">
          <canvas
          ref={canvasRef}
          width={1920}
          height={1080}
          className={styles['canvas-element']}
        />
        </div>
        <div className={styles.welcomeMessage}>
          <h2>{displayedText}|</h2>
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