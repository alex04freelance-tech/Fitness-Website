import { motion } from 'framer-motion';
import { useReducedMotion } from '@/hooks/useReducedMotion';

const stages = [
  {
    number: '01',
    title: 'Assessment',
    text: 'We start with where you actually are: movement screen, goals, and a honest conversation.',
  },
  {
    number: '02',
    title: 'Program',
    text: 'A plan built around your body and your schedule, not a generic template.',
  },
  {
    number: '03',
    title: 'Coaching',
    text: 'Every session guided, every rep corrected. You\u2019re never training alone.',
  },
  {
    number: '04',
    title: 'Progress',
    text: 'Measurable check-ins \u2014 strength, mobility, body composition \u2014 so you always know where you stand.',
  },
  {
    number: '05',
    title: 'Community',
    text: 'A club of people who show up for each other, not just a gym membership.',
  },
];

export function Journey() {
  const reduced = useReducedMotion();

  return (
    <section id="journey" className="relative bg-ivory py-24 md:py-40">
      <div className="container-edge">
        {/* Section header */}
        <motion.div
          initial={reduced ? {} : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mb-20 md:mb-32"
        >
          <p className="section-label mb-4">06 \u2014 Your Journey</p>
          <h2 className="font-display text-charcoal text-display-sm font-light leading-tight max-w-3xl">
            Becoming a member
            <br />
            <span className="text-sage-500 italic">is a process, not a transaction.</span>
          </h2>
        </motion.div>

        {/* Stages */}
        <div className="space-y-20 md:space-y-32">
          {stages.map((stage, i) => (
            <motion.div
              key={stage.number}
              initial={reduced ? {} : { opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-120px' }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="grid lg:grid-cols-12 gap-6 lg:gap-12 items-start"
            >
              {/* Stage number */}
              <div className="lg:col-span-3">
                <span className="font-display text-sage-400 text-6xl md:text-7xl lg:text-8xl font-light leading-none tabular-nums">
                  {stage.number}
                </span>
              </div>

              {/* Stage content */}
              <div className="lg:col-span-9 lg:pl-8">
                <motion.h3
                  initial={reduced ? {} : { opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-120px' }}
                  transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                  className="font-display text-charcoal text-3xl md:text-4xl lg:text-5xl font-light leading-tight mb-5"
                >
                  {stage.title}
                </motion.h3>
                <motion.p
                  initial={reduced ? {} : { opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-120px' }}
                  transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                  className="text-stone-500 text-lg md:text-xl font-light leading-relaxed max-w-xl"
                >
                  {stage.text}
                </motion.p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
