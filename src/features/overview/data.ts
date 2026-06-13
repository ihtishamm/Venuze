import type { ComponentType } from 'react';
import {
  IconBuildingStore,
  IconCalendarCheck,
  IconClockHour4,
  IconCoin
} from '@tabler/icons-react';

/** Icon component that accepts a `className` (covers all @tabler icons). */
type IconType = ComponentType<{ className?: string }>;

export interface OverviewStat {
  id: string;
  label: string;
  value: string;
  /** Period-over-period change, pre-formatted for display. */
  delta: string;
  trend: 'up' | 'down';
  hint: string;
  icon: IconType;
}

/** Headline metrics for the host dashboard. Dummy data — wired to real
 *  endpoints once the bookings API exists. */
export const overviewStats: OverviewStat[] = [
  {
    id: 'listings',
    label: 'Active Listings',
    value: '24',
    delta: '+3',
    trend: 'up',
    hint: '3 new venues this month',
    icon: IconBuildingStore
  },
  {
    id: 'bookings',
    label: 'Active Bookings',
    value: '128',
    delta: '+12.5%',
    trend: 'up',
    hint: 'Up from 114 last month',
    icon: IconCalendarCheck
  },
  {
    id: 'pending',
    label: 'Pending Requests',
    value: '7',
    delta: '-2',
    trend: 'down',
    hint: 'Awaiting your response',
    icon: IconClockHour4
  },
  {
    id: 'earnings',
    label: 'Total Earnings',
    value: '$48,250',
    delta: '+8.2%',
    trend: 'up',
    hint: 'Last 30 days',
    icon: IconCoin
  }
];

export type BookingStatus = 'confirmed' | 'pending' | 'completed' | 'cancelled';

export interface RecentBooking {
  id: string;
  venue: string;
  guest: string;
  /** Pre-formatted booking date. */
  date: string;
  amount: string;
  status: BookingStatus;
}

export const recentBookings: RecentBooking[] = [
  {
    id: 'BK-1042',
    venue: 'The Glass Loft',
    guest: 'Olivia Martin',
    date: 'Jun 14, 2026',
    amount: '$1,200',
    status: 'confirmed'
  },
  {
    id: 'BK-1041',
    venue: 'Riverside Warehouse',
    guest: 'Jackson Lee',
    date: 'Jun 13, 2026',
    amount: '$2,450',
    status: 'pending'
  },
  {
    id: 'BK-1039',
    venue: 'Skyline Rooftop',
    guest: 'Isabella Nguyen',
    date: 'Jun 11, 2026',
    amount: '$3,100',
    status: 'confirmed'
  },
  {
    id: 'BK-1035',
    venue: 'The Art Gallery',
    guest: 'William Kim',
    date: 'Jun 09, 2026',
    amount: '$980',
    status: 'completed'
  },
  {
    id: 'BK-1031',
    venue: 'Downtown Studio',
    guest: 'Sofia Davis',
    date: 'Jun 07, 2026',
    amount: '$640',
    status: 'cancelled'
  }
];

export interface PopularVenue {
  id: string;
  name: string;
  location: string;
  bookings: number;
  rating: number;
}

export const popularVenues: PopularVenue[] = [
  {
    id: 'v1',
    name: 'Skyline Rooftop',
    location: 'New York, NY',
    bookings: 42,
    rating: 4.9
  },
  {
    id: 'v2',
    name: 'The Glass Loft',
    location: 'Brooklyn, NY',
    bookings: 36,
    rating: 4.8
  },
  {
    id: 'v3',
    name: 'Riverside Warehouse',
    location: 'Jersey City, NJ',
    bookings: 28,
    rating: 4.7
  },
  {
    id: 'v4',
    name: 'The Art Gallery',
    location: 'Manhattan, NY',
    bookings: 21,
    rating: 4.6
  }
];
