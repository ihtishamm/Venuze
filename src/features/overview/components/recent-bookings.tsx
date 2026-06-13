import { Badge } from '@/components/ui/badge';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { recentBookings, type BookingStatus } from '../data';

const statusStyles: Record<BookingStatus, string> = {
  confirmed:
    'border-transparent bg-emerald-100 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-400',
  pending:
    'border-transparent bg-amber-100 text-amber-700 dark:bg-amber-950 dark:text-amber-400',
  completed:
    'border-transparent bg-muted text-muted-foreground',
  cancelled:
    'border-transparent bg-red-100 text-red-700 dark:bg-red-950 dark:text-red-400'
};

export function RecentBookings() {
  return (
    <Card className='h-full'>
      <CardHeader>
        <CardTitle>Recent Bookings</CardTitle>
        <CardDescription>
          Your latest {recentBookings.length} booking requests.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className='divide-border divide-y'>
          {recentBookings.map((booking) => (
            <div
              key={booking.id}
              className='flex items-center justify-between gap-3 py-3 first:pt-0 last:pb-0'
            >
              <div className='min-w-0 space-y-0.5'>
                <p className='truncate text-sm font-medium'>{booking.venue}</p>
                <p className='text-muted-foreground truncate text-xs'>
                  {booking.guest} · {booking.date}
                </p>
              </div>
              <div className='flex shrink-0 flex-col items-end gap-1'>
                <span className='text-sm font-medium tabular-nums'>
                  {booking.amount}
                </span>
                <Badge
                  className={cn('capitalize', statusStyles[booking.status])}
                >
                  {booking.status}
                </Badge>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
