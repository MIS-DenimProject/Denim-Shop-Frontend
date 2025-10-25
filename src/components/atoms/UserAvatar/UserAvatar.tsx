import { User } from 'lucide-react';
import { cn } from '@/lib/utils';

interface UserAvatarProps {
  name?: string;
  role?: string;
  avatarUrl?: string;
  className?: string;
}

export const UserAvatar = ({ name, role, avatarUrl, className }: UserAvatarProps) => {
  const initials = name
    ? name
        .split(' ')
        .map((n) => n[0])
        .join('')
        .toUpperCase()
        .slice(0, 2)
    : '';

  return (
    <div className={cn('flex items-center gap-3', className)}>
      <div className="flex items-center justify-center w-10 h-10 rounded-full bg-[hsl(var(--color-gray-100))] text-[hsl(var(--color-gray-600))] overflow-hidden">
        {avatarUrl ? (
          <img src={avatarUrl} alt={name || 'User'} className="w-full h-full object-cover" />
        ) : initials ? (
          <span className="text-sm font-semibold">{initials}</span>
        ) : (
          <User className="w-5 h-5" />
        )}
      </div>
      <div className="flex flex-col flex-1 min-w-0">
        <p className="text-sm font-semibold text-[hsl(var(--color-gray-900))] truncate">
          {name || 'Guest User'}
        </p>
        <p className="text-xs text-[hsl(var(--color-gray-500))] truncate">
          {role || 'Administrator'}
        </p>
      </div>
    </div>
  );
};
