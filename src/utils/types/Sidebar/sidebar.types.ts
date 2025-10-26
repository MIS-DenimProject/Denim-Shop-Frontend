/**
 * Sidebar Component Types
 */

import type { NavItem } from '../Navigation/navigation.types';

export interface SidebarProps {
  userName?: string;
  userRole?: string;
  userAvatar?: string;
  onNavigate?: (itemId: string) => void;
  onLogout?: () => void;
  activeItemId?: string;
  className?: string;
}

export interface SidebarLogoProps {
  companyName?: string;
  subtitle?: string;
  className?: string;
}

export interface SidebarFooterProps {
  userName?: string;
  userRole?: string;
  userAvatar?: string;
  onLogout?: () => void;
  className?: string;
}

export interface SidebarNavigationProps {
  items: NavItem[];
  onNavigate?: (itemId: string) => void;
  activeItemId?: string;
  className?: string;
}
