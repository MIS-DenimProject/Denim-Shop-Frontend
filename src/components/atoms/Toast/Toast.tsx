import { useEffect, type FC } from "react";
import { CheckCircle2, AlertCircle, X } from "lucide-react";

interface ToastProps {
  message: string;
  type?: "success" | "error" | "info";
  onClose: () => void;
  duration?: number;
}

export const Toast: FC<ToastProps> = ({ 
  message, 
  type = "success", 
  onClose,
  duration = 3000 
}) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, onClose]);

  const styles = {
    success: "bg-green-600 border-green-700",
    error: "bg-red-600 border-red-700",
    info: "bg-blue-600 border-blue-700"
  };

  const icons = {
    success: <CheckCircle2 className="w-5 h-5" />,
    error: <AlertCircle className="w-5 h-5" />,
    info: <CheckCircle2 className="w-5 h-5" />
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-slide-up">
      <div className={`${styles[type]} text-white px-6 py-4 rounded-lg shadow-2xl border-2 flex items-center gap-3 min-w-[320px] max-w-md`}>
        <div className="shrink-0">
          {icons[type]}
        </div>
        <p className="flex-1 font-medium">{message}</p>
        <button
          onClick={onClose}
          className="shrink-0 hover:bg-white/20 rounded p-1 transition-colors duration-200"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
