'use client';
import { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function SmoothScroll() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const contextRef = useRef<CanvasRenderingContext2D | null>(null);

  // Configuration
  const frameCount = 100; // Total number of images you have
  const currentFrame = (index: number) => 
    `/frames/${(index + 1).toString().padStart(4, '0')}.jpg`; // Path to frames

  useLayoutEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const context = canvas.getContext('2d');
    contextRef.current = context;

    // 1. Pre-load images into memory
    const images: HTMLImageElement[] = [];
    const airpods = { frame: 0 };

    for (let i = 0; i < frameCount; i++) {
      const img = new Image();
      img.src = currentFrame(i);
      images.push(img);
    }

    // 2. Function to draw the current image to canvas
    const render = () => {
      if (context && images[airpods.frame]) {
        context.clearRect(0, 0, canvas.width, canvas.height);
        context.drawImage(images[airpods.frame], 0, 0, canvas.width, canvas.height);
      }
    };

    // 3. GSAP ScrollTrigger
    gsap.to(airpods, {
      frame: frameCount - 1,
      snap: "frame",
      ease: "none",
      scrollTrigger: {
        trigger: canvas,
        start: "top top",
        end: "+=4000", // Scroll length
        scrub: 0.5,   // Small delay makes it feel smoother on touchpads
        pin: true,
      },
      onUpdate: render // Draw new frame every time the scroll moves
    });

    // Draw first frame initially
    images[0].onload = render;

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <main className="bg-black">
      <canvas 
        ref={canvasRef} 
        width={1920} 
        height={1080} 
        className="w-full h-screen object-cover"
      />
      <section className="h-screen bg-white flex items-center justify-center">
        <h2 className="text-4xl">Next Content</h2>
      </section>
    </main>
  );
}