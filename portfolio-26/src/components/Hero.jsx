import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import HeroImage from '../assets/heroImage.jpg';

const TEXTS = [
  "Lois Nkeiruka",
  "UX Designer",
  "UX Designer",
  "Frontend Engineer",
  "Emerging HCI researcher",
  "Human-Centred AI Advocate",
];

export default function Hero() {
  const [displayText, setDisplayText] = useState('');
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentFullText = TEXTS[textIndex];

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (charIndex < currentFullText.length) {
          setDisplayText(currentFullText.substring(0, charIndex + 1));
          setCharIndex(charIndex + 1);
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (charIndex > 0) {
          setDisplayText(currentFullText.substring(0, charIndex - 1));
          setCharIndex(charIndex - 1);
        } else {
          setIsDeleting(false);
          setTextIndex((prev) => (prev + 1) % TEXTS.length);
        }
      }
    }, isDeleting ? 100 : 100);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, textIndex]);

  return (
    <div
      className="relative min-h-screen flex flex-col justify-center items-center text-center overflow-hidden"
      style={{
        backgroundImage: `url(${HeroImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/65" />

      {/* Content */}
      <div className="relative z-10 px-6 mt-30">
        <p className="text-xs md:text-sm font-mono tracking-[0.25em] uppercase mb-4"
          style={{ color: 'rgba(255,249,252,0.7)' }}>
          Welcome to my website
        </p>

        {/* Typewriter */}
        <div className="flex items-center justify-center mb-10" style={{ minHeight: '72px' }}>
          <span
            className="font-serif font-normal"
            style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)', color: '#FFF9FC', letterSpacing: '-0.02em' }}
          >
            {displayText}
          </span>
          {/* Blinking cursor — brand color glow */}
          <span
            className="inline-block ml-1 w-0.5 self-stretch"
            style={{
              backgroundColor: '#C54B8C',
              boxShadow: '0 0 8px rgba(197,75,140,0.8)',
              animation: 'blink 1s step-end infinite',
              minHeight: '1em',
            }}
          />
        </div>

        {/* CTA buttons — brand colors */}
        <div className="flex gap-4 justify-center flex-wrap">
          <Link
            to="/ux-case-studies"
            className="px-7 py-3 text-sm font-medium border-2 rounded-sm transition-all duration-300 hover:-translate-y-1"
            style={{
              borderColor: '#C54B8C',
              color: '#C54B8C',
              backgroundColor: 'transparent',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.backgroundColor = '#C54B8C';
              e.currentTarget.style.color = '#fff';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.backgroundColor = 'transparent';
              e.currentTarget.style.color = '#C54B8C';
            }}
          >
            View Work
          </Link>
          <Link
            to="/contact"
            className="px-7 py-3 text-sm font-medium border-2 rounded-sm transition-all duration-300 hover:-translate-y-1"
            style={{
              borderColor: '#C54B8C',
              backgroundColor: '#C54B8C',
              color: '#fff',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.backgroundColor = '#993366';
              e.currentTarget.style.borderColor = '#993366';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.backgroundColor = '#C54B8C';
              e.currentTarget.style.borderColor = '#C54B8C';
            }}
          >
            Hire Me
          </Link>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="font-mono text-[10px] tracking-widest uppercase"
          style={{ color: 'rgba(255,255,255,0.4)' }}>
          Scroll
        </span>
        <div className="w-px h-8"
          style={{ background: 'linear-gradient(to bottom, #C54B8C, transparent)', animation: 'scroll-bob 2s ease-in-out infinite' }} />
      </div>

      <style>{`
        @keyframes blink {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0; }
        }
      `}</style>
    </div>
  );
}
