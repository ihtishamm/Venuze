import { NavItem } from '@/types';

// Static demo user used across the dashboard UI now that Clerk auth is removed.
export const mockUser = {
  imageUrl: '',
  fullName: 'Demo User',
  emailAddresses: [{ emailAddress: 'demo@gmail.com' }]
};

//Info: The following data is used for the sidebar navigation and Cmd K bar.
export const navItems: NavItem[] = [
  {
    title: 'Dashboard',
    url: '/dashboard/overview',
    icon: 'dashboard',
    isActive: false,
    shortcut: ['d', 'd'],
    items: [] // Empty array as there are no child items for Dashboard
  },
  {
    title: 'Users',
    url: '/dashboard/users',
    icon: 'user',
    shortcut: ['u', 'u'],
    isActive: false,
    items: [] // No child items
  }
];
