import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { clubImages } from '@/data/brand';
import { useReducedMotion } from '@/hooks/useReducedMotion';

gsap.registerPlugin(ScrollTrigger);

export function TheClub() {
  const reduced = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (reduced || !sectionRef.current || !trackRef.current || !innerRef.current) return;

    const ctx = gsap.context(() => {
      const getDistance = () => {
        return trackRef.current!.scrollWidth - window.innerWidth;
      };

      const tween = gsap.to(trackRef.current, {
        x: () => -getDistance(),
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: () => `+=${getDistance()}`,
          pin: innerRef.current,
          scrub: 0.6,
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            if (progressRef.current) {
              progressRef.current.style.transform = `scaleX(${self.progress})`;
            }
          },
        },
      });

      const st = tween.scrollTrigger!;

      const onResize = () => {
        gsap.set(trackRef.current, { x: 0 });
        st.vars.end = () => `+=${getDistance()}`;
        st.refresh();
      };

      window.addEventListener('resize', onResize);

      return () => {
        window.removeEventListener('resize', onResize);
      };
    }, sectionRef);

    return () => ctx.revert();
  }, [reduced]);

  return (
    <section
      id="club"
      ref={sectionRef}
      className="relative bg-charcoal"
    >
      <div ref={innerRef} className="h-screen overflow-hidden flex flex-col justify-center">
        {/* Header */}
        <div className="container-edge mb-8 md:mb-12">
          <p className="text-xs uppercase tracking-[0.3em] text-stone-500 font-medium mb-4">
            07 — The Club
          </p>
          <h2 className="font-display text-ivory text-display-sm font-light">
            Step inside.
          </h2>
        </div>

        {/* Horizontal image track */}
        <div ref={trackRef} className="flex gap-6 pl-6 md:pl-16 will-change-transform">
          {clubImages.map((img, i) => (
            <div
              key={i}
              className="relative flex-shrink-0 w-[80vw] md:w-[45vw] aspect-[16/10] rounded-sm overflow-hidden group"
            >
              <img
                src={img.src}
                alt={img.caption}
                className="h-full w-full object-cover transition-transform duration-700 ease-out-expo group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <p className="font-display text-ivory text-2xl md:text-3xl font-light mb-1">
                  {img.caption}
                </p>
                <p className="text-ivory/60 text-sm font-light">
                  {img.sub}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Progress indicator */}
        <div className="container-edge mt-8">
          <div className="h-px bg-stone-700 relative overflow-hidden">
            <div
              ref={progressRef}
              className="h-full bg-sage-400 origin-left"
              style={{ transform: reduced ? 'scaleX(1)' : 'scaleX(0)' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
