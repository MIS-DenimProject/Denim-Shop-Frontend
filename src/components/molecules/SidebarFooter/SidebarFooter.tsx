import { LogOut } from 'lucide-react';
import { UserAvatar } from '@/components/atoms';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface SidebarFooterProps {
  userName?: string;
  userRole?: string;
  userAvatar?: string;
  onLogout?: () => void;
  className?: string;
}

export const SidebarFooter = ({
  userName,
  userRole,
  userAvatar,
  onLogout,
  className,
}: SidebarFooterProps) => {
  return (
    <div
      className={cn(
        'border-t border-[hsl(var(--color-gray-200))] pt-4 px-4 pb-4 space-y-3',
        className
      )}
    >
      <UserAvatar name={userName} role={userRole} avatarUrl={userAvatar} />
      <Button
        variant="outline"
        onClick={onLogout}
        className="w-full justify-start gap-2 text-[hsl(var(--color-gray-700))] hover:text-[hsl(var(--color-gray-900))] hover:bg-[hsl(var(--color-gray-50))] border-[hsl(var(--color-gray-200))]"
      >
        <LogOut className="w-4 h-4" />
        <span>Logout</span>
      </Button>
    </div>
  );
};
