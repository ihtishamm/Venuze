'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';

import { Card } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { type VenueCategory } from '@/types/landing-page';

import { landingContent } from '../content';

function VenueCategoryCard({ category }: { category: VenueCategory }) {
  return (
    <Card className='relative w-[260px] shrink-0 gap-0 overflow-hidden rounded-2xl border-0 p-0 shadow-lg sm:w-[301px]'>
      <div className='relative h-[380px] w-full sm:h-[400px]'>
        <Image
          src={category.image}
          alt={category.alt}
          fill
          sizes='(max-width: 640px) 260px, 301px'
          className='object-cover'
        />
        {/* Bottom gradient for text legibility */}
        <div className='absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent' />

        {/* Venue count badge — Figma: 83×36, radius 100px, px-15 py-8, bg #00000080 */}
        <span className='absolute top-3 left-3 rounded-[100px] bg-[#00000080] px-[15px] py-[8px] text-[12px] leading-[20px] font-semibold text-white'>
          {category.venueCount} Venues
        </span>

        {/* Category name — Figma: 30px/600, lh 30px, tracking -3% */}
        <p className='absolute bottom-4 left-4 w-[242px] text-[30px] leading-[30px] font-semibold tracking-[-0.03em] text-white'>
          {category.name}
        </p>
      </div>
    </Card>
  );
}

export function VenueCategories() {
  const { title, description, categories } = landingContent.venueCategories;
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
    const cardWidth = (card?.offsetWidth ?? 260) + 16; // card + gap-4
    el.scrollBy({
      left: dir === 'next' ? cardWidth : -cardWidth,
      behavior: 'smooth'
    });
  }, []);

  return (
    <section className='w-full overflow-hidden bg-white'>
      <div className='mx-auto max-w-[1440px] px-4 pt-[75px] pb-16 sm:px-6 lg:px-[87px]'>
        <div className='mx-auto max-w-[1200px] text-center'>
          <h2 className='text-[30px] leading-[34px] font-semibold text-black'>
            {title}
          </h2>

          <p className='mt-3 text-[20px] leading-[20px] font-normal text-black'>
            {description}
          </p>
        </div>

        {/* Carousel */}
        <div className='mt-10'>
          {/* Scrollable track */}
          <div
            ref={trackRef}
            className='flex gap-4 overflow-x-auto pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden'
            style={{ scrollSnapType: 'x mandatory' }}
          >
            {categories.map((category) => (
              <div key={category.id} style={{ scrollSnapAlign: 'start' }}>
                <VenueCategoryCard category={category} />
              </div>
            ))}
          </div>

          {/* Navigation buttons — desktop only, Figma: 42×42, radius 999px, bg #F4F4F4, shadow */}
          <div className='mt-6 hidden items-center justify-end gap-[10px] lg:flex'>
            <button
              type='button'
              onClick={() => scroll('prev')}
              disabled={atStart}
              aria-label='Previous venues'
              className={cn(
                'flex h-[42px] w-[42px] items-center justify-center rounded-full bg-[#F4F4F4] shadow-[0px_1px_4px_0px_rgba(0,0,0,0.25)] transition-opacity',
                atStart ? 'cursor-not-allowed opacity-40' : 'hover:bg-gray-200'
              )}
            >
              <ChevronLeft className='h-[30px] w-[30px] text-gray-700' />
            </button>
            <button
              type='button'
              onClick={() => scroll('next')}
              disabled={atEnd}
              aria-label='Next venues'
              className={cn(
                'flex h-[42px] w-[42px] items-center justify-center rounded-full bg-[#F4F4F4] shadow-[0px_1px_4px_0px_rgba(0,0,0,0.25)] transition-opacity',
                atEnd ? 'cursor-not-allowed opacity-40' : 'hover:bg-gray-200'
              )}
            >
              <ChevronRight className='h-[30px] w-[30px] text-gray-700' />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
