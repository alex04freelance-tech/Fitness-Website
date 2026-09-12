import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { brand } from '@/data/brand';

const navLinks = [
  { label: 'Classes', href: '#classes' },
  { label: 'Schedule', href: '#schedule' },
  { label: 'Trainers', href: '#trainers' },
  { label: 'The Club', href: '#club' },
  { label: 'Membership', href: '#membership' },
  { label: 'Visit', href: '#trial' },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out-expo ${
          scrolled
            ? 'bg-ivory/95 backdrop-blur-md py-3 shadow-[0_1px_0_0_rgba(0,0,0,0.06)]'
            : 'bg-transparent py-5'
        }`}
      >
        <nav className="container-edge flex items-center justify-between">
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className={`font-display text-2xl font-medium tracking-tight transition-colors duration-500 ${
              scrolled ? 'text-charcoal' : 'text-ivory'
            }`}
          >
            {brand.name}
          </a>

          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className={`text-sm font-light tracking-wide transition-colors duration-300 hover:opacity-60 ${
                  scrolled ? 'text-charcoal' : 'text-ivory/90'
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={() => handleNavClick('#trial')}
              className={`hidden lg:inline-flex px-5 py-2.5 text-sm font-medium tracking-wide rounded-full transition-all duration-300 ${
                scrolled
                  ? 'bg-charcoal text-ivory hover:bg-sage-500'
                  : 'bg-ivory/15 text-ivory backdrop-blur-sm border border-ivory/25 hover:bg-ivory/25'
              }`}
            >
              Join
            </button>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className={`lg:hidden ${scrolled ? 'text-charcoal' : 'text-ivory'}`}
              aria-label="Toggle menu"
              aria-expanded={menuOpen}
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 bg-charcoal/98 backdrop-blur-xl flex flex-col items-center justify-center gap-8 lg:hidden">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              className="font-display text-3xl text-ivory font-light tracking-wide hover:text-sage-300 transition-colors"
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => handleNavClick('#trial')}
            className="mt-4 px-8 py-3 bg-sage-400 text-ivory rounded-full text-sm font-medium tracking-wide"
          >
            Join FORMA
          </button>
        </div>
      )}
    </>
  );
}
