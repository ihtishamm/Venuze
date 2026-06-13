'use client';

import { useState } from 'react';
import Image from 'next/image';
import {
  Car,
  ChevronLeft,
  ChevronRight,
  Heart,
  MapPin,
  Maximize2,
  Upload,
  Users
} from 'lucide-react';

import { cn } from '@/lib/utils';
import { type FeaturedVenue } from '@/types/landing-page';

function AmenityBadge({
  icon,
  label
}: {
  icon: React.ReactNode;
  label: string;
}) {
  return (
    <span className='flex h-[28px] shrink-0 items-center gap-[10px] rounded-[999px] bg-[#F9FAFB] px-[7px] py-[5px] text-[10px] leading-[24px] font-medium whitespace-nowrap text-[#364153]'>
      {icon}
      {label}
    </span>
  );
}

export function VenueCard({
  venue,
  bordered = true
}: {
  venue: FeaturedVenue;
  bordered?: boolean;
}) {
  const [current, setCurrent] = useState(0);
  const total = venue.images.length;

  const prev = () => setCurrent((i) => (i - 1 + total) % total);
  const next = () => setCurrent((i) => (i + 1) % total);

  return (
    <div
      className={cn(
        'group flex h-[419px] w-[300px] shrink-0 flex-col overflow-hidden rounded-[10px]',
        bordered && 'border border-[#E5E5E5]'
      )}
    >
      {/* Image carousel */}
      <div className='relative h-[187px] w-full shrink-0'>
        <Image
          key={current}
          src={venue.images[current]}
          alt={`${venue.alt} — photo ${current + 1}`}
          fill
          sizes='300px'
          className='object-cover transition-opacity duration-300'
        />

        {/* Verified badge */}
        {venue.verified && (
          <span className='absolute top-[9px] left-[10px] z-10 rounded-[92.06px] bg-[#00000080] px-[15px] py-[8px] text-[11.05px] leading-[18.41px] font-semibold tracking-[-0.03em] text-white backdrop-blur-[4px]'>
            Verified
          </span>
        )}

        {/* Action icons */}
        <div className='absolute top-[9px] right-[10px] z-10 flex gap-[6px]'>
          <button
            type='button'
            aria-label='Share venue'
            className='flex h-[32px] w-[32px] items-center justify-center rounded-full bg-[#00000080] backdrop-blur-[4px]'
          >
            <Upload className='h-[15px] w-[15px] text-white' />
          </button>
          <button
            type='button'
            aria-label='Save venue'
            className='flex h-[32px] w-[32px] items-center justify-center rounded-full bg-[#00000080] backdrop-blur-[4px]'
          >
            <Heart className='h-[15px] w-[15px] text-white' />
          </button>
        </div>

        {/* Prev / Next — visible on card hover only */}
        {total > 1 && (
          <>
            <button
              type='button'
              onClick={prev}
              aria-label='Previous image'
              className='absolute top-1/2 left-2 z-10 flex h-[28px] w-[28px] -translate-y-1/2 items-center justify-center rounded-full bg-[#00000080] opacity-0 backdrop-blur-[4px] transition-opacity group-hover:opacity-100'
            >
              <ChevronLeft className='h-4 w-4 text-white' />
            </button>
            <button
              type='button'
              onClick={next}
              aria-label='Next image'
              className='absolute top-1/2 right-2 z-10 flex h-[28px] w-[28px] -translate-y-1/2 items-center justify-center rounded-full bg-[#00000080] opacity-0 backdrop-blur-[4px] transition-opacity group-hover:opacity-100'
            >
              <ChevronRight className='h-4 w-4 text-white' />
            </button>
          </>
        )}

        {/* Dots — inactive matches hero (#D9D9D9 / opacity-40), active = white */}
        {total > 1 && (
          <div className='absolute bottom-[10px] left-1/2 z-10 flex -translate-x-1/2 items-center gap-[6px]'>
            {venue.images.map((_, i) => (
              <button
                key={i}
                type='button'
                onClick={() => setCurrent(i)}
                aria-label={`Go to image ${i + 1}`}
                className={cn(
                  'rounded-full transition-all',
                  i === current
                    ? 'h-[6px] w-[6px] bg-white'
                    : 'h-[6px] w-[6px] bg-[#D9D9D9] opacity-40'
                )}
              />
            ))}
          </div>
        )}
      </div>

      {/* White content */}
      <div className='-mt-px flex flex-1 flex-col bg-white px-[17px] pt-[13px] pb-[16px]'>
        {/* Title */}
        <h3 className='line-clamp-2 text-[16px] leading-[24px] font-semibold text-gray-900'>
          {venue.name}
        </h3>

        {/* Location */}
        <div className='mt-[7px] flex items-center gap-[4.5px]'>
          <MapPin className='text-primary h-[14px] w-[14px] shrink-0' />
          <span className='text-primary text-[14px] leading-[21.62px] font-medium'>
            {venue.location}
          </span>
        </div>

        {/* Amenity badges */}
        <div className='mt-[8px] flex h-[28px] w-[253px] items-center gap-[5px]'>
          <AmenityBadge
            icon={<Users className='h-4 w-4 stroke-[1.5] text-[#364153]' />}
            label={venue.capacity}
          />
          <AmenityBadge
            icon={<Maximize2 className='h-4 w-4 stroke-[1.5] text-[#364153]' />}
            label={venue.size}
          />
          <AmenityBadge
            icon={<Car className='h-4 w-4 stroke-[1.5] text-[#364153]' />}
            label={venue.parking}
          />
        </div>

        {venue.moreAmenities !== undefined && (
          <span className='mt-[4px] flex h-[28px] w-fit items-center rounded-[999px] bg-[#F9FAFB] px-[7px] py-[5px] text-[10px] leading-[24px] font-medium text-[#364153]'>
            +{venue.moreAmenities} more
          </span>
        )}

        {/* Divider */}
        <div className='mt-auto border-t border-[#C5C5C5]' />

        {/* Price + View details */}
        <div className='flex items-center justify-between pt-[10px]'>
          <p className='text-[12px] leading-[24px]'>
            <span className='font-normal text-gray-600'>From </span>
            <span className='font-semibold text-gray-900'>
              {venue.price}/hour
            </span>
          </p>
          <button
            type='button'
            className='border-primary text-primary hover:bg-primary flex h-[32px] shrink-0 items-center justify-center rounded-[10px] border px-[15px] py-[8px] text-[11.05px] leading-[18.41px] font-medium tracking-[-0.03em] whitespace-nowrap transition-colors hover:text-white'
          >
            View details
          </button>
        </div>
      </div>
    </div>
  );
}
