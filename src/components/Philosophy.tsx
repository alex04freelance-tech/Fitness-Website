import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { philosophyStatement } from '@/data/brand';
import { useReducedMotion } from '@/hooks/useReducedMotion';

export function Philosophy() {
  const reduced = useReducedMotion();
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const lineHeight = useTransform(scrollYProgress, [0.1, 0.5], ['0%', '100%']);

  return (
    <section
      id="philosophy"
      ref={ref}
      className="relative bg-ivory py-24 md:py-40 bg-grain"
    >
      <div className="container-edge">
        {/* Section label with scroll progress line */}
        <div className="flex items-center gap-6 mb-16 md:mb-24">
          <p className="section-label">01 — Philosophy</p>
          <div className="flex-1 h-px bg-stone-200 relative overflow-hidden max-w-xs">
            <motion.div
              style={reduced ? { width: '100%' } : { width: lineHeight }}
              className="absolute top-0 left-0 h-full bg-sage-400"
            />
          </div>
        </div>

        {/* Main statement — full width */}
        <motion.h2
          initial={reduced ? {} : { opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="font-display text-charcoal text-editorial font-light leading-tight max-w-5xl"
        >
          {philosophyStatement.primary}
          <br />
          <span className="text-sage-500 italic">{philosophyStatement.secondary}</span>
        </motion.h2>

        {/* Pillars grid */}
        <div className="mt-16 md:mt-24 grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10">
          {philosophyStatement.pillars.map((pillar, i) => (
            <motion.div
              key={pillar.label}
              initial={reduced ? {} : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="border-t border-stone-200 pt-5"
            >
              <h3 className="text-charcoal text-sm font-medium tracking-wide mb-2">
                {pillar.label}
              </h3>
              <p className="text-stone-500 text-sm font-light leading-relaxed">
                {pillar.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
