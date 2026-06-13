'use client';

import { ChevronDown, X } from 'lucide-react';

import { type SearchFilterChip } from '@/types/search';

export function ResultsToolbar({
  count,
  noun,
  where,
  chips,
  sortLabel,
  onRemoveChip
}: {
  count: number;
  noun: string;
  where: string;
  chips: SearchFilterChip[];
  sortLabel: string;
  onRemoveChip: (id: string) => void;
}) {
  return (
    <div className='flex flex-wrap items-center gap-3'>
      <p className='text-[14px] text-[#6B7280]'>
        <span className='font-semibold text-black'>
          {count.toLocaleString()}
        </span>{' '}
        {noun} near <span className='font-semibold text-black'>{where}</span>
      </p>

      <div className='flex flex-1 flex-wrap items-center gap-2'>
        {chips.map((chip) => (
          <span
            key={chip.id}
            className='flex h-[28px] items-center gap-1.5 rounded-full border border-[#E5E5E5] bg-[#F9FAFB] px-3 text-[12px] font-medium text-[#364153]'
          >
            {chip.label}
            <button
              type='button'
              onClick={() => onRemoveChip(chip.id)}
              aria-label={`Remove ${chip.label} filter`}
              className='text-[#9CA3AF] hover:text-black'
            >
              <X className='size-3' />
            </button>
          </span>
        ))}
      </div>

      <button
        type='button'
        className='ml-auto flex h-[28px] shrink-0 items-center gap-1.5 rounded-full border border-[#E5E5E5] px-3 text-[12px] font-medium text-[#364153]'
      >
        Sort by: <span className='font-semibold text-black'>{sortLabel}</span>
        <ChevronDown className='size-3.5' />
      </button>
    </div>
  );
}
