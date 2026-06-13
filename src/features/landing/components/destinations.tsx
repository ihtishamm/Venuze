import Image from 'next/image';

import { type Destination } from '@/types/landing-page';

import { landingContent } from '../content';

function DestinationCard({ destination }: { destination: Destination }) {
  return (
    <div className='relative aspect-[409.6/500] overflow-hidden rounded-[20px]'>
      <Image
        src={destination.image}
        alt={destination.alt}
        fill
        sizes='(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 410px'
        className='object-cover'
      />

      {/* Bottom gradient for text legibility */}
      <div className='absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/70 via-black/30 to-transparent' />

      {/* Venue-count badge */}
      <span className='absolute top-[16px] left-[20px] z-10 rounded-[100px] bg-[#0000004D] px-[15px] py-[8px] text-[14px] leading-[20px] font-normal text-white backdrop-blur-[2px]'>
        {destination.venueCount} Venues
      </span>

      {/* Text content */}
      <div className='absolute right-[20px] bottom-[24px] left-[20px] z-10 flex flex-col gap-[5px] text-white'>
        <h3 className='text-[30px] leading-[30px] font-semibold'>
          {destination.name}
        </h3>
        <p className='text-[16px] leading-[24px] font-normal'>
          {destination.description}
        </p>
        <div className='mt-[5px] flex items-center justify-between'>
          <span className='text-[16px] leading-[24px] font-normal'>
            {destination.popular}
          </span>
          <span className='text-[16px] leading-[24px] font-bold'>
            {destination.price}
          </span>
        </div>
      </div>
    </div>
  );
}

export function Destinations() {
  const { title, description, destinations } = landingContent.destinations;

  return (
    <section className='w-full bg-white'>
      <div className='mx-auto max-w-[1440px] px-4 py-[60px] sm:px-6 lg:px-[81px] lg:py-[75px]'>
        {/* Heading */}
        <div className='mx-auto max-w-[1200px] text-center'>
          <h2 className='text-[28px] leading-[34px] font-semibold text-black sm:text-[36px] sm:leading-[42px] lg:text-[44px] lg:leading-[50px]'>
            {title}
          </h2>
          <p className='mt-3 text-[15px] leading-[24px] font-normal text-black sm:text-[16px] lg:text-[20px] lg:leading-[30px]'>
            {description}
          </p>
        </div>

        {/* Destination cards */}
        <div className='mt-[40px] grid grid-cols-1 gap-[24px] sm:grid-cols-2 lg:grid-cols-3'>
          {destinations.map((destination) => (
            <DestinationCard key={destination.id} destination={destination} />
          ))}
        </div>
      </div>
    </section>
  );
}
