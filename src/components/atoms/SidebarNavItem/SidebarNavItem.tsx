import type { LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

interface SidebarNavItemProps {
  icon: LucideIcon;
  label: string;
  isActive?: boolean;
  onClick?: () => void;
  className?: string;
}

export const SidebarNavItem = ({
  icon: Icon,
  label,
  isActive = false,
  onClick,
  className,
}: SidebarNavItemProps) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        'flex items-center gap-3 w-full px-4 py-3 text-sm font-medium transition-all rounded-lg group',
        'hover:bg-[hsl(var(--color-gray-50))]',
        isActive
          ? 'bg-[hsl(var(--color-blue))] text-white hover:bg-[hsl(var(--color-blue-dark))]'
          : 'text-[hsl(var(--color-gray-700))]',
        className
      )}
    >
      <Icon
        className={cn(
          'w-5 h-5 transition-colors',
          isActive ? 'text-white' : 'text-[hsl(var(--color-gray-500))] group-hover:text-[hsl(var(--color-blue))]'
        )}
      />
      <span>{label}</span>
    </button>
  );
};
