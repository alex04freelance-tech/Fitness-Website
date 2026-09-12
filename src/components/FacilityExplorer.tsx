import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { MapPin } from 'lucide-react';
import { facilities } from '@/data/brand';
import { useReducedMotion } from '@/hooks/useReducedMotion';

export function FacilityExplorer() {
  const reduced = useReducedMotion();
  const [activeId, setActiveId] = useState(facilities[0].id);
  const activeFacility = facilities.find((f) => f.id === activeId) || facilities[0];

  return (
    <section className="relative bg-ivory py-24 md:py-40 bg-grain">
      <div className="container-edge">
        {/* Header */}
        <div className="mb-12 md:mb-20">
          <p className="section-label mb-4">08 — Facilities</p>
          <h2 className="font-display text-charcoal text-display-sm font-light">
            Every space,
            <br />
            <span className="text-sage-500 italic">designed with intent.</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Left: facility list */}
          <div className="lg:col-span-5 flex flex-col gap-1">
            {facilities.map((facility, i) => (
              <button
                key={facility.id}
                onClick={() => setActiveId(facility.id)}
                className={`group relative flex items-center gap-4 py-4 border-b border-stone-200 text-left transition-colors duration-300 ${
                  activeId === facility.id ? 'text-charcoal' : 'text-stone-400 hover:text-stone-600'
                }`}
              >
                {/* Animated marker — only on active, no ghost left behind */}
                <span className="relative flex items-center justify-center w-6 h-6 flex-shrink-0">
                  <AnimatePresence mode="wait">
                    {activeId === facility.id && (
                      <motion.span
                        key={facility.id}
                        initial={reduced ? { opacity: 0 } : { opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={reduced ? { opacity: 0 } : { opacity: 0, scale: 0.5 }}
                        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                        className="absolute"
                      >
                        <MapPin size={18} className="text-sage-500" />
                      </motion.span>
                    )}
                  </AnimatePresence>
                </span>

                <span
                  className={`font-display text-xl md:text-2xl font-light transition-all duration-300 ${
                    activeId === facility.id ? 'translate-x-1' : 'group-hover:translate-x-0.5'
                  }`}
                >
                  {facility.name}
                </span>

                <span className="ml-auto text-xs text-stone-300 font-light tabular-nums">
                  0{i + 1}
                </span>
              </button>
            ))}
          </div>

          {/* Right: image + description — exit-then-enter to prevent overlap */}
          <div className="lg:col-span-7">
            <div className="relative aspect-[4/3] rounded-sm overflow-hidden bg-stone-200">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeFacility.id}
                  initial={reduced ? { opacity: 0 } : { opacity: 0, scale: 1.06 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={reduced ? { opacity: 0 } : { opacity: 0, scale: 1.03 }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute inset-0"
                >
                  <img
                    src={activeFacility.image}
                    alt={activeFacility.name}
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/40 to-transparent" />
                </motion.div>
              </AnimatePresence>
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeFacility.id + '-text'}
                initial={reduced ? { opacity: 0 } : { opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={reduced ? { opacity: 0 } : { opacity: 0, y: -16 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="mt-6"
              >
                <p className="text-stone-500 text-base font-light leading-relaxed mb-3 max-w-lg">
                  {activeFacility.description}
                </p>
                <p className="text-sage-500 text-xs uppercase tracking-[0.2em] font-medium">
                  {activeFacility.detail}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
