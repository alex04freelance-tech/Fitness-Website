import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { classes } from '@/data/brand';
import { useReducedMotion } from '@/hooks/useReducedMotion';

const signatureIds = ['strength-training', 'reformer-pilates', 'hiit'];
const signatureClasses = signatureIds
  .map((id) => classes.find((c) => c.id === id))
  .filter((c): c is NonNullable<typeof c> => c !== undefined);

export function SignaturePrograms() {
  return (
    <section className="relative bg-charcoal">
      {signatureClasses.map((cls, i) => (
        <SignaturePanel key={cls.id} cls={cls} index={i} />
      ))}
    </section>
  );
}

type SignaturePanelProps = {
  cls: (typeof classes)[number];
  index: number;
};

function SignaturePanel({ cls, index }: SignaturePanelProps) {
  const reduced = useReducedMotion();
  const panelRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: panelRef,
    offset: ['start end', 'end start'],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1.12, 1]);
  const y = useTransform(scrollYProgress, [0, 1], ['-3%', '3%']);
  const isLeft = index % 2 === 0;

  const scrollToTrial = () => {
    const el = document.querySelector('#trial');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <article
      ref={panelRef}
      className="relative h-screen min-h-[600px] w-full overflow-hidden"
    >
      {/* Background image with parallax pan */}
      <motion.div
        style={reduced ? {} : { scale, y }}
        className="absolute inset-0"
      >
        <img
          src={cls.image}
          alt={cls.name}
          className="h-full w-full object-cover"
          loading="lazy"
        />
      </motion.div>

      {/* Gradient overlay for readability */}
      <div
        className={`absolute inset-0 ${
          isLeft
            ? 'bg-gradient-to-r from-charcoal/80 via-charcoal/30 to-transparent'
            : 'bg-gradient-to-l from-charcoal/80 via-charcoal/30 to-transparent'
        }`}
      />

      {/* Content */}
      <div className="relative z-10 h-full flex items-center container-edge">
        <div className={`max-w-xl ${isLeft ? 'mr-auto text-left' : 'ml-auto text-right'}`}>
          <motion.p
            initial={reduced ? {} : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-150px' }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="text-ivory/50 text-xs uppercase tracking-[0.3em] font-medium mb-6"
          >
            03 — Signature Programs
          </motion.p>

          <motion.h2
            initial={reduced ? {} : { opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-150px' }}
            transition={{ duration: 1, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-ivory text-display-sm font-light leading-[1.05] mb-6"
          >
            {cls.name}
          </motion.h2>

          <motion.p
            initial={reduced ? {} : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-150px' }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="text-ivory/70 text-base md:text-lg font-light leading-relaxed mb-8 max-w-md"
          >
            {cls.description}
          </motion.p>

          <motion.div
            initial={reduced ? {} : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-150px' }}
            transition={{ duration: 0.6, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-wrap gap-4 mb-8"
          >
            <DetailChip label="Level" value={cls.level} />
            <DetailChip label="Duration" value={cls.duration} />
            <DetailChip label="Intensity" value={cls.intensity} />
          </motion.div>

          <motion.button
            initial={reduced ? {} : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-150px' }}
            transition={{ duration: 0.6, delay: 0.75, ease: [0.22, 1, 0.36, 1] }}
            onClick={scrollToTrial}
            className={`group inline-flex items-center gap-3 px-8 py-4 bg-ivory text-charcoal rounded-full text-sm font-medium tracking-wide hover:bg-sage-200 transition-colors duration-300 ${
              isLeft ? '' : 'flex-row-reverse'
            }`}
          >
            Book this class
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
          </motion.button>
        </div>
      </div>
    </article>
  );
}

function DetailChip({ label, value }: { label: string; value: string }) {
  return (
    <div className="inline-flex flex-col">
      <span className="text-ivory/40 text-[10px] uppercase tracking-wider">{label}</span>
      <span className="text-ivory/80 text-sm font-light">{value}</span>
    </div>
  );
}
