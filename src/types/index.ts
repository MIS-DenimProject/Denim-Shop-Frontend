/**
 * Type definitions for the Denim Factory MIS Management System
 */

// Navigation Types
export type NavigationItemId = 
  | 'dashboard' 
  | 'orders' 
  | 'productions' 
  | 'inventory' 
  | 'quality-control' 
  | 'reports';

export interface NavigationItem {
  id: NavigationItemId;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
}

// User Types
export interface User {
  id: string;
  name: string;
  role: string;
  email?: string;
  avatar?: string;
}

// Sidebar Types
export interface SidebarConfig {
  user?: User;
  activeItem?: NavigationItemId;
  onNavigate?: (itemId: NavigationItemId) => void;
  onLogout?: () => void;
}

// Color Types
export type ColorName = 
  | 'white' 
  | 'black' 
  | 'blue' 
  | 'blueDark'
  | 'gray50'
  | 'gray100'
  | 'gray200'
  | 'gray300'
  | 'gray400'
  | 'gray500'
  | 'gray600'
  | 'gray700'
  | 'gray800'
  | 'gray900';
