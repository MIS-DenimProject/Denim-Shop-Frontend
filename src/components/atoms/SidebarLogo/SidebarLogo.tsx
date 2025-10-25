import { Factory } from 'lucide-react';
import { cn } from '@/lib/utils';

interface SidebarLogoProps {
  className?: string;
}

export const SidebarLogo = ({ className }: SidebarLogoProps) => {
  return (
    <div className={cn('flex items-center gap-3 px-4 py-6', className)}>
      <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-[hsl(var(--color-blue))] text-white">
        <Factory className="w-6 h-6" />
      </div>
      <div className="flex flex-col">
        <h1 className="text-sm font-bold text-[hsl(var(--color-gray-900))] leading-tight">
          Denim Factory MIS
        </h1>
        <p className="text-xs font-medium text-[hsl(var(--color-gray-500))]">
          Management System
        </p>
      </div>
    </div>
  );
};
