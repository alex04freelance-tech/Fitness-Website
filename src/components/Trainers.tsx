import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowRight, X, Award, Calendar } from 'lucide-react';
import { trainers, type Trainer } from '@/data/brand';
import { useReducedMotion } from '@/hooks/useReducedMotion';

export function Trainers() {
  const reduced = useReducedMotion();
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const expandedTrainer = trainers.find((t) => t.id === expandedId);

  return (
    <section id="trainers" className="relative bg-ivory py-24 md:py-40 bg-grain">
      <div className="container-edge">
        {/* Header */}
        <div className="mb-12 md:mb-20 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <p className="section-label mb-4">05 — Trainers</p>
            <h2 className="font-display text-charcoal text-display-sm font-light">
              Coaches who care
              <br />
              about the craft.
            </h2>
          </div>
          <p className="text-stone-500 text-sm font-light max-w-sm leading-relaxed">
            Our team brings decades of combined experience across strength, movement,
            conditioning, and recovery. Every trainer is chosen for their ability to
            teach — not just train.
          </p>
        </div>

        {/* Trainer portraits — overlapping on desktop, stacked on mobile */}
        <div className="relative">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-6">
            {trainers.map((trainer, i) => (
              <TrainerCard
                key={trainer.id}
                trainer={trainer}
                index={i}
                reduced={reduced}
                onExpand={() => setExpandedId(trainer.id)}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Expanded profile modal — exit-then-enter with the card state */}
      <AnimatePresence mode="wait">
        {expandedTrainer && (
          <TrainerModal
            trainer={expandedTrainer}
            reduced={reduced}
            onClose={() => setExpandedId(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}

function TrainerCard({
  trainer,
  index,
  reduced,
  onExpand,
}: {
  trainer: Trainer;
  index: number;
  reduced: boolean;
  onExpand: () => void;
}) {
  return (
    <motion.button
      initial={reduced ? {} : { opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      onClick={onExpand}
      className="group relative block text-left"
    >
      <div className="relative aspect-[3/4] rounded-sm overflow-hidden bg-stone-200">
        <img
          src={trainer.image}
          alt={trainer.name}
          className="h-full w-full object-cover transition-transform duration-700 ease-out-expo group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-transparent to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />
      </div>

      {/* Text block — fully within its own clear space below the image */}
      <div className="mt-4">
        <h3 className="font-display text-charcoal text-lg md:text-xl font-medium">
          {trainer.name}
        </h3>
        <p className="text-stone-500 text-xs mt-1 font-light leading-relaxed">
          {trainer.specialty}
        </p>
        <p className="text-sage-500 text-xs italic mt-2 font-light">
          {trainer.philosophy}
        </p>
      </div>

      <div className="mt-3 flex items-center gap-1 text-charcoal text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        View profile <ArrowRight size={12} />
      </div>
    </motion.button>
  );
}

function TrainerModal({
  trainer,
  reduced,
  onClose,
}: {
  trainer: Trainer;
  reduced: boolean;
  onClose: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-charcoal/80 backdrop-blur-sm" />

      <motion.div
        initial={reduced ? {} : { opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={reduced ? {} : { opacity: 0, scale: 0.95, y: 20 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className="relative bg-ivory rounded-sm max-w-3xl w-full grid md:grid-cols-2 gap-0 overflow-hidden max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="aspect-[3/4] md:aspect-auto md:min-h-[500px] relative">
          <img
            src={trainer.image}
            alt={trainer.name}
            className="h-full w-full object-cover"
          />
        </div>

        <div className="p-8 md:p-10 flex flex-col">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-stone-400 hover:text-charcoal transition-colors"
            aria-label="Close profile"
          >
            <X size={20} />
          </button>

          <p className="section-label mb-3">Trainer</p>
          <h3 className="font-display text-charcoal text-3xl font-medium mb-1">
            {trainer.name}
          </h3>
          <p className="text-sage-500 text-sm mb-6">{trainer.specialty}</p>

          <div className="space-y-4 mb-6">
            <div className="flex items-start gap-3">
              <Award size={16} className="text-stone-400 mt-0.5" />
              <div>
                <p className="text-xs uppercase tracking-wider text-stone-400 mb-0.5">Experience</p>
                <p className="text-charcoal text-sm font-light">{trainer.experience}</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Calendar size={16} className="text-stone-400 mt-0.5" />
              <div>
                <p className="text-xs uppercase tracking-wider text-stone-400 mb-0.5">Classes</p>
                <p className="text-charcoal text-sm font-light">
                  {trainer.classes.join(' · ')}
                </p>
              </div>
            </div>
          </div>

          <div className="border-t border-stone-200 pt-5 mt-auto">
            <p className="font-display text-charcoal text-lg italic font-light leading-snug">
              "{trainer.philosophy}"
            </p>
          </div>

          <button
            onClick={() => {
              onClose();
              const el = document.querySelector('#trial');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
            className="mt-6 group inline-flex items-center gap-3 text-charcoal text-sm font-medium tracking-wide border-b border-charcoal pb-1 hover:border-sage-400 hover:text-sage-500 transition-colors duration-300 w-fit"
          >
            Book a session
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-300" />
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
}
