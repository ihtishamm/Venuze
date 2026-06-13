import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/components/ui/card';
import { IconStarFilled } from '@tabler/icons-react';
import { popularVenues } from '../data';

/** Two-letter initials from a venue name (e.g. "The Glass Loft" → "GL"). */
function initials(name: string) {
  return name
    .replace(/^the\s+/i, '')
    .split(' ')
    .slice(0, 2)
    .map((word) => word[0])
    .join('')
    .toUpperCase();
}

export function PopularVenues() {
  return (
    <Card className='h-full'>
      <CardHeader>
        <CardTitle>Popular Venues</CardTitle>
        <CardDescription>Your most-booked listings this month.</CardDescription>
      </CardHeader>
      <CardContent>
        <div className='space-y-5'>
          {popularVenues.map((venue) => (
            <div key={venue.id} className='flex items-center gap-3'>
              <Avatar className='size-9 rounded-lg'>
                <AvatarFallback className='bg-primary/10 text-primary rounded-lg text-xs font-medium'>
                  {initials(venue.name)}
                </AvatarFallback>
              </Avatar>
              <div className='min-w-0 flex-1 space-y-0.5'>
                <p className='truncate text-sm font-medium'>{venue.name}</p>
                <p className='text-muted-foreground truncate text-xs'>
                  {venue.location}
                </p>
              </div>
              <div className='flex shrink-0 flex-col items-end gap-1'>
                <span className='flex items-center gap-1 text-sm font-medium tabular-nums'>
                  <IconStarFilled className='size-3.5 text-amber-500' />
                  {venue.rating.toFixed(1)}
                </span>
                <span className='text-muted-foreground text-xs'>
                  {venue.bookings} bookings
                </span>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
