/**
 * User-related Component Types
 */

export interface UserAvatarProps {
  name?: string;
  role?: string;
  avatarUrl?: string;
  className?: string;
}

export interface LogoutButtonProps {
  onClick?: () => void;
}
