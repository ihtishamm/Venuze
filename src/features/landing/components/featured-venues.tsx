'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';

import { cn } from '@/lib/utils';
import { type FeaturedVenueCategory } from '@/types/landing-page';

import { landingContent } from '../content';
import { VenueCard } from './venue-card';

function CategoryTab({
  category,
  isActive,
  onClick
}: {
  category: FeaturedVenueCategory;
  isActive: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type='button'
      onClick={onClick}
      className={cn(
        'h-[50px] shrink-0 rounded-[10px] px-[30px] text-center text-[16px] leading-[100%] tracking-[0%] text-white uppercase transition-colors',
        isActive
          ? 'bg-primary font-bold'
          : 'bg-[#B7B7B74D] font-normal hover:opacity-90 lg:bg-[#B7B7B780]'
      )}
    >
      {category.label}
    </button>
  );
}

export function FeaturedVenues() {
  const { title, categories, venues } = landingContent.featuredVenues;
  const [activeCategory, setActiveCategory] = useState(categories[0].id);
  const trackRef = useRef<HTMLDivElement>(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  const syncButtons = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    setAtStart(el.scrollLeft <= 0);
    setAtEnd(el.scrollLeft + el.clientWidth >= el.scrollWidth - 1);
  }, []);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    syncButtons();
    el.addEventListener('scroll', syncButtons, { passive: true });
    return () => el.removeEventListener('scroll', syncButtons);
  }, [syncButtons]);

  const scroll = useCallback((dir: 'prev' | 'next') => {
    const el = trackRef.current;
    if (!el) return;
    const card = el.firstElementChild as HTMLElement | null;
    const cardWidth = (card?.offsetWidth ?? 300) + 24;
    el.scrollBy({
      left: dir === 'next' ? cardWidth : -cardWidth,
      behavior: 'smooth'
    });
  }, []);

  return (
    <section className='relative w-full overflow-hidden'>
      {/* Background — desktop uses city night image, mobile/tablet uses alternate */}
      <div className='absolute inset-0'>
        <Image
          src='/featured_venue_bg.png'
          alt=''
          fill
          sizes='100vw'
          className='hidden object-cover lg:block'
          priority
        />
        <Image
          src='/featured_venue_bg_2.png'
          alt=''
          fill
          sizes='100vw'
          className='block object-cover lg:hidden'
          priority
        />
        <div className='absolute inset-0 bg-black/45' />
      </div>

      <div className='relative z-10 mx-auto max-w-[1440px] px-4 pt-[77px] pb-[60px] sm:px-6 lg:px-[215px]'>
        {/* Title */}
        <h2 className='text-center text-[44px] leading-[50px] font-semibold text-white'>
          {title}
        </h2>

        {/* Category tabs
            — mobile/tablet: justify-start so the first tab is always visible and row scrolls right
            — desktop (lg): justify-center since all tabs fit without overflow */}
        <div className='mt-[25px] flex items-center justify-start gap-[10px] overflow-x-auto [scrollbar-width:none] lg:justify-center [&::-webkit-scrollbar]:hidden'>
          {categories.map((category) => (
            <CategoryTab
              key={category.id}
              category={category}
              isActive={activeCategory === category.id}
              onClick={() => setActiveCategory(category.id)}
            />
          ))}
        </div>

        {/* Cards carousel */}
        <div className='mt-[46px] lg:-mx-[215px] lg:px-[82px]'>
          <div
            ref={trackRef}
            className='flex gap-6 overflow-x-auto pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden'
            style={{ scrollSnapType: 'x mandatory' }}
          >
            {venues.map((venue) => (
              <div key={venue.id} style={{ scrollSnapAlign: 'start' }}>
                <VenueCard venue={venue} bordered={false} />
              </div>
            ))}
          </div>

          {/* Navigation buttons — desktop only */}
          <div className='mt-6 hidden items-center justify-end gap-[10px] lg:flex'>
            <button
              type='button'
              onClick={() => scroll('prev')}
              disabled={atStart}
              aria-label='Previous featured venues'
              className={cn(
                'flex h-[42px] w-[42px] items-center justify-center rounded-full border-2 border-white shadow-[0px_1px_4px_0px_#00000040] transition-opacity',
                atStart ? 'cursor-not-allowed opacity-40' : 'hover:bg-white/20'
              )}
            >
              <ChevronLeft className='h-5 w-5 text-white' />
            </button>
            <button
              type='button'
              onClick={() => scroll('next')}
              disabled={atEnd}
              aria-label='Next featured venues'
              className={cn(
                'flex h-[42px] w-[42px] items-center justify-center rounded-full border-2 border-white shadow-[0px_1px_4px_0px_#00000040] transition-opacity',
                atEnd ? 'cursor-not-allowed opacity-40' : 'hover:bg-white/20'
              )}
            >
              <ChevronRight className='h-5 w-5 text-white' />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
