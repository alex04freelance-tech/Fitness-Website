import { motion } from 'framer-motion';
import { transformations } from '@/data/brand';
import { BeforeAfterSlider } from '@/components/BeforeAfterSlider';
import { useReducedMotion } from '@/hooks/useReducedMotion';

export function Transformations() {
  const reduced = useReducedMotion();

  return (
    <section id="transformations" className="relative bg-ivory py-24 md:py-40">
      <div className="container-edge">
        {/* Section header */}
        <motion.div
          initial={reduced ? {} : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16 md:mb-24 max-w-3xl"
        >
          <p className="section-label mb-4">09 — Transformations</p>
          <h2 className="font-display text-charcoal text-display-sm font-light leading-tight">
            Real change
            <br />
            <span className="text-sage-500 italic">takes time and showing up.</span>
          </h2>
          <p className="text-stone-500 text-base font-light leading-relaxed mt-6 max-w-xl">
            Drag the handle across each image to see the difference a committed
            training program makes.
          </p>
        </motion.div>

        {/* Transformation stories */}
        <div className="space-y-20 md:space-y-32">
          {transformations.map((story, i) => (
            <motion.div
              key={story.id}
              initial={reduced ? {} : { opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-120px' }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center"
            >
              {/* Slider — wider column, alternates sides on desktop */}
              <div className={`lg:col-span-8 ${i % 2 === 1 ? 'lg:order-2' : ''}`}>
                <BeforeAfterSlider
                  beforeImage={story.beforeImage}
                  afterImage={story.afterImage}
                />
              </div>

              {/* Story text */}
              <div className={`lg:col-span-4 ${i % 2 === 1 ? 'lg:order-1' : ''}`}>
                <span className="font-display text-sage-400 text-4xl font-light leading-none tabular-nums">
                  0{i + 1}
                </span>
                <h3 className="font-display text-charcoal text-2xl md:text-3xl font-light leading-tight mt-4">
                  {story.memberName}
                </h3>
                <p className="text-stone-500 text-sm font-light leading-relaxed mt-3">
                  {story.resultSummary}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Placeholder notice */}
        <motion.p
          initial={reduced ? {} : { opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
          className="text-center text-stone-400 text-xs font-light mt-16"
        >
          Placeholder imagery — real member stories coming soon.
        </motion.p>
      </div>
    </section>
  );
}
