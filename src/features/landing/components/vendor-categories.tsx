'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';

import { cn } from '@/lib/utils';
import { type VendorCategory } from '@/types/landing-page';

import { landingContent } from '../content';

function VendorCategoryCard({ category }: { category: VendorCategory }) {
  return (
    <div className='relative w-[260px] shrink-0 overflow-hidden rounded-[20px] shadow-lg sm:w-[301px]'>
      <div className='relative h-[380px] w-full sm:h-[400px]'>
        <Image
          src={category.image}
          alt={category.alt}
          fill
          sizes='(max-width: 640px) 260px, 301px'
          className='object-cover'
        />
      </div>
    </div>
  );
}

export function VendorCategories() {
  const { title, description, categories } = landingContent.vendorCategories;
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
    const cardWidth = (card?.offsetWidth ?? 260) + 16;
    el.scrollBy({
      left: dir === 'next' ? cardWidth : -cardWidth,
      behavior: 'smooth'
    });
  }, []);

  return (
    <section
      className='w-full overflow-hidden'
      style={{ backgroundColor: '#FDF1D2' }}
    >
      <div className='mx-auto max-w-[1440px] px-4 pt-[75px] pb-[20px] sm:px-6 lg:px-[87px]'>
        <div className='mx-auto max-w-[1200px] text-center'>
          <h2 className='text-[44px] leading-[50px] font-semibold text-black'>
            {title}
          </h2>
          <p className='mx-auto mt-3 max-w-[1200px] text-[20px] leading-[30px] font-normal text-black'>
            {description}
          </p>
        </div>

        <div className='mt-10'>
          <div
            ref={trackRef}
            className='flex gap-4 overflow-x-auto pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden'
            style={{ scrollSnapType: 'x mandatory' }}
          >
            {categories.map((category) => (
              <div key={category.id} style={{ scrollSnapAlign: 'start' }}>
                <VendorCategoryCard category={category} />
              </div>
            ))}
          </div>

          <div className='mt-6 hidden items-center justify-end gap-[10px] lg:flex'>
            <button
              type='button'
              onClick={() => scroll('prev')}
              disabled={atStart}
              aria-label='Previous vendors'
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
              aria-label='Next vendors'
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
