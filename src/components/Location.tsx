import { motion } from 'framer-motion';
import { MapPin, Clock, Phone, Mail, Car, Train } from 'lucide-react';
import { brand } from '@/data/brand';
import { useReducedMotion } from '@/hooks/useReducedMotion';

export function Location() {
  const reduced = useReducedMotion();

  return (
    <section className="relative bg-ivory py-24 md:py-40 bg-grain">
      <div className="container-edge">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
          {/* Left: info */}
          <div className="lg:col-span-5">
            <p className="section-label mb-4">11 — Location</p>
            <h2 className="font-display text-charcoal text-display-sm font-light mb-10">
              Find us.
            </h2>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <MapPin size={18} className="text-sage-500 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-xs uppercase tracking-wider text-stone-400 mb-1">Address</p>
                  <p className="text-charcoal text-sm font-light leading-relaxed">
                    {brand.address}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Clock size={18} className="text-sage-500 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-xs uppercase tracking-wider text-stone-400 mb-1">Hours</p>
                  {brand.hours.map((h) => (
                    <p key={h.day} className="text-charcoal text-sm font-light leading-relaxed">
                      <span className="text-stone-500">{h.day}</span> — {h.time}
                    </p>
                  ))}
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Phone size={18} className="text-sage-500 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-xs uppercase tracking-wider text-stone-400 mb-1">Phone</p>
                  <a
                    href={`tel:${brand.phone.replace(/[^0-9+]/g, '')}`}
                    className="text-charcoal text-sm font-light hover:text-sage-500 transition-colors"
                  >
                    {brand.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Mail size={18} className="text-sage-500 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-xs uppercase tracking-wider text-stone-400 mb-1">Email</p>
                  <a
                    href={`mailto:${brand.email}`}
                    className="text-charcoal text-sm font-light hover:text-sage-500 transition-colors"
                  >
                    {brand.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Car size={18} className="text-sage-500 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-xs uppercase tracking-wider text-stone-400 mb-1">Parking</p>
                  <p className="text-charcoal text-sm font-light leading-relaxed max-w-sm">
                    {brand.parking}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Train size={18} className="text-sage-500 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-xs uppercase tracking-wider text-stone-400 mb-1">Public Transport</p>
                  <p className="text-charcoal text-sm font-light leading-relaxed max-w-sm">
                    {brand.transport}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: visual map treatment */}
          <div className="lg:col-span-7">
            <motion.div
              initial={reduced ? {} : { opacity: 0, scale: 1.05 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="relative aspect-[4/3] md:aspect-[5/4] rounded-sm overflow-hidden bg-stone-200"
            >
              {/* Stylized map placeholder */}
              <div className="absolute inset-0 bg-gradient-to-br from-stone-100 to-stone-200">
                {/* Grid pattern suggesting streets */}
                <div
                  className="absolute inset-0 opacity-30"
                  style={{
                    backgroundImage: `
                      linear-gradient(to right, #C9C5BA 1px, transparent 1px),
                      linear-gradient(to bottom, #C9C5BA 1px, transparent 1px)
                    `,
                    backgroundSize: '60px 60px',
                  }}
                />
                {/* Diagonal "streets" */}
                <div className="absolute top-0 left-0 w-full h-1/2 border-b-2 border-stone-300 transform -rotate-12 origin-top-left scale-150" />
                <div className="absolute top-1/3 left-0 w-full h-px bg-stone-300" />
                <div className="absolute top-2/3 left-0 w-full h-px bg-stone-300" />

                {/* Location marker */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                  <div className="relative">
                    <div className="absolute -inset-4 rounded-full bg-sage-400/20 animate-ping" />
                    <div className="relative w-12 h-12 rounded-full bg-sage-500 flex items-center justify-center shadow-lg">
                      <MapPin size={24} className="text-ivory" />
                    </div>
                  </div>
                  <div className="mt-4 bg-ivory px-4 py-2 rounded-sm shadow-md">
                    <p className="font-display text-charcoal text-sm font-medium whitespace-nowrap">
                      FORMA
                    </p>
                    <p className="text-stone-400 text-xs whitespace-nowrap">
                      {brand.address.split(',')[0]}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
