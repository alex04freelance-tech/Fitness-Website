import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { personalTrainingFocus, brand } from '@/data/brand';
import { useReducedMotion } from '@/hooks/useReducedMotion';

export function PersonalTraining() {
  const reduced = useReducedMotion();

  return (
    <section className="relative bg-warm py-24 md:py-40 bg-grain">
      <div className="container-edge">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div className="lg:col-span-6 order-2 lg:order-1">
            <motion.div
              initial={reduced ? {} : { opacity: 0, scale: 1.05 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="relative aspect-[4/5] rounded-sm overflow-hidden"
            >
              <img
                src="https://images.pexels.com/photos/39219674/pexels-photo-39219674.jpeg?auto=compress&cs=tinysrgb&h=1000&w=800"
                alt="Personal training session"
                className="h-full w-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/30 to-transparent" />
            </motion.div>
          </div>

          {/* Content */}
          <div className="lg:col-span-6 order-1 lg:order-2">
            <p className="section-label mb-4">06 — Personal Training</p>
            <motion.h2
              initial={reduced ? {} : { opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="font-display text-charcoal text-editorial font-light leading-tight mb-8"
            >
              Your training.
              <br />
              <span className="text-sage-500 italic">Built around you.</span>
            </motion.h2>

            <p className="text-stone-500 text-base font-light leading-relaxed mb-8 max-w-md">
              One-on-one coaching designed around your body, your goals, and your schedule.
              Whether you're building strength, recovering from injury, or chasing a specific
              performance target, your trainer builds the program that gets you there.
            </p>

            <div className="mb-10">
              <p className="text-xs uppercase tracking-[0.2em] text-stone-400 font-medium mb-4">
                Sessions can focus on
              </p>
              <div className="flex flex-wrap gap-2">
                {personalTrainingFocus.map((focus, i) => (
                  <motion.span
                    key={focus}
                    initial={reduced ? {} : { opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.05 }}
                    className="px-4 py-2 bg-ivory border border-stone-200 rounded-full text-sm text-charcoal font-light"
                  >
                    {focus}
                  </motion.span>
                ))}
              </div>
            </div>

            <button
              onClick={() => {
                const el = document.querySelector('#trial');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className="group inline-flex items-center gap-3 px-8 py-4 bg-charcoal text-ivory rounded-full text-sm font-medium tracking-wide hover:bg-sage-500 transition-colors duration-300"
            >
              Book a Consultation
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
