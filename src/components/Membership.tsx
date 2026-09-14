import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { memberships } from '@/data/brand';
import { useReducedMotion } from '@/hooks/useReducedMotion';

export function Membership() {
  const reduced = useReducedMotion();

  const featured = memberships.find((m) => m.highlighted) ?? memberships[0];
  const others = memberships.filter((m) => !m.highlighted);

  return (
    <section id="membership" className="relative bg-warm py-24 md:py-40 bg-grain">
      <div className="container-edge">
        {/* Header */}
        <div className="mb-12 md:mb-20 max-w-2xl">
          <p className="section-label mb-4">11 — Membership</p>
          <h2 className="font-display text-charcoal text-display-sm font-light">
            Choose your level.
          </h2>
          <p className="text-stone-500 text-sm font-light max-w-md mt-6 leading-relaxed">
            Every membership includes full access to our training floor, recovery areas,
            and locker rooms. Upgrade anytime.
          </p>
        </div>

        {/* Editorial asymmetric layout */}
        <div className="grid lg:grid-cols-12 gap-6 lg:gap-8">
          {/* Featured tier — wide, dark, tall */}
          <motion.div
            initial={reduced ? {} : { opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 lg:row-span-2 relative bg-charcoal p-10 md:p-14 flex flex-col min-h-[32rem]"
          >
            <span className="absolute top-8 right-8 px-3 py-1 bg-sage-400 text-ivory text-[10px] uppercase tracking-wider rounded-full font-medium">
              Popular
            </span>

            <div className="mb-8">
              <h3 className="font-display text-3xl font-medium text-ivory mb-2">
                {featured.name}
              </h3>
              <p className="text-ivory/60 text-xs font-light leading-relaxed mb-8">
                {featured.tagline}
              </p>
              <div>
                <span className="font-display text-5xl font-light text-ivory">
                  {featured.price}
                </span>
                <span className="text-ivory/50 text-xs ml-2">
                  {featured.frequency}
                </span>
              </div>
            </div>

            {/* Features as flowing editorial list with dividers */}
            <ul className="flex-1 mb-8 divide-y divide-ivory/10">
              {featured.features.map((feature) => (
                <li
                  key={feature}
                  className="py-3 text-sm font-light text-ivory/80 leading-relaxed"
                >
                  {feature}
                </li>
              ))}
            </ul>

            <div className="text-xs text-ivory/50 mb-8 pb-8 border-b border-ivory/15">
              <span className="uppercase tracking-wider">Access: </span>
              {featured.access}
            </div>

            <button
              onClick={() => {
                const el = document.querySelector('#trial');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className="group inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-sm font-medium tracking-wide transition-all duration-300 bg-sage-400 text-ivory hover:bg-sage-300"
            >
              Choose {featured.name}
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </motion.div>

          {/* Compact tiers — slim columns */}
          {others.map((plan, i) => (
            <motion.div
              key={plan.id}
              initial={reduced ? {} : { opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: (i + 1) * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="lg:col-span-7 bg-ivory p-8 md:p-10 flex flex-col"
            >
              <div className="grid md:grid-cols-3 gap-6 md:gap-8 items-start">
                {/* Name + price column */}
                <div>
                  <h3 className="font-display text-xl font-medium text-charcoal mb-1">
                    {plan.name}
                  </h3>
                  <p className="text-stone-500 text-xs font-light leading-relaxed mb-4">
                    {plan.tagline}
                  </p>
                  <div>
                    <span className="font-display text-2xl font-light text-charcoal">
                      {plan.price}
                    </span>
                    <span className="text-stone-400 text-xs ml-1">
                      {plan.frequency}
                    </span>
                  </div>
                </div>

                {/* Features as flowing inline list */}
                <div className="md:col-span-2">
                  <p className="text-stone-600 text-sm font-light leading-relaxed">
                    {plan.features.map((f, idx) => (
                      <span key={f}>
                        {f}
                        {idx < plan.features.length - 1 && (
                          <span className="text-stone-300 mx-1.5">·</span>
                        )}
                      </span>
                    ))}
                  </p>
                </div>
              </div>

              <div className="flex items-center justify-between mt-6 pt-6 border-t border-stone-200">
                <span className="text-xs text-stone-400">
                  <span className="uppercase tracking-wider">Access: </span>
                  {plan.access}
                </span>
                <button
                  onClick={() => {
                    const el = document.querySelector('#trial');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="group inline-flex items-center gap-2 text-sm font-medium text-charcoal hover:text-sage-500 transition-colors duration-300"
                >
                  Choose {plan.name}
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        <p className="text-stone-400 text-xs font-light mt-8">
          All memberships require a 3-month minimum commitment. No joining fee.
        </p>
      </div>
    </section>
  );
}
