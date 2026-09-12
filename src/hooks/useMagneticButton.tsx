import { useRef, type ReactNode } from 'react';
import { useReducedMotion } from './useReducedMotion';

type MagneticButtonProps = {
  children: ReactNode;
  className?: string;
  strength?: number;
  onClick?: () => void;
  href?: string;
  ariaLabel?: string;
};

export function MagneticButton({
  children,
  className = '',
  strength = 0.3,
  onClick,
  href,
  ariaLabel,
}: MagneticButtonProps) {
  const ref = useRef<HTMLAnchorElement>(null);
  const reduced = useReducedMotion();

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (reduced || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    ref.current.style.transform = `translate(${x * strength}px, ${y * strength}px)`;
  };

  const handleMouseLeave = () => {
    if (!ref.current) return;
    ref.current.style.transform = 'translate(0, 0)';
  };

  return (
    <a
      ref={ref}
      href={href}
      onClick={onClick}
      aria-label={ariaLabel}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`inline-flex items-center justify-center transition-transform duration-500 ease-out-expo ${className}`}
      style={{ transition: 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)' }}
    >
      {children}
    </a>
  );
}
