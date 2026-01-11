import React from 'react';
import QRCode from 'react-qr-code';
import { X } from 'lucide-react';

interface QRCodeModalProps {
  isOpen: boolean;
  onClose: () => void;
  url: string;
}

export const QRCodeModal: React.FC<QRCodeModalProps> = ({ isOpen, onClose, url }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-black/90 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-zinc-900 border border-zinc-800 p-6 rounded-2xl shadow-2xl max-w-xs w-full relative transform scale-100 transition-transform">
        <button 
          onClick={onClose}
          className="absolute top-3 right-3 p-2 text-zinc-500 hover:text-zinc-300 transition-colors bg-zinc-800/50 rounded-full"
        >
          <X size={20} />
        </button>
        
        <div className="flex flex-col items-center pt-2">
          <h2 className="text-xl font-heading font-bold text-zinc-100 text-center mb-1">Acesse o Cardápio</h2>
          <p className="text-center text-zinc-500 text-sm mb-6">Escaneie para abrir no seu celular</p>
          
          <div className="p-4 bg-white rounded-xl shadow-lg mb-6">
            <QRCode value={url} size={180} />
          </div>
          
          <button 
            onClick={onClose}
            className="w-full bg-zinc-800 hover:bg-zinc-700 text-zinc-200 font-medium py-3 px-4 rounded-xl transition-colors border border-zinc-700/50"
          >
            Fechar
          </button>
        </div>
      </div>
    </div>
  );
};