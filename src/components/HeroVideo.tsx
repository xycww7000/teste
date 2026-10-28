import React from 'react';

export const HeroVideo: React.FC = () => {
  return (
    <section className="relative w-full overflow-hidden bg-black select-none border-b border-white/10">
      <div className="relative mx-auto flex w-full items-center justify-center px-4 py-5 sm:py-8 md:py-10">
        <img
          src="/images/logo-vermelha.png"
          alt="Logo cia4w em vermelho"
          fetchPriority="high"
          className="block h-auto w-full max-w-[720px] object-contain"
        />
      </div>
    </section>
  );
};
