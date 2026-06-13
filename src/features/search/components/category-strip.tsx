'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';

import { cn } from '@/lib/utils';
import { type SpaceCategory, type SpaceCategoryIconKey } from '@/types/search';

const categoryIcons: Record<SpaceCategoryIconKey, string> = {
  all: '/allspaces.svg',
  'photo-studio': '/photo_studio.svg',
  'film-studio': '/film_studio.svg',
  warehouse: '/warehouse.svg',
  gallery: '/gallery.svg',
  restaurant: '/resturent.svg',
  apartment: '/appartment.svg',
  office: '/office_space.svg',
  venue: '/venue_seach.svg',
  'private-party': '/private_party.svg',
  meeting: '/meeting.svg'
};

export function CategoryStrip({
  categories,
  activeCategory,
  onSelect
}: {
  categories: SpaceCategory[];
  activeCategory: string;
  onSelect: (id: string) => void;
}) {
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
    window.addEventListener('resize', syncButtons);
    return () => {
      el.removeEventListener('scroll', syncButtons);
      window.removeEventListener('resize', syncButtons);
    };
  }, [syncButtons]);

  const scroll = useCallback((dir: 'prev' | 'next') => {
    const el = trackRef.current;
    if (!el) return;
    el.scrollBy({
      left: dir === 'next' ? 240 : -240,
      behavior: 'smooth'
    });
  }, []);

  return (
    <div className='flex w-full items-center gap-1'>
      <button
        type='button'
        onClick={() => scroll('prev')}
        disabled={atStart}
        aria-label='Scroll categories left'
        className={cn(
          'hidden size-8 shrink-0 items-center justify-center text-black transition-opacity md:flex',
          atStart ? 'cursor-not-allowed opacity-40' : 'hover:opacity-70'
        )}
      >
        <ArrowLeft className='size-5' />
      </button>

      <div
        ref={trackRef}
        className='flex flex-1 items-center gap-1 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden'
      >
        {categories.map((category) => {
          const iconSrc = categoryIcons[category.iconKey];
          const isActive = category.id === activeCategory;
          return (
            <button
              key={category.id}
              type='button'
              onClick={() => onSelect(category.id)}
              className={cn(
                'flex h-[79px] w-[113px] shrink-0 flex-col items-center justify-center gap-1.5 rounded-[8px] text-[12px] font-medium whitespace-nowrap transition-colors',
                isActive
                  ? 'text-primary bg-[#F4F4F4]'
                  : 'text-[#6B7280] hover:text-black'
              )}
            >
              <span
                aria-hidden
                className='size-6 shrink-0 bg-current'
                style={{
                  maskImage: `url(${iconSrc})`,
                  WebkitMaskImage: `url(${iconSrc})`,
                  maskRepeat: 'no-repeat',
                  WebkitMaskRepeat: 'no-repeat',
                  maskPosition: 'center',
                  WebkitMaskPosition: 'center',
                  maskSize: 'contain',
                  WebkitMaskSize: 'contain'
                }}
              />
              {category.label}
            </button>
          );
        })}
      </div>

      <button
        type='button'
        onClick={() => scroll('next')}
        disabled={atEnd}
        aria-label='Scroll categories right'
        className={cn(
          'hidden size-8 shrink-0 items-center justify-center text-black transition-opacity md:flex',
          atEnd ? 'cursor-not-allowed opacity-40' : 'hover:opacity-70'
        )}
      >
        <ArrowRight className='size-5' />
      </button>
    </div>
  );
}
