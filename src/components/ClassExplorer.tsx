import { useState, useMemo } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowRight, Clock, Gauge, Layers, User } from 'lucide-react';
import {
  classes,
  classCategories,
  type ClassCategory,
  type ClassItem,
} from '@/data/brand';
import { useReducedMotion } from '@/hooks/useReducedMotion';

export function ClassExplorer() {
  const reduced = useReducedMotion();
  const [activeCategory, setActiveCategory] = useState<ClassCategory>('Fitness');

  const filteredClasses = useMemo(
    () => classes.filter((c) => c.category === activeCategory),
    [activeCategory]
  );

  const [activeClassIndex, setActiveClassIndex] = useState(0);
  const activeClass = filteredClasses[activeClassIndex] || filteredClasses[0];

  const handleCategoryChange = (cat: ClassCategory) => {
    setActiveCategory(cat);
    setActiveClassIndex(0);
  };

  const handleClassSelect = (index: number) => {
    setActiveClassIndex(index);
  };

  const detailItems = [
    { icon: User, label: 'Level', value: activeClass?.level },
    { icon: Clock, label: 'Duration', value: activeClass?.duration },
    { icon: Layers, label: 'Format', value: activeClass?.format },
    { icon: Gauge, label: 'Intensity', value: activeClass?.intensity },
  ];

  return (
    <section id="classes" className="relative bg-warm py-24 md:py-40 bg-grain">
      <div className="container-edge">
        {/* Header */}
        <div className="mb-12 md:mb-20">
          <p className="section-label mb-4">02 — Disciplines</p>
          <h2 className="font-display text-charcoal text-display-sm font-light max-w-3xl">
            Find your practice.
          </h2>
        </div>

        {/* Category filter — fixed separate row */}
        <div className="relative z-20 mb-12 flex flex-wrap gap-2 border-b border-stone-200 pb-4">
          {classCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => handleCategoryChange(cat.id)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium tracking-wide transition-all duration-300 ${
                activeCategory === cat.id
                  ? 'bg-charcoal text-ivory'
                  : 'bg-transparent text-stone-500 hover:text-charcoal hover:bg-stone-100'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Class explorer grid */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Left: class list + detail */}
          <div className="lg:col-span-5 flex flex-col">
            {/* Class name list */}
            <div className="flex flex-col gap-1 mb-8">
              {filteredClasses.map((cls, i) => (
                <button
                  key={cls.id}
                  onClick={() => handleClassSelect(i)}
                  className={`group flex items-center justify-between py-3 border-b border-stone-200 text-left transition-colors duration-300 ${
                    i === activeClassIndex
                      ? 'text-charcoal'
                      : 'text-stone-400 hover:text-stone-600'
                  }`}
                >
                  <span
                    className={`font-display text-xl md:text-2xl font-light transition-all duration-300 ${
                      i === activeClassIndex ? 'translate-x-2' : 'group-hover:translate-x-1'
                    }`}
                  >
                    {cls.name}
                  </span>
                  <ArrowRight
                    size={16}
                    className={`transition-all duration-300 ${
                      i === activeClassIndex
                        ? 'opacity-100 text-sage-500'
                        : 'opacity-0 group-hover:opacity-40'
                    }`}
                  />
                </button>
              ))}
            </div>

            {/* Active class detail — exit-then-enter with mode="wait" */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeClass?.id}
                initial={reduced ? { opacity: 0 } : { opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={reduced ? { opacity: 0 } : { opacity: 0, y: -16 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="mt-auto"
              >
                <p className="text-stone-500 text-base font-light leading-relaxed mb-8 max-w-md">
                  {activeClass?.description}
                </p>

                <div className="grid grid-cols-2 gap-6 mb-8">
                  {detailItems.map((item) => (
                    <div key={item.label}>
                      <div className="flex items-center gap-2 text-stone-400 text-xs uppercase tracking-wider mb-1.5">
                        <item.icon size={13} />
                        {item.label}
                      </div>
                      <p className="text-charcoal text-sm font-medium">
                        {item.value}
                      </p>
                    </div>
                  ))}
                </div>

                <button
                  onClick={() => {
                    const el = document.querySelector('#schedule');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="group inline-flex items-center gap-3 text-charcoal text-sm font-medium tracking-wide border-b border-charcoal pb-1 hover:border-sage-400 hover:text-sage-500 transition-colors duration-300"
                >
                  View Schedule
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right: photographic area */}
          <div className="lg:col-span-7 relative aspect-[4/5] lg:aspect-auto lg:min-h-[600px] rounded-sm overflow-hidden bg-charcoal">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeClass?.id}
                initial={reduced ? { opacity: 0 } : { opacity: 0, scale: 1.08 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={reduced ? { opacity: 0 } : { opacity: 0, scale: 1.04 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="absolute inset-0"
              >
                <img
                  src={activeClass?.image}
                  alt={activeClass?.name}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/40 to-transparent" />
              </motion.div>
            </AnimatePresence>

            {/* Class name overlay — exit-then-enter to prevent overlap */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeClass?.id}
                initial={reduced ? { opacity: 0 } : { opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={reduced ? { opacity: 0 } : { opacity: 0, y: -20 }}
                transition={{ duration: 0.5, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
                className="absolute bottom-8 left-8 right-8"
              >
                <p className="text-ivory/60 text-xs uppercase tracking-[0.2em] mb-2">
                  {activeClass?.category}
                </p>
                <p className="font-display text-ivory text-3xl md:text-4xl font-light">
                  {activeClass?.name}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
