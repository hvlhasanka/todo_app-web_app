import { X, Check } from 'lucide-react';
import { useEffect, useState } from 'react';

export type BannerVariant = 'error' | 'success';

interface BannerProps {
  message: string | null;
  variant: BannerVariant;
  onClose: () => void;
}

export function Banner({ message, variant, onClose }: BannerProps) {
  const [visibleMessage, setVisibleMessage] = useState<string | null>(null);
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    if (message) {
      setVisibleMessage(message);
      setIsClosing(false);
    } else if (visibleMessage) {
      setIsClosing(true);
      const timer = setTimeout(() => {
        setVisibleMessage(null);
        setIsClosing(false);
      }, 400);
      return () => clearTimeout(timer);
    }
  }, [message, visibleMessage]);

  useEffect(() => {
    if (!message) return;
    
    const timer = setTimeout(() => {
      onClose();
    }, 5000);

    return () => clearTimeout(timer);
  }, [message, onClose]);

  if (!visibleMessage) return null;

  const isError = variant === 'error';
  const bgColor = isError ? 'bg-[#ff4d4f]' : 'bg-[#52c41a]';
  const textColor = isError ? 'text-[#ff4d4f]' : 'text-[#52c41a]';
  const icon = isError ? '!' : <Check strokeWidth={3} size={18} />;

  return (
    <div className={`fixed top-4 left-4 right-4 z-50 ${isClosing ? 'animate-slide-up' : 'animate-slide-down'}`} role="alert">
      <div className={`${bgColor} text-white px-6 py-4 shadow-xl flex items-center justify-center rounded-xl relative`}>
        <div className="flex items-center gap-4">
          <div className={`bg-white w-7 h-7 rounded-full flex items-center justify-center font-bold ${textColor} text-lg`}>
            {icon}
          </div>
          <span className="font-semibold text-lg">{message}</span>
        </div>
        <button
          className="text-white hover:opacity-75 transition-opacity absolute right-6 cursor-pointer"
          onClick={onClose}
          aria-label="Close message"
        >
          <X size={24} />
        </button>
      </div>
    </div>
  );
}
