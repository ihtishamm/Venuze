'use client';

import { Search, SlidersHorizontal } from 'lucide-react';

export function KeywordToolbar({
  value,
  placeholder,
  onChange,
  activeFilterCount,
  onOpenFilters
}: {
  value: string;
  placeholder: string;
  onChange: (next: string) => void;
  activeFilterCount: number;
  onOpenFilters: () => void;
}) {
  return (
    <div className='flex h-[50px] w-full items-center'>
      {/* Keyword input — borderless, fills the row */}
      <div className='flex flex-1 items-center gap-[20px]'>
        <Search className='size-6 shrink-0 text-black' strokeWidth={1.5} />
        <input
          type='text'
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          aria-label='Search keywords'
          className='h-full w-full border-0 bg-transparent text-[16px] leading-[30px] tracking-[-0.03em] text-black outline-none placeholder:text-[#A39E9E]'
        />
      </div>

      {/* Full-height divider that meets the top bar */}
      <span className='h-[50px] w-px shrink-0 bg-[#D0D0D0]' />

      {/* Filters button */}
      <button
        type='button'
        onClick={onOpenFilters}
        className='flex h-[34px] shrink-0 items-center gap-[8px] rounded-[10px] py-[10px] pl-[20px] text-[16px] font-medium text-black'
      >
        <SlidersHorizontal className='size-[18px]' />
        <span>Filters</span>
        {activeFilterCount > 0 && (
          <span className='flex size-[20px] items-center justify-center rounded-full bg-black text-[11px] font-semibold text-white'>
            {activeFilterCount}
          </span>
        )}
      </button>
    </div>
  );
}
