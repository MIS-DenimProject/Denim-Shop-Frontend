/**
 * User-related Component Types
 */

export interface UserAvatarProps {
  name?: string;
  role?: string;
  avatarUrl?: string;
  className?: string;
  isCollapsed?: boolean;
}

export interface LogoutButtonProps {
  onClick?: () => void;
  isCollapsed?: boolean;
}
