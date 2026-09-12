import { useEffect, useRef, useState } from 'react';
import { ArrowDown, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { brand } from '@/data/brand';
import { useReducedMotion } from '@/hooks/useReducedMotion';

gsap.registerPlugin(ScrollTrigger);

const heroImages = [
  'https://images.pexels.com/photos/33360214/pexels-photo-33360214.jpeg?auto=compress&cs=tinysrgb&h=1200&w=1920',
  'https://images.pexels.com/photos/35215412/pexels-photo-35215412.jpeg?auto=compress&cs=tinysrgb&h=1200&w=1920',
  'https://images.pexels.com/photos/32830368/pexels-photo-32830368.jpeg?auto=compress&cs=tinysrgb&h=1200&w=1920',
];

export function Hero() {
  const reduced = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const scrollIndicatorRef = useRef<HTMLDivElement>(null);
  const clipRef = useRef<HTMLDivElement>(null);

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (reduced) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % heroImages.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [reduced]);

  useEffect(() => {
    if (reduced || !sectionRef.current) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 0.6,
          pin: true,
          pinSpacing: false,
        },
      });

      tl.to(bgRef.current, {
        scale: 1.15,
        opacity: 0,
        ease: 'none',
        duration: 1,
      }, 0);

      tl.to(textRef.current, {
        y: -80,
        ease: 'none',
        duration: 0.5,
      }, 0);

      tl.to(scrollIndicatorRef.current, {
        opacity: 0,
        ease: 'none',
        duration: 0.4,
      }, 0);

      tl.fromTo(clipRef.current, {
        height: 0,
      }, {
        height: '100vh',
        ease: 'none',
        duration: 0.8,
      }, 0.2);
    }, sectionRef);

    return () => ctx.revert();
  }, [reduced]);

  const scrollToContent = () => {
    const el = document.querySelector('#philosophy');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      ref={sectionRef}
      className="relative h-screen min-h-[700px] w-full overflow-hidden bg-charcoal"
    >
      <div ref={bgRef} className="absolute inset-0">
        {heroImages.map((src, i) => (
          <div
            key={i}
            className="absolute inset-0 transition-opacity duration-[2000ms] ease-out-expo"
            style={{ opacity: i === currentIndex ? 1 : 0 }}
          >
            <img
              src={src}
              alt=""
              className="h-full w-full object-cover"
              loading={i === 0 ? 'eager' : 'lazy'}
            />
          </div>
        ))}
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/50 via-charcoal/30 to-charcoal/70" />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal/40 to-transparent" />
      </div>

      <div ref={textRef} className="relative z-10 h-full flex flex-col justify-center container-edge">
        <motion.div
          initial={reduced ? {} : { opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="text-ivory/70 text-sm tracking-[0.3em] uppercase font-light mb-6">
            {brand.subtitle}
          </p>
        </motion.div>

        <motion.h1
          initial={reduced ? {} : { opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="font-display text-ivory text-display-lg font-light"
        >
          {brand.heroStatement}
        </motion.h1>

        <motion.p
          initial={reduced ? {} : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1, ease: [0.22, 1, 0.36, 1] }}
          className="text-ivory/60 text-sm tracking-[0.2em] uppercase font-light mt-6 mb-10"
        >
          {brand.heroSupport}
        </motion.p>

        <motion.div
          initial={reduced ? {} : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <button
            onClick={scrollToContent}
            className="group inline-flex items-center gap-3 px-8 py-4 bg-ivory text-charcoal rounded-full text-sm font-medium tracking-wide hover:bg-sage-200 transition-colors duration-300"
          >
            {brand.primaryCta}
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
          </button>
          <button
            onClick={() => {
              const el = document.querySelector('#classes');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
            className="inline-flex items-center gap-3 px-8 py-4 border border-ivory/30 text-ivory rounded-full text-sm font-medium tracking-wide hover:bg-ivory/10 transition-colors duration-300"
          >
            {brand.secondaryCta}
          </button>
        </motion.div>
      </div>

      <div
        ref={scrollIndicatorRef}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
      >
        <button onClick={scrollToContent} className="text-ivory/50 hover:text-ivory/80 transition-colors" aria-label="Scroll down">
          <ArrowDown size={20} className="animate-bounce" />
        </button>
      </div>

      <div
        ref={clipRef}
        className="absolute bottom-0 left-0 right-0 bg-ivory origin-top pointer-events-none z-20"
        style={{ height: reduced ? '0' : '0' }}
      />
    </section>
  );
}
