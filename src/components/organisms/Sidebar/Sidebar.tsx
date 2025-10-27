import { SidebarLogo,SidebarNavigation, SidebarFooter } from '@/components';
import { cn } from '@/utils';
import { LayoutDashboard, ShoppingCart, Factory, Package, ClipboardCheck, FileText, Menu, X } from 'lucide-react';
import type { SidebarProps, NavItem } from '@/utils';
import type { FC } from 'react';
import { useState, useEffect, useCallback, useRef } from 'react';

const navigationItems: NavItem[] = [
  { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { id: 'orders', label: 'Orders', icon: ShoppingCart },
  { id: 'productions', label: 'Productions', icon: Factory },
  { id: 'inventory', label: 'Inventory', icon: Package },
  { id: 'quality-control', label: 'Quality Control', icon: ClipboardCheck },
  { id: 'reports', label: 'Reports', icon: FileText },
];

const companyName = 'DenimTech';
const subtitle = 'Enterprise MIS';

const MOBILE_BREAKPOINT = 768;
const COLLAPSED_WIDTH = 'w-[4.5rem]';
const EXPANDED_WIDTH = 'w-64';

export const Sidebar: FC<SidebarProps> = ({
  userName,
  userRole,
  userAvatar,
  onNavigate,
  onLogout,
  activeItemId,
  className,
  defaultCollapsed = false,
  onCollapsedChange,
}: SidebarProps) => {
  const [isCollapsed, setIsCollapsed] = useState(defaultCollapsed);
  const [isMobile, setIsMobile] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const sidebarRef = useRef<HTMLElement>(null);

  // Check if we're on mobile
  useEffect(() => {
    const checkMobile = () => {
      const mobile = window.innerWidth < MOBILE_BREAKPOINT;
      setIsMobile(mobile);
      
      if (mobile) {
        setIsCollapsed(true);
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Handle escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isMobile && isVisible) {
        setIsVisible(false);
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isMobile, isVisible]);

  // Handle clicks outside sidebar on mobile
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isMobile &&
        isVisible &&
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target as Node)
      ) {
        setIsVisible(false);
      }
    };

    if (isMobile && isVisible) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMobile, isVisible]);

  // Prevent body scroll when mobile sidebar is open
  useEffect(() => {
    if (isMobile && isVisible) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobile, isVisible]);

  const toggleSidebar = useCallback(() => {
    if (isMobile) {
      setIsVisible(prev => !prev);
    } else {
      const newCollapsedState = !isCollapsed;
      setIsCollapsed(newCollapsedState);
      onCollapsedChange?.(newCollapsedState);
    }
  }, [isMobile, isCollapsed, onCollapsedChange]);

  const handleNavigate = useCallback((itemId: string) => {
    onNavigate?.(itemId);
    if (isMobile) {
      setIsVisible(false);
    }
  }, [isMobile, onNavigate]);

  // Notify parent about sidebar state for content padding adjustments
  useEffect(() => {
    // Create a custom event to notify the app about sidebar state
    const sidebarState = {
      isCollapsed: isMobile ? !isVisible : isCollapsed,
      isMobile,
      isVisible,
    };
    
    // Dispatch custom event
    window.dispatchEvent(
      new CustomEvent('sidebar-state-change', { detail: sidebarState })
    );
  }, [isCollapsed, isMobile, isVisible]);

  return (
    <>
      {/* Backdrop for mobile */}
      {isMobile && isVisible && (
        <div
          className="fixed inset-0 bg-black/50 z-40 transition-opacity duration-300 ease-out backdrop-blur-sm"
          onClick={() => setIsVisible(false)}
          aria-hidden="true"
        />
      )}

      {/* Hamburger Menu Button - Only shows when sidebar is hidden */}
      <button
        onClick={toggleSidebar}
        className={cn(
          'fixed top-4 left-4 z-50',
          'w-12 h-12 rounded-xl bg-(--sidebar-bg) border-2 border-sidebar-border',
          'flex items-center justify-center',
          'hover:bg-(--sidebar-hover) active:scale-95',
          'shadow-xl hover:shadow-2xl',
          'focus:outline-none focus:ring-2 focus:ring-(--denim-500) focus:ring-offset-2',
          'transition-all duration-300 ease-out',
          'backdrop-blur-md',
          // Show/hide based on sidebar state
          isMobile
            ? isVisible
              ? 'opacity-0 invisible -translate-x-4 pointer-events-none'
              : 'opacity-100 visible translate-x-0'
            : isCollapsed
            ? 'opacity-100 visible translate-x-0'
            : 'opacity-0 invisible -translate-x-4 pointer-events-none'
        )}
        aria-label={isMobile ? 'Open menu' : 'Open sidebar'}
        aria-expanded={isMobile ? isVisible : !isCollapsed}
      >
        <Menu className="w-6 h-6 text-(--neutral-white)" />
      </button>

      {/* Close Button - Only shows when sidebar is visible on mobile or expanded on desktop */}
      {((isMobile && isVisible) || (!isMobile && !isCollapsed)) && (
        <button
          onClick={toggleSidebar}
          className={cn(
            'fixed z-50',
            'w-10 h-10 rounded-full bg-(--sidebar-bg) border-2 border-sidebar-border',
            'flex items-center justify-center',
            'hover:bg-(--sidebar-hover) active:scale-95',
            'shadow-lg hover:shadow-xl',
            'focus:outline-none focus:ring-2 focus:ring-(--denim-500) focus:ring-offset-2',
            'transition-all duration-300 ease-out',
            isMobile
              ? 'top-4 right-4'
              : 'top-6 left-60'
          )}
          aria-label={isMobile ? 'Close menu' : 'Close sidebar'}
        >
          <X className="w-5 h-5 text-(--neutral-white)" />
        </button>
      )}

      {/* Sidebar */}
      <aside
        ref={sidebarRef}
        className={cn(
          'flex flex-col h-screen bg-(--sidebar-bg) text-white shadow-2xl',
          'transform transition-all duration-300 ease-out',
          isCollapsed ? COLLAPSED_WIDTH : EXPANDED_WIDTH,
          isMobile
            ? cn(
                'fixed top-0 left-0 z-50',
                isVisible
                  ? 'translate-x-0 opacity-100'
                  : '-translate-x-full opacity-0'
              )
            : cn(
                'relative shrink-0',
                isCollapsed
                  ? '-translate-x-full opacity-0 absolute'
                  : 'translate-x-0 opacity-100'
              ),
          className
        )}
        style={{
          willChange: 'transform, opacity',
          backfaceVisibility: 'hidden',
          perspective: '1000px',
        }}
        aria-hidden={isMobile ? !isVisible : isCollapsed}
      >
        <SidebarLogo 
          companyName={companyName} 
          subtitle={subtitle} 
          isCollapsed={isCollapsed}
        />
        <SidebarNavigation 
          items={navigationItems}
          onNavigate={handleNavigate} 
          activeItemId={activeItemId}
          isCollapsed={isCollapsed}
        />
        <SidebarFooter
          userName={userName}
          userRole={userRole}
          userAvatar={userAvatar}
          onLogout={onLogout}
          isCollapsed={isCollapsed}
        />
      </aside>
    </>
  );
};
