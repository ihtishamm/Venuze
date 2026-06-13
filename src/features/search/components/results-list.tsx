'use client';

import Image from 'next/image';

import { VenueCard } from '@/features/landing/components/venue-card';
import { type SearchVenue } from '@/types/search';

export function ResultsList({ venues }: { venues: SearchVenue[] }) {
  if (venues.length === 0) {
    return (
      <div className='flex flex-col items-center justify-center gap-4 py-24 text-center'>
        <Image
          src='/empty.svg'
          alt=''
          width={189}
          height={127}
          className='h-auto w-[189px]'
        />
        <div className='space-y-1'>
          <p className='text-[16px] font-semibold text-black'>
            No data found for your search.
          </p>
          <p className='max-w-[280px] text-[14px] text-[#6B7280]'>
            Explore other options or clear filters to see more results.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className='flex flex-wrap justify-center gap-6 sm:justify-start'>
      {venues.map((venue) => (
        <VenueCard key={venue.id} venue={venue} />
      ))}
    </div>
  );
}
