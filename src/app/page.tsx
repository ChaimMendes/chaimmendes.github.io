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
    const pauseTime = 1000;

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
      {/* Video */}
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

      {/* About */}
      <div className="relative flex flex-row min-h-[70vh] w-screen bg-neutral-950">
        <div className='flex align-middle overflow-clip m-auto'></div>
        <h2 className='text-6xl inline-block m-auto [writing-mode:vertical-rl] rotate-180 font-titles h-[30vw] text-white'>/Chaim<br />mendes</h2>
        <div className='flex flex-row w-[70vw] h-fit m-auto flex-wrap gap-4'>
          <IconBox item="Python" />
          <IconBox item="OpenVSP" other='/Media/home/extraicons/open-vsp.svg' />
          <IconBox item="Blender" />
          <IconBox item="Rust" />
          <IconBox item="HTML" alt_name="HTML5" />
          <IconBox item="CSS" />
          <IconBox item="JS" alt_name='javascript' />
          <IconBox item="TSX" alt_name='typescript' />
          <IconBox item="Git" />
          <IconBox item="Fedora" />
          <IconBox item="Photoshop" other='/Media/home/extraicons/photoshop.svg' />
          <IconBox item="Illustrator" other='/Media/home/extraicons/illustrator.svg' />
          <IconBox item="Jekyll" />
          <IconBox item="Ruby" />
          <IconBox item="Arduino" />
          <IconBox item="Linux" />
        </div>
      </div>

      {/* Work */}
      <div className='bg-green h-[150vh] relative block'>
        <div className={`${styles["boxy-shrink"]}  sticky top-0 h-screen relative block font-main text-neutral-900 w-screen bg-cover bg-center`} style={{ backgroundImage: "url('/Media/portfolio/nilu/0266.jpg')" }}>
          <div className='absolute p-2 sm:p-8 rounded-2xl m-3 right-0 bottom-0 max-w-[90vw] sm:max-w-[80vw] bg-[#00000013] text-[0.75rem] md:text-[1rem]'>
            <h2 className='text-5xl font-titles font-[weight:1000] text-black'>Work</h2>
            <p>
              Im the creator of The Better Baker addon for Blender that has been trusted
              by 2500 artists and counting. <a className='text-purple rounded-s p-1 bg-[#00000090]' href="/portfolio/pieces/betterbaker">(See page)</a>
            </p>
            <p>
              I create 3D models in Blender(Like the car in the background). To see more, visit my
              portfolio. <a className='text-purple rounded-s p-1 bg-[#00000090]' href="/portfolio/">(Portfolio)</a>
            </p>
            <p>
              I maintain a blog on the subjects of space and technology.
              <a className='text-purple rounded-s p-1 bg-[#00000090]' href="/blog/">(Blog)</a>
            </p>
            <p>
              And I make websites, but you should have caught on to that by now... (This one, duh.)
            </p>
          </div>
        </div>
      </div>

      {/* About */}
      <div className='bg-green h-[150vh] relative block'>
        <div className={`${styles["boxy-squash"]}  sticky top-0 h-screen relative block font-main text-neutral-200 w-screen bg-cover bg-center`} style={{ backgroundImage: "url('/Media/home/Starship-V3-take-off.jpg')" }}>
          <div className='absolute p-2 sm:p-8 rounded-2xl m-3 left-0 bottom-0 max-w-[80vw] sm:max-w-[40vw] bg-[#00000099] text-[0.75rem] md:text-[1rem]'>
            <h2 className='text-5xl font-titles font-[weight:1000] text-white'>About</h2>
            <p>
              I'm primarily fluent in English, with passable Hindi. I am based in India. Due to
              a process called education, I am not available for work. I love space, rocketry, and Linux.
              If you disagree, feel free to leave my website:). I am most available on GitHub. I have followed
              Starship since IFT-2, unlike you, who started at IFT-14 when the IPO happened. Visit my
              <a href="/about" className='text-purple rounded-s p-1'>about page.</a>
            </p>
          </div>
        </div>
      </div>

      {/* spacer */}
      <div className='h-[20vh]'></div>
    </main>
  );
}
function IconBox({ item, alt_name, other }: { item: string, alt_name?: string, other?: string }) {
  const final_alt = alt_name && alt_name !== "" ? alt_name : item;
  const source = other && other !== "" ? other : `https://cdn.simpleicons.org/${final_alt}/8FFE09`;
  return (
    <div className='flex flex-row gap-10 bg-neutral-700 p-1 sm:2.5 rounded-2xl group overflow-hidden scale-100 hover:scale-[98%] border transition duration-200 hover:-translate-y-1 border-purple/50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple motion-reduce:transform-none'>
      <h3 className='text-[10px] sm:text-2xl md:text-3xl font-main text-neutral-200'>{item}</h3>
      <img src={source} alt="" className='h-3 sm:h-8 md:h-10 text-green' />
    </div>
  );
}