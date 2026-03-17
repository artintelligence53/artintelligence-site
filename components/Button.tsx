import { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary';
  href?: string;
  onClick?: () => void;
  className?: string;
}

export default function Button({ children, variant = 'primary', href, onClick, className = '' }: ButtonProps) {
  const baseStyles = 'inline-block font-bold px-8 py-4 rounded-xl transition-all text-lg';

  const variantStyles = {
    primary: 'bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-600 hover:to-gold-700 text-black glow-hover',
    secondary: 'glass text-white hover:border-gold-500/50 glow-hover',
  };

  const combinedStyles = `${baseStyles} ${variantStyles[variant]} ${className}`;

  if (href) {
    return (
      <a
        href={href}
        target={href.startsWith('http') ? '_blank' : undefined}
        rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
        className={combinedStyles}
      >
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={combinedStyles}>
      {children}
    </button>
  );
}
