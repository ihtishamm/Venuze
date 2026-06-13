'use client';

import { useMemo, useState } from 'react';
import { List, Map as MapIcon } from 'lucide-react';

import { cn } from '@/lib/utils';
import { type SearchFilters, type SearchSummary } from '@/types/search';
import { Footer } from '@/features/landing/components/footer';

import { createDefaultFilters, searchContent } from './content';
import { CategoryStrip } from './components/category-strip';
import { FilterDrawer } from './components/filter-drawer';
import { KeywordToolbar } from './components/keyword-toolbar';
import { ResultsList } from './components/results-list';
import { ResultsMap } from './components/results-map';
import { ResultsToolbar } from './components/results-toolbar';
import { SearchHeader } from './components/search-header';

/** Counts the filters a user has actually narrowed from the defaults. */
function countActiveFilters(filters: SearchFilters): number {
  const { capacity, price } = searchContent.filterDrawer;
  let count = filters.venueTypes.length + filters.occasions.length;
  if (
    filters.capacity[0] !== capacity.min ||
    filters.capacity[1] !== capacity.max
  )
    count += 1;
  if (filters.price[0] !== price.min || filters.price[1] !== price.max)
    count += 1;
  if (filters.verifiedOnly) count += 1;
  return count;
}

export function SearchPage({ summary }: { summary: SearchSummary }) {
  const { categories, filterChips, resultNoun, keywordPlaceholder } =
    searchContent;

  const [activeCategory, setActiveCategory] = useState('photo-studio');
  const [keyword, setKeyword] = useState('');
  const [chips, setChips] = useState(filterChips);
  const [mobileView, setMobileView] = useState<'list' | 'map'>('list');
  const [filtersOpen, setFiltersOpen] = useState(false);
  const [filters, setFilters] = useState<SearchFilters>(createDefaultFilters);

  const venues = useMemo(() => {
    const q = keyword.trim().toLowerCase();
    return searchContent.venues.filter((venue) => {
      const matchesCategory =
        activeCategory === 'all' || venue.category === activeCategory;
      const matchesKeyword =
        q === '' ||
        venue.name.toLowerCase().includes(q) ||
        venue.location.toLowerCase().includes(q);
      return matchesCategory && matchesKeyword;
    });
  }, [activeCategory, keyword]);

  const removeChip = (id: string) =>
    setChips((prev) => prev.filter((chip) => chip.id !== id));

  const hasResults = venues.length > 0;

  return (
    <div className='h-screen overflow-y-auto overscroll-none bg-white'>
      <div className='flex h-screen flex-col'>
        <SearchHeader summary={summary} />

        {/* Keyword + filter bar — full-width row under the header */}
        <div className='w-full shrink-0 border-b border-[#D0D0D0]'>
          <div className='mx-auto w-full max-w-[1440px] px-4 md:px-6'>
            <KeywordToolbar
              value={keyword}
              placeholder={keywordPlaceholder}
              onChange={setKeyword}
              activeFilterCount={countActiveFilters(filters)}
              onOpenFilters={() => setFiltersOpen(true)}
            />
          </div>
        </div>

        {/* Categories — full-width row with a line beneath it */}
        <div className='w-full shrink-0 border-b border-[#E5E5E5]'>
          <div className='mx-auto flex h-[80px] w-full max-w-[1440px] items-center px-4 md:px-6'>
            <CategoryStrip
              categories={categories}
              activeCategory={activeCategory}
              onSelect={setActiveCategory}
            />
          </div>
        </div>

        {/* Tablet/mobile header — count + list⇄map toggle, shown in both views. */}
        {hasResults && (
          <div className='mx-auto w-full max-w-[1440px] shrink-0 px-4 pt-3 pb-2 md:px-6 lg:hidden'>
            <div className='flex items-center justify-between gap-3'>
              <p className='text-[14px] text-[#6B7280]'>
                {(3456).toLocaleString()}{' '}
                <span className='font-semibold text-black'>{resultNoun}</span>{' '}
                near {summary.where}
              </p>
              <button
                type='button'
                onClick={() =>
                  setMobileView((v) => (v === 'list' ? 'map' : 'list'))
                }
                className='flex h-[36px] shrink-0 items-center gap-2 rounded-[10px] border border-[#E5E5E5] bg-white px-4 text-[13px] font-semibold text-black shadow-sm'
              >
                {mobileView === 'list' ? (
                  <>
                    <MapIcon className='size-4' />
                    Show Map
                  </>
                ) : (
                  <>
                    <List className='size-4' />
                    Show List
                  </>
                )}
              </button>
            </div>
          </div>
        )}

        <div className='mx-auto w-full max-w-[1440px] flex-1 overflow-hidden lg:px-6 lg:pt-3 lg:pb-4'>
          <div className='flex h-full lg:gap-4'>
            <div
              className={cn(
                'flex h-full flex-col px-4 lg:p-0',
                hasResults ? 'lg:flex-1' : 'lg:w-full',
                mobileView === 'list' ? 'flex w-full' : 'hidden lg:flex'
              )}
            >
              {hasResults && (
                <div className='hidden shrink-0 pb-3 lg:block'>
                  <ResultsToolbar
                    count={3456}
                    noun={resultNoun}
                    where={summary.where}
                    chips={chips}
                    onRemoveChip={removeChip}
                  />
                </div>
              )}

              {/* Scrollable list — owns the custom 7px rounded scrollbar */}
              <div
                className={cn(
                  'min-h-0 flex-1 overflow-y-auto pr-1.5 pb-4',
                  '[scrollbar-color:#D9D9D9_transparent] [scrollbar-width:thin]',
                  '[&::-webkit-scrollbar]:w-[7px]',
                  '[&::-webkit-scrollbar-track]:bg-transparent',
                  '[&::-webkit-scrollbar-thumb]:rounded-[50px] [&::-webkit-scrollbar-thumb]:bg-[#D9D9D9]'
                )}
              >
                <ResultsList venues={venues} />
              </div>
            </div>

            {/* Map — fixed 421px rail on desktop (full height), full-bleed below lg */}
            {hasResults && (
              <div
                className={cn(
                  'h-full lg:block lg:w-[421px] lg:shrink-0',
                  mobileView === 'map' ? 'block w-full' : 'hidden lg:block'
                )}
              >
                <ResultsMap venues={venues} />
              </div>
            )}
          </div>
        </div>
      </div>

      <Footer overlap={false} />

      <FilterDrawer
        open={filtersOpen}
        onOpenChange={setFiltersOpen}
        filters={filters}
        onApply={setFilters}
      />
    </div>
  );
}
