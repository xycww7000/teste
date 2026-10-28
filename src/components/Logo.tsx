import React from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export const Logo: React.FC<LogoProps> = ({ className = '', size = 'md' }) => {
  const sizeClasses = {
    sm: 'h-6 text-xl',
    md: 'h-10 text-3xl md:text-4xl',
    lg: 'h-14 text-4xl md:text-5xl',
    xl: 'h-20 text-5xl md:text-6xl',
  };

  return (
    <div className={`inline-flex flex-col items-center justify-center select-none group cursor-pointer ${className}`}>
      <div className="relative flex items-center justify-center">
        {/* Streetwear underground stylized wordmark */}
        <span 
          className={`font-black tracking-[-0.08em] text-white transition-all duration-300 group-hover:tracking-wider ${sizeClasses[size]}`}
          style={{
            fontFamily: '"Syne", "Playfair Display", sans-serif',
            textTransform: 'uppercase',
            letterSpacing: '-0.06em',
            textShadow: '0 0 20px rgba(255,255,255,0.2)'
          }}
        >
          cia<span className="text-zinc-400 group-hover:text-white transition-colors duration-300">4</span>w
        </span>
        
        {/* Subtle decorative gothic / underground accent line */}
        <span className="absolute -bottom-1 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-zinc-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      <span 
        className="text-[8px] md:text-[9px] uppercase tracking-[0.35em] text-zinc-400 font-mono mt-0.5 opacity-80"
        style={{ letterSpacing: '0.38em' }}
      >
        4mylife • 4mylove
      </span>
    </div>
  );
};
