'use client';

import { useEffect, useState } from 'react';
import { X } from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetTitle
} from '@/components/ui/sheet';
import { Slider } from '@/components/ui/slider';
import { Switch } from '@/components/ui/switch';
import { cn } from '@/lib/utils';
import { type SearchFilters } from '@/types/search';

import { createDefaultFilters, searchContent } from '../content';

/** A selectable pill used for the venue-type and occasion option groups. */
function FilterChip({
  label,
  selected,
  onToggle
}: {
  label: string;
  selected: boolean;
  onToggle: () => void;
}) {
  return (
    <button
      type='button'
      onClick={onToggle}
      aria-pressed={selected}
      className={cn(
        'cursor-pointer rounded-[8px] border px-[16px] py-[8px] text-[14px] leading-[20px] font-medium transition-colors',
        selected
          ? 'border-[#FF4F37] bg-[#FFF1EE] text-[#FF4F37]'
          : 'border-[#E5E5E5] bg-[#F7F7F7] text-black hover:border-[#C9C9C9]'
      )}
    >
      {label}
    </button>
  );
}

/** Heading shared by every section in the drawer body. */
function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h3 className='text-[16px] leading-[24px] font-semibold text-black'>
      {children}
    </h3>
  );
}

const sliderClassName = cn(
  'py-2',
  '[&_[data-slot=slider-track]]:h-[3px] [&_[data-slot=slider-track]]:bg-[#FFD9D2]',
  '[&_[data-slot=slider-range]]:bg-[#FF4F37]',
  '[&_[data-slot=slider-thumb]]:size-5 [&_[data-slot=slider-thumb]]:border-2 [&_[data-slot=slider-thumb]]:border-[#FF4F37] [&_[data-slot=slider-thumb]]:bg-white [&_[data-slot=slider-thumb]]:shadow-sm'
);

export function FilterDrawer({
  open,
  onOpenChange,
  filters,
  onApply
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  filters: SearchFilters;
  onApply: (next: SearchFilters) => void;
}) {
  const { venueTypes, occasions, capacity, price } = searchContent.filterDrawer;

  // The drawer edits a local draft; nothing reaches the page until "Apply".
  const [draft, setDraft] = useState<SearchFilters>(filters);

  // Re-seed the draft from the applied filters each time the drawer opens.
  useEffect(() => {
    if (open) setDraft(filters);
  }, [open, filters]);

  const toggle = (key: 'venueTypes' | 'occasions', value: string) =>
    setDraft((prev) => {
      const list = prev[key];
      return {
        ...prev,
        [key]: list.includes(value)
          ? list.filter((item) => item !== value)
          : [...list, value]
      };
    });

  const handleApply = () => {
    onApply(draft);
    onOpenChange(false);
  };

  // Reset the drawer and the page in one go, so the toolbar tally clears too.
  const handleClear = () => {
    const defaults = createDefaultFilters();
    setDraft(defaults);
    onApply(defaults);
  };

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent
        side='right'
        className='w-full gap-0 rounded-l-[10px] p-0 sm:max-w-[420px] [&>button]:hidden'
      >
        {/* Header */}
        <div className='flex shrink-0 items-center justify-between border-b border-[#E5E5E5] px-6 py-5'>
          <SheetTitle className='text-[20px] leading-[28px] font-semibold text-black'>
            Filters
          </SheetTitle>
          <SheetDescription className='sr-only'>
            Refine search results by venue type, capacity, price, occasion and
            verification.
          </SheetDescription>
          <SheetClose className='flex size-8 cursor-pointer items-center justify-center rounded-full text-black opacity-70 transition-colors hover:bg-[#F1F1F1] hover:opacity-100 focus:outline-none'>
            <X className='size-5' />
            <span className='sr-only'>Close</span>
          </SheetClose>
        </div>

        {/* Scrollable body */}
        <div className='flex-1 space-y-6 overflow-y-auto px-6 py-6 [scrollbar-width:thin]'>
          {/* Venue Type */}
          <section className='space-y-3'>
            <SectionTitle>Venue Type</SectionTitle>
            <div className='flex flex-wrap gap-[10px]'>
              {venueTypes.map((type) => (
                <FilterChip
                  key={type}
                  label={type}
                  selected={draft.venueTypes.includes(type)}
                  onToggle={() => toggle('venueTypes', type)}
                />
              ))}
            </div>
          </section>

          <div className='h-px bg-[#E5E5E5]' />

          {/* Capacity */}
          <section className='space-y-3'>
            <SectionTitle>Capacity</SectionTitle>
            <p className='text-[14px] leading-[20px] text-[#7A7A7A]'>
              Showing venues for {draft.capacity[0]} - {draft.capacity[1]}{' '}
              guests
            </p>
            <Slider
              min={capacity.min}
              max={capacity.max}
              step={10}
              value={draft.capacity}
              onValueChange={(value) =>
                setDraft((prev) => ({
                  ...prev,
                  capacity: [value[0], value[1]]
                }))
              }
              className={sliderClassName}
            />
          </section>

          <div className='h-px bg-[#E5E5E5]' />

          {/* Price per hour */}
          <section className='space-y-3'>
            <SectionTitle>Price per hour (AED)</SectionTitle>
            <div className='flex items-center justify-between text-[14px] leading-[20px] text-[#7A7A7A]'>
              <span>AED {draft.price[0].toFixed(2)}</span>
              <span>AED {draft.price[1].toFixed(2)}</span>
            </div>
            <Slider
              min={price.min}
              max={price.max}
              step={10}
              value={draft.price}
              onValueChange={(value) =>
                setDraft((prev) => ({ ...prev, price: [value[0], value[1]] }))
              }
              className={sliderClassName}
            />
          </section>

          <div className='h-px bg-[#E5E5E5]' />

          {/* Event / Occasion */}
          <section className='space-y-3'>
            <SectionTitle>Event / Occasion</SectionTitle>
            <div className='flex flex-wrap gap-[10px]'>
              {occasions.map((occasion) => (
                <FilterChip
                  key={occasion}
                  label={occasion}
                  selected={draft.occasions.includes(occasion)}
                  onToggle={() => toggle('occasions', occasion)}
                />
              ))}
            </div>
          </section>

          <div className='h-px bg-[#E5E5E5]' />

          {/* Verified Only */}
          <section className='flex items-center justify-between'>
            <div className='space-y-1'>
              <SectionTitle>Verified Only</SectionTitle>
              <p className='text-[14px] leading-[20px] text-[#7A7A7A]'>
                Show only verified venues
              </p>
            </div>
            <Switch
              checked={draft.verifiedOnly}
              onCheckedChange={(checked) =>
                setDraft((prev) => ({ ...prev, verifiedOnly: checked }))
              }
              className='data-[state=checked]:bg-[#FF4F37]'
            />
          </section>
        </div>

        {/* Footer */}
        <div className='flex shrink-0 items-center justify-between gap-4 border-t border-[#E5E5E5] px-6 py-4'>
          <Button
            type='button'
            variant='secondary'
            onClick={handleClear}
            className='h-[44px] cursor-pointer rounded-[10px] bg-[#F1F1F1] px-6 text-[14px] font-medium text-black hover:bg-[#E7E7E7]'
          >
            Clear All
          </Button>
          <Button
            type='button'
            onClick={handleApply}
            className='h-[44px] flex-1 cursor-pointer rounded-[10px] bg-[#FF4F37] px-6 text-[14px] font-semibold text-white hover:bg-[#EA4029]'
          >
            Apply Filters
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  );
}
