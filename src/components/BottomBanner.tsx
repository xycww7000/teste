import React from 'react';

export const BottomBanner: React.FC = () => {
  return (
    <section className="relative w-full overflow-hidden bg-black py-4 border-t border-white/10 select-none">
      <div className="mx-auto flex w-full items-center justify-center px-4 sm:px-6 lg:px-8">
        <img
          src="/images/logo-vermelha.png"
          alt="Logo cia4w em vermelho"
          loading="lazy"
          className="block h-auto w-full max-w-[720px] object-contain"
        />
      </div>
    </section>
  );
};
