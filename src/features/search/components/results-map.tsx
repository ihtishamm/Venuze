'use client';

import { useState } from 'react';
import Image from 'next/image';
import { MapPin, Maximize2 } from 'lucide-react';

import { cn } from '@/lib/utils';
import { type SearchVenue } from '@/types/search';

export function ResultsMap({ venues }: { venues: SearchVenue[] }) {
  const [selectedId, setSelectedId] = useState(venues[0]?.id ?? null);
  const selected = venues.find((v) => v.id === selectedId) ?? null;

  return (
    <div className='relative h-full w-full overflow-hidden bg-[#E8EDE6]'>
      {/* Faux map terrain — water, parks, roads — purely decorative */}
      <div
        aria-hidden
        className='absolute inset-0'
        style={{
          backgroundImage: [
            'radial-gradient(circle at 78% 80%, #BFD8E8 0 14%, transparent 14.5%)',
            'radial-gradient(circle at 20% 30%, #D6E6CF 0 10%, transparent 11%)',
            'linear-gradient(115deg, transparent 47%, #F3F4F2 47%, #F3F4F2 53%, transparent 53%)',
            'linear-gradient(75deg, transparent 62%, #F3F4F2 62%, #F3F4F2 66%, transparent 66%)'
          ].join(',')
        }}
      />
      <div
        aria-hidden
        className='absolute inset-0 opacity-[0.5]'
        style={{
          backgroundImage:
            'linear-gradient(#00000008 1px, transparent 1px), linear-gradient(90deg, #00000008 1px, transparent 1px)',
          backgroundSize: '48px 48px'
        }}
      />

      {/* Expand control */}
      <button
        type='button'
        aria-label='Expand map'
        className='absolute top-4 right-4 z-20 flex size-9 items-center justify-center rounded-full bg-white text-black shadow-md'
      >
        <Maximize2 className='size-4' />
      </button>

      {venues.map((venue) => {
        const isActive = venue.id === selectedId;
        return (
          <button
            key={venue.id}
            type='button'
            onClick={() => setSelectedId(venue.id)}
            aria-label={`Show ${venue.name}`}
            className={cn(
              'absolute -translate-x-1/2 -translate-y-full transition-transform hover:scale-110',
              isActive ? 'z-20' : 'z-10'
            )}
            style={{ top: `${venue.pin.top}%`, left: `${venue.pin.left}%` }}
          >
            <Image
              src={isActive ? '/selected_mapicon.svg' : '/mapicon.svg'}
              alt=''
              width={43}
              height={50}
              className='h-auto w-[28px]'
            />
          </button>
        );
      })}

      {/* Popup for the selected venue */}
      {selected && (
        <div
          className='absolute z-20 w-[180px] -translate-x-1/2 -translate-y-[calc(100%+58px)] overflow-hidden rounded-[10px] bg-white shadow-[0px_4px_16px_rgba(0,0,0,0.18)]'
          style={{ top: `${selected.pin.top}%`, left: `${selected.pin.left}%` }}
        >
          <div className='relative h-[96px] w-full'>
            <Image
              src={selected.images[0]}
              alt={selected.alt}
              fill
              sizes='180px'
              className='object-cover'
            />
          </div>
          <div className='p-2.5'>
            <p className='line-clamp-1 text-[13px] font-semibold text-black'>
              {selected.name}
            </p>
            <div className='mt-1 flex items-center gap-1'>
              <MapPin className='text-primary size-3.5 shrink-0' />
              <span className='text-primary text-[12px] font-medium'>
                {selected.location}
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
