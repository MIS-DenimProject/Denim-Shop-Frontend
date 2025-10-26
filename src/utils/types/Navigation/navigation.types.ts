/**
 * Navigation Component Types
 */

export interface NavItem {
  id: string;
  label: string;
  icon: React.ElementType;
  badge?: number;
}

export interface NavigationItemProps {
  item: NavItem;
  isActive: boolean;
  onClick: () => void;
}
