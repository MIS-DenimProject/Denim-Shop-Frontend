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
  defaultCollapsed?: boolean;
  onCollapsedChange?: (collapsed: boolean) => void;
}

export interface SidebarLogoProps {
  companyName?: string;
  subtitle?: string;
  className?: string;
  isCollapsed?: boolean;
}

export interface SidebarFooterProps {
  userName?: string;
  userRole?: string;
  userAvatar?: string;
  onLogout?: () => void;
  className?: string;
  isCollapsed?: boolean;
}

export interface SidebarNavigationProps {
  items: NavItem[];
  onNavigate?: (itemId: string) => void;
  activeItemId?: string;
  className?: string;
  isCollapsed?: boolean;
}
