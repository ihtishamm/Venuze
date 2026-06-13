'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';

import { cn } from '@/lib/utils';
import { type TrustReview, type TrustStat } from '@/types/landing-page';

import { landingContent } from '../content';

function StatCard({ stat }: { stat: TrustStat }) {
  return (
    <div
      className='flex h-[124px] flex-col items-center justify-center gap-[10px] rounded-[20px] px-[20px] py-[30px] text-center'
      style={{ backgroundColor: stat.color, color: stat.textColor ?? '#FFFFFF' }}
    >
      <span className='font-poppins text-[28px] leading-[30px] font-bold tracking-[-0.03em] lg:text-[34px]'>
        {stat.value}
        {stat.showStar && <span className='ml-1'>★</span>}
      </span>
      <span className='font-poppins text-[14px] leading-[20px] font-normal tracking-[-0.03em] lg:text-[16px] lg:leading-[24px]'>
        {stat.label}
      </span>
    </div>
  );
}

function ReviewCard({ review }: { review: TrustReview }) {
  return (
    <div className='flex h-full overflow-hidden rounded-[20px] bg-white shadow-[0px_4px_20px_0px_#0000000F]'>
      {/* Image side */}
      <div className='relative w-[120px] shrink-0 sm:w-[180px] lg:w-[237px]'>
        <Image
          src={review.image}
          alt={review.alt}
          fill
          sizes='(max-width: 1024px) 180px, 237px'
          className='object-cover'
        />
      </div>

      {/* Content side */}
      <div className='flex flex-1 flex-col justify-center gap-[20px] px-[20px] py-[24px] lg:gap-[25px] lg:px-[30px]'>
        <p className='font-poppins text-[15px] leading-[24px] font-normal tracking-[0.03em] text-black lg:text-[20px] lg:leading-[30px]'>
          {review.quote}
        </p>
        <div className='flex flex-col gap-[10px]'>
          <span className='font-poppins text-[16px] leading-[24px] font-bold tracking-[0.03em] text-black lg:text-[18px]'>
            {review.name}
          </span>
          <Image
            src='/stars.svg'
            alt='5 out of 5 stars'
            width={80}
            height={16}
          />
        </div>
      </div>
    </div>
  );
}

export function TrustedCreators() {
  const { title, description, stats, reviews } = landingContent.trustedCreators;
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
    const card = el.firstElementChild as HTMLElement | null;
    const cardWidth = (card?.offsetWidth ?? 600) + 24;
    el.scrollBy({
      left: dir === 'next' ? cardWidth : -cardWidth,
      behavior: 'smooth'
    });
  }, []);

  return (
    <section
      className='w-full'
      style={{
        background: 'linear-gradient(270deg, #FFDBD8 0%, #FFF0CD 100%)'
      }}
    >
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

        {/* Stat cards */}
        <div className='mt-[40px] grid grid-cols-2 gap-[16px] lg:grid-cols-4 lg:gap-[24px]'>
          {stats.map((stat) => (
            <StatCard key={stat.id} stat={stat} />
          ))}
        </div>

        {/* Review cards */}
        <div className='mt-[30px]'>
          <div
            ref={trackRef}
            className='flex gap-[24px] overflow-x-auto pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden'
            style={{ scrollSnapType: 'x mandatory' }}
          >
            {reviews.map((review) => (
              <div
                key={review.id}
                className='w-[88%] shrink-0 sm:w-[460px] lg:w-[600px] xl:h-[300px] xl:w-[calc(50%-12px)]'
                style={{ scrollSnapAlign: 'start' }}
              >
                <ReviewCard review={review} />
              </div>
            ))}
          </div>

          {/* Navigation buttons */}
          <div className='mt-[24px] hidden items-center justify-end gap-[10px] lg:flex'>
            <button
              type='button'
              onClick={() => scroll('prev')}
              disabled={atStart}
              aria-label='Previous reviews'
              className={cn(
                'flex h-[42px] w-[42px] items-center justify-center rounded-full bg-[#F4F4F4] shadow-[0px_1px_4px_0px_#00000040] transition-opacity',
                atStart ? 'cursor-not-allowed opacity-40' : 'hover:bg-black/5'
              )}
            >
              <ChevronLeft className='h-5 w-5 text-[#555555]' />
            </button>
            <button
              type='button'
              onClick={() => scroll('next')}
              disabled={atEnd}
              aria-label='Next reviews'
              className={cn(
                'flex h-[42px] w-[42px] items-center justify-center rounded-full bg-[#F4F4F4] shadow-[0px_1px_4px_0px_#00000040] transition-opacity',
                atEnd ? 'cursor-not-allowed opacity-40' : 'hover:bg-black/5'
              )}
            >
              <ChevronRight className='h-5 w-5 text-[#555555]' />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
