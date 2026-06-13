'use client';

import { X } from 'lucide-react';

import { type SearchFilterChip } from '@/types/search';

export function ResultsToolbar({
  count,
  noun,
  where,
  chips,
  onRemoveChip
}: {
  count: number;
  noun: string;
  where: string;
  chips: SearchFilterChip[];
  onRemoveChip: (id: string) => void;
}) {
  return (
    <div className='flex items-center gap-3'>
      <p className='shrink-0 text-[14px] text-[#6B7280]'>
        {count.toLocaleString()}{' '}
        <span className='font-semibold text-black'>{noun}</span> near {where}
      </p>

      <div className='flex flex-1 items-center gap-2 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden'>
        {chips.map((chip) => (
          <span
            key={chip.id}
            className='flex h-[32px] shrink-0 items-center gap-[4.6px] rounded-[999px] border-[1.5px] border-[#E6E6E6] bg-white px-[15px] text-center text-[11.05px] leading-[18.41px] font-medium tracking-[-0.03em] text-[#364153]'
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
    </div>
  );
}
