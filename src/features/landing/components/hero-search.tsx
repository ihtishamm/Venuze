import Image from 'next/image';
import { ChevronDown, Search } from 'lucide-react';

import { cn } from '@/lib/utils';

import { landingContent } from '../content';
import { type HeroTabIconKey } from '../../../types/landing-page';

/** Visual mapping for content icon keys — components own the icons, content owns the copy. */
const tabIcons: Record<HeroTabIconKey, string> = {
  venue: '/venue.svg',
  vendors: '/vendor.svg'
};

/**
 * Hero search widget: a tab group (Venue / Vendors) over a card of search fields.
 * Layout-only for now — fields render their selected value; real inputs and tab
 * switching are wired in a later pass.
 *
 * Responsive: stacks vertically on mobile (tabs inside the card top); on md+ the
 * tabs float above the card center and the fields sit in a single row.
 */
export function HeroSearch() {
  const { searchTabs, searchFields, searchLabel } = landingContent.hero;
  const activeTabId = searchTabs[0]?.id;

  return (
    <div className='relative mx-auto flex h-[335px] w-[311px] flex-col items-center justify-between rounded-[10px] bg-white px-[15px] py-[15px] shadow-xl md:h-[100px] md:w-full md:max-w-[1054px] md:flex-row md:justify-start md:gap-0 md:p-2 md:pl-5'>
      {/* Tabs — in-flow at the top on mobile, floating above the card on lg+; hidden on iPad (md) */}
      <div className='flex h-[44px] w-[280px] shrink-0 items-center rounded-[10px] bg-[#F3F4F6] p-1 shadow-none md:hidden lg:absolute lg:-top-[38px] lg:left-1/2 lg:flex lg:h-[55px] lg:w-[264px] lg:-translate-x-1/2 lg:bg-white lg:p-1.5 lg:shadow-md'>
        {searchTabs.map((tab) => {
          const iconSrc = tabIcons[tab.iconKey];
          const isActive = tab.id === activeTabId;
          return (
            <button
              type='button'
              key={tab.id}
              className={cn(
                'flex h-full w-full items-center justify-center gap-2 rounded-[10px] text-[14px] leading-none font-semibold',
                isActive ? 'bg-primary text-white' : 'bg-transparent text-black'
              )}
            >
              <Image
                src={iconSrc}
                alt=''
                width={16}
                height={16}
                className={isActive ? 'brightness-0 invert' : 'brightness-0'}
              />
              {tab.label}
            </button>
          );
        })}
      </div>

      {/* Fields */}
      <div className='flex w-[277px] flex-col md:w-auto md:flex-1 md:flex-row md:items-center'>
        {searchFields.map((field, index) => (
          <div
            key={field.id}
            className={cn(
              'flex flex-col justify-center py-3.5 md:h-auto md:flex-1 md:justify-center md:gap-1 md:px-5 md:py-2',
              index < searchFields.length - 1 &&
                'border-border border-b md:border-b-0'
            )}
          >
            <span className='text-field-label text-form-muted mb-2 md:mb-0'>
              {field.label}
            </span>
            <div className='flex items-center justify-between gap-2'>
              <span className='text-field-value text-black'>{field.value}</span>
              <ChevronDown className='text-form-muted size-4' />
            </div>
          </div>
        ))}
      </div>

      {/* Search action */}
      <button
        type='button'
        className='bg-primary text-search-cta flex h-[48px] w-full shrink-0 items-center justify-center gap-2 rounded-[10px] text-white md:ml-2 md:h-auto md:w-auto md:px-8 md:py-3.5'
      >
        <Search className='size-6' />
        {searchLabel}
      </button>
    </div>
  );
}
