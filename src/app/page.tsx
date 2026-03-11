'use client';
import styles from './page.module.css';

import { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// 1. Register the plugin
gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const video = videoRef.current;
    const section = sectionRef.current;

    if (!video || !section) return;

    // 2. The function that builds the animation
    const initVideoAnimation = () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "+=4000", // Total scroll distance (4000px)
          scrub: 1.5,   // Ties video time to scrollbar
          pin: true,    // Keeps video on screen
          markers: false // Set to true to see 'start' and 'end' labels
        },
      });

      // 3. Animate the 'currentTime' property
      tl.fromTo(
        video,
        { currentTime: 0 },
        { 
          currentTime: video.duration || 5, 
          ease: "none" 
        }
      );
    };

    // 4. Handle video loading
    if (video.readyState >= 2) {
      initVideoAnimation();
    } else {
      video.addEventListener("loadedmetadata", initVideoAnimation);
    }

    // 5. Cleanup when leaving the page
    return () => {
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);

  return (
    <main className="bg-black">
      {/* THE PINNED VIDEO SECTION */}
      <section ref={sectionRef} className="video-container">
        <video
          ref={videoRef}
          src="\Media\MechanicalVirusLikeInsectMadeInBlender.mp4" // Ensure this path matches your public folder
          playsInline
          muted
          preload="auto"
          className="video-element"
        />
        
        {/* TEXT OVERLAY */}
        <div className="overlay">
          <h1 className="headerFont text-white text-6xl">/Chaimmendes</h1>
          <p className="text-purple-500 font-mono">hi</p>
        </div>
      </section>

      {/* NEXT SECTION (So you have room to scroll) */}
      <section className="next-section">
        <h2 className="text-white text-4xl">Hi</h2>
        <p className="text-gray-400 mt-4">Ho</p>
      </section>
    </main>
  );
}