import React, { useState } from 'react';
import { X, User, Lock, Mail, CheckCircle2 } from 'lucide-react';
import { Logo } from './Logo';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AuthModal: React.FC<AuthModalProps> = ({ isOpen, onClose }) => {
  const [mode, setMode] = useState<'login' | 'register'>('login');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [loggedInUser, setLoggedInUser] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoggedInUser(email);
    setTimeout(() => {
      onClose();
    }, 1500);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-md bg-zinc-950 border border-white/20 text-white shadow-2xl p-6 sm:p-8 my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 text-zinc-400 hover:text-white rounded hover:bg-white/10 transition-colors"
          aria-label="Fechar"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="text-center mb-6">
          <Logo size="sm" className="mb-4" />
          <h3 className="text-xl font-heading text-white">
            {mode === 'login' ? 'Iniciar Sessão' : 'Criar uma Conta'}
          </h3>
          <p className="text-xs font-mono text-zinc-400 mt-1">
            {mode === 'login'
              ? 'Acesse seus pedidos e dados salvos'
              : 'Cadastre-se para acompanhar seus drops exclusivos'}
          </p>
        </div>

        {loggedInUser ? (
          <div className="py-6 text-center space-y-3 animate-in zoom-in-95">
            <CheckCircle2 className="w-10 h-10 text-emerald-400 mx-auto" />
            <p className="font-mono text-sm text-white">
              Sessão iniciada como: <strong className="text-zinc-300">{loggedInUser}</strong>
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 font-mono text-xs">
            {mode === 'register' && (
              <div>
                <label className="block text-zinc-400 uppercase tracking-wider mb-1 text-[11px]">
                  Nome Completo
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-zinc-500 absolute left-3 top-3" />
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Seu nome"
                    className="w-full bg-black border border-white/20 pl-9 pr-3 py-2.5 text-white focus:outline-none focus:border-white transition-colors"
                  />
                </div>
              </div>
            )}

            <div>
              <label className="block text-zinc-400 uppercase tracking-wider mb-1 text-[11px]">
                E-mail
              </label>
              <div className="relative">
                <Mail className="w-4 h-4 text-zinc-500 absolute left-3 top-3" />
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="seu@email.com"
                  className="w-full bg-black border border-white/20 pl-9 pr-3 py-2.5 text-white focus:outline-none focus:border-white transition-colors"
                />
              </div>
            </div>

            <div>
              <label className="block text-zinc-400 uppercase tracking-wider mb-1 text-[11px]">
                Senha
              </label>
              <div className="relative">
                <Lock className="w-4 h-4 text-zinc-500 absolute left-3 top-3" />
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full bg-black border border-white/20 pl-9 pr-3 py-2.5 text-white focus:outline-none focus:border-white transition-colors"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-white text-black font-bold uppercase tracking-widest text-xs hover:bg-zinc-200 transition-colors active:scale-98 mt-2"
            >
              {mode === 'login' ? 'Entrar' : 'Cadastrar'}
            </button>

            <div className="pt-4 border-t border-white/10 text-center space-y-2">
              <button
                type="button"
                onClick={() => setMode(mode === 'login' ? 'register' : 'login')}
                className="text-zinc-400 hover:text-white underline text-[11px]"
              >
                {mode === 'login'
                  ? 'Não tem conta? Cadastre-se aqui'
                  : 'Já possui conta? Inicie sessão'}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
