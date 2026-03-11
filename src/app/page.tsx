'use client';

import { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function FrameScroll() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  // Settings - Update these to match your project
  const frameCount = 200; 
  const currentFrame = (index: number) => 
    `/Media/frames/${(index + 1).toString().padStart(5, '0')}.jpg`;

  useLayoutEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
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
        end: "+=3000", // Distance to scroll (higher = slower animation)
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

  return (
    <main className="bg-black">
      {/* The Canvas container */}
      <div className="canvas-wrapper">
        <canvas 
          ref={canvasRef} 
          width={1920} // Match your Blender render resolution
          height={1080} 
          className="canvas-element"
        />
      </div>

      {/* Placeholder section to allow scrolling past the canvas */}
      <section className="h-screen bg-white flex items-center justify-center">
        <h2 className="text-4xl text-black">End of Animation</h2>
      </section>
    </main>
  );
}