import { Instagram, Youtube } from 'lucide-react';
import { brand } from '@/data/brand';

const footerLinks = {
  Navigation: [
    { label: 'Classes', href: '#classes' },
    { label: 'Schedule', href: '#schedule' },
    { label: 'Trainers', href: '#trainers' },
    { label: 'The Club', href: '#club' },
  ],
  Memberships: [
    { label: 'Essential', href: '#membership' },
    { label: 'Performance', href: '#membership' },
    { label: 'Complete', href: '#membership' },
    { label: 'Private', href: '#membership' },
  ],
  Contact: [
    { label: 'Visit Us', href: '#trial' },
    { label: 'Free Trial', href: '#trial' },
    { label: 'Location', href: '#location' },
  ],
};

export function Footer() {
  const handleNav = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-graphite text-ivory/70 py-16 md:py-24">
      <div className="container-edge">
        <div className="grid lg:grid-cols-12 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-4">
            <h3 className="font-display text-ivory text-3xl font-medium mb-3">
              {brand.name}
            </h3>
            <p className="text-ivory/50 text-sm font-light mb-6 max-w-xs leading-relaxed">
              {brand.subtitle}
            </p>
            <p className="text-ivory/40 text-sm font-light italic max-w-xs">
              {brand.tagline}
            </p>

            <div className="flex gap-3 mt-8">
              <a
                href={brand.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-ivory/15 flex items-center justify-center hover:bg-ivory/10 transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={16} />
              </a>
              <a
                href={brand.social.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-ivory/15 flex items-center justify-center hover:bg-ivory/10 transition-colors"
                aria-label="YouTube"
              >
                <Youtube size={16} />
              </a>
            </div>
          </div>

          {/* Link columns */}
          <div className="lg:col-span-6 grid grid-cols-3 gap-8">
            {Object.entries(footerLinks).map(([heading, links]) => (
              <div key={heading}>
                <p className="text-ivory/40 text-xs uppercase tracking-[0.2em] font-medium mb-4">
                  {heading}
                </p>
                <ul className="space-y-2.5">
                  {links.map((link) => (
                    <li key={link.label}>
                      <button
                        onClick={() => handleNav(link.href)}
                        className="text-sm font-light hover:text-sage-300 transition-colors"
                      >
                        {link.label}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Contact summary */}
          <div className="lg:col-span-2">
            <p className="text-ivory/40 text-xs uppercase tracking-[0.2em] font-medium mb-4">
              Reach Us
            </p>
            <a
              href={`mailto:${brand.email}`}
              className="block text-sm font-light hover:text-sage-300 transition-colors mb-2"
            >
              {brand.email}
            </a>
            <a
              href={`tel:${brand.phone.replace(/[^0-9+]/g, '')}`}
              className="block text-sm font-light hover:text-sage-300 transition-colors"
            >
              {brand.phone}
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-ivory/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-ivory/40 text-xs font-light">
            © {new Date().getFullYear()} {brand.name}. All rights reserved.
          </p>
          <div className="flex gap-6">
            <button className="text-ivory/40 text-xs font-light hover:text-sage-300 transition-colors">
              Privacy
            </button>
            <button className="text-ivory/40 text-xs font-light hover:text-sage-300 transition-colors">
              Cookie Policy
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
