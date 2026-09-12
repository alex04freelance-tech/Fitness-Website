import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { clubImages } from '@/data/brand';
import { useReducedMotion } from '@/hooks/useReducedMotion';

export function TheClub() {
  const reduced = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end end'],
  });

  // Horizontal scroll: translate the track from 0 to -(totalWidth - viewportWidth)
  // Approximate: 6 images * ~45vw each = 270vw, need to scroll from 0 to -170vw
  const x = useTransform(scrollYProgress, [0, 1], ['0%', '-68%']);

  return (
    <section
      id="club"
      ref={sectionRef}
      className="relative bg-charcoal"
      style={{ height: '300vh' }}
    >
      <div className="sticky top-0 h-screen overflow-hidden flex flex-col justify-center">
        {/* Header */}
        <div className="container-edge mb-8 md:mb-12">
          <p className="text-xs uppercase tracking-[0.3em] text-stone-500 font-medium mb-4">
            06 — The Club
          </p>
          <h2 className="font-display text-ivory text-display-sm font-light">
            Step inside.
          </h2>
        </div>

        {/* Horizontal image track */}
        <div ref={trackRef} className="relative">
          <motion.div
            style={reduced ? {} : { x }}
            className="flex gap-6 pl-6 md:pl-16 will-change-transform"
          >
            {clubImages.map((img, i) => (
              <div
                key={i}
                className="relative flex-shrink-0 w-[80vw] md:w-[45vw] aspect-[16/10] rounded-sm overflow-hidden group"
              >
                <img
                  src={img.src}
                  alt={img.caption}
                  className="h-full w-full object-cover transition-transform duration-700 ease-out-expo group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <p className="font-display text-ivory text-2xl md:text-3xl font-light mb-1">
                    {img.caption}
                  </p>
                  <p className="text-ivory/60 text-sm font-light">
                    {img.sub}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Progress indicator */}
        <div className="container-edge mt-8">
          <div className="h-px bg-stone-700 relative overflow-hidden">
            <motion.div
              style={reduced ? { width: '100%' } : { scaleX: scrollYProgress }}
              className="h-full bg-sage-400 origin-left"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
