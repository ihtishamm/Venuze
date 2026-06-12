import Image from 'next/image';

import { cn } from '@/lib/utils';

import { landingContent } from '../content';
import { HeroSearch } from './hero-search';

export function Hero() {
  const { title, slideCount } = landingContent.hero;

  return (
    <section className='relative flex min-h-[640px] w-full items-center justify-center overflow-hidden lg:min-h-[745px]'>
      <Image
        src='/hero.jpg'
        alt=''
        fill
        priority
        sizes='100vw'
        className='object-cover'
      />
      <div aria-hidden className='absolute inset-0 bg-black/40' />

      <div className='relative z-10 flex w-full max-w-[1440px] flex-col items-center px-4 pt-24 pb-16 md:px-8'>
        <h1 className='mx-auto w-full max-w-[343px] text-center text-[30px] leading-[40px] font-semibold tracking-[-0.03em] text-white md:max-w-[683px] md:text-[50px] md:leading-[70px] lg:max-w-[746px] lg:text-[70px] lg:leading-[80px]'>
          {title}
        </h1>

        <div className='mt-10 w-full md:mt-16'>
          <HeroSearch />
        </div>

        <div className='mt-10 flex items-center gap-2 md:mt-14'>
          {Array.from({ length: slideCount }).map((_, index) => (
            <span
              key={index}
              className={cn(
                'h-1.5 rounded-full transition-all',
                index === 1
                  ? 'w-6 bg-[#FEC432]'
                  : 'w-1.5 bg-[#D9D9D9] opacity-40'
              )}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
