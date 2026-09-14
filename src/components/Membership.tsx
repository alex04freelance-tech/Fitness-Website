import { motion } from 'framer-motion';
import { Check, ArrowRight } from 'lucide-react';
import { memberships } from '@/data/brand';
import { useReducedMotion } from '@/hooks/useReducedMotion';

export function Membership() {
  const reduced = useReducedMotion();

  return (
    <section id="membership" className="relative bg-warm py-24 md:py-40 bg-grain">
      <div className="container-edge">
        {/* Header */}
        <div className="mb-12 md:mb-20 text-center">
          <p className="section-label mb-4">11 — Membership</p>
          <h2 className="font-display text-charcoal text-display-sm font-light">
            Choose your level.
          </h2>
          <p className="text-stone-500 text-sm font-light max-w-md mx-auto mt-6 leading-relaxed">
            Every membership includes full access to our training floor, recovery areas,
            and locker rooms. Upgrade anytime.
          </p>
        </div>

        {/* Membership tiers — editorial, not SaaS */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-stone-200">
          {memberships.map((plan, i) => (
            <motion.div
              key={plan.id}
              initial={reduced ? {} : { opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className={`relative p-8 md:p-10 flex flex-col ${
                plan.highlighted ? 'bg-charcoal' : 'bg-ivory'
              }`}
            >
              {plan.highlighted && (
                <span className="absolute top-6 right-6 px-3 py-1 bg-sage-400 text-ivory text-[10px] uppercase tracking-wider rounded-full font-medium">
                  Popular
                </span>
              )}

              <h3
                className={`font-display text-2xl font-medium mb-2 ${
                  plan.highlighted ? 'text-ivory' : 'text-charcoal'
                }`}
              >
                {plan.name}
              </h3>
              <p
                className={`text-xs font-light mb-6 leading-relaxed ${
                  plan.highlighted ? 'text-ivory/60' : 'text-stone-500'
                }`}
              >
                {plan.tagline}
              </p>

              <div className="mb-8">
                <span
                  className={`font-display text-4xl font-light ${
                    plan.highlighted ? 'text-ivory' : 'text-charcoal'
                  }`}
                >
                  {plan.price}
                </span>
                <span
                  className={`text-xs ml-2 ${
                    plan.highlighted ? 'text-ivory/50' : 'text-stone-400'
                  }`}
                >
                  {plan.frequency}
                </span>
              </div>

              <ul className="space-y-3 mb-8 flex-1">
                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className={`flex items-start gap-2.5 text-sm font-light ${
                      plan.highlighted ? 'text-ivory/80' : 'text-stone-600'
                    }`}
                  >
                    <Check
                      size={14}
                      className={`mt-0.5 flex-shrink-0 ${
                        plan.highlighted ? 'text-sage-300' : 'text-sage-500'
                      }`}
                    />
                    {feature}
                  </li>
                ))}
              </ul>

              <div
                className={`text-xs mb-6 pb-6 border-b ${
                  plan.highlighted ? 'border-ivory/15 text-ivory/50' : 'border-stone-200 text-stone-400'
                }`}
              >
                <span className="uppercase tracking-wider">Access: </span>
                {plan.access}
              </div>

              <button
                onClick={() => {
                  const el = document.querySelector('#trial');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className={`group inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-sm font-medium tracking-wide transition-all duration-300 ${
                  plan.highlighted
                    ? 'bg-sage-400 text-ivory hover:bg-sage-300'
                    : 'bg-charcoal text-ivory hover:bg-sage-500'
                }`}
              >
                Choose {plan.name}
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </motion.div>
          ))}
        </div>

        <p className="text-center text-stone-400 text-xs font-light mt-8">
          All memberships require a 3-month minimum commitment. No joining fee.
        </p>
      </div>
    </section>
  );
}
