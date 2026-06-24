import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle, AlertCircle, Info, X } from 'lucide-react';

export interface ToastType {
  id: string;
  message: string;
  type: 'success' | 'error' | 'info';
}

interface ToastProps {
  toasts: ToastType[];
  removeToast: (id: string) => void;
}

export const ToastContainer: React.FC<ToastProps> = ({ toasts, removeToast }) => {
  return (
    <div className="fixed bottom-20 right-4 md:bottom-6 md:right-6 z-50 flex flex-col gap-2 max-w-sm w-full pointer-events-none">
      <AnimatePresence>
        {toasts.map((toast) => (
          <ToastItem key={toast.id} toast={toast} onClose={() => removeToast(toast.id)} />
        ))}
      </AnimatePresence>
    </div>
  );
};

const ToastItem: React.FC<{ toast: ToastType; onClose: () => void }> = ({ toast, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 4000);
    return () => clearTimeout(timer);
  }, [onClose]);

  const icons = {
    success: <CheckCircle className="w-5 h-5 text-emerald-500" />,
    error: <AlertCircle className="w-5 h-5 text-rose-500" />,
    info: <Info className="w-5 h-5 text-amber-500" />,
  };

  const borderColors = {
    success: 'border-emerald-500/30 bg-white shadow-emerald-100/10',
    error: 'border-rose-500/30 bg-white shadow-rose-100/10',
    info: 'border-amber-500/30 bg-white shadow-amber-100/10',
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -20, scale: 0.95 }}
      className={`pointer-events-auto flex items-start gap-3 p-4 rounded-xl border bg-white/95 backdrop-blur-md shadow-lg ${borderColors[toast.type]}`}
      id={`toast-${toast.id}`}
    >
      <div className="flex-shrink-0 mt-0.5">{icons[toast.type]}</div>
      <div className="flex-grow">
        <p className="text-sm font-medium text-slate-800 leading-relaxed">{toast.message}</p>
      </div>
      <button
        onClick={onClose}
        className="flex-shrink-0 text-slate-400 hover:text-slate-600 transition-colors p-0.5 rounded-lg hover:bg-slate-100"
        aria-label="Close notification"
      >
        <X className="w-4 h-4" />
      </button>
    </motion.div>
  );
};
