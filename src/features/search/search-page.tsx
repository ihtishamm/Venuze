'use client';

import { useMemo, useState } from 'react';
import { List, Map as MapIcon } from 'lucide-react';

import { cn } from '@/lib/utils';
import { type SearchSummary } from '@/types/search';

import { searchContent } from './content';
import { CategoryStrip } from './components/category-strip';
import { KeywordToolbar } from './components/keyword-toolbar';
import { ResultsList } from './components/results-list';
import { ResultsMap } from './components/results-map';
import { ResultsToolbar } from './components/results-toolbar';
import { SearchHeader } from './components/search-header';

export function SearchPage({ summary }: { summary: SearchSummary }) {
  const { categories, filterChips, sortLabel, resultNoun, keywordPlaceholder } =
    searchContent;

  const [activeCategory, setActiveCategory] = useState('photo-studio');
  const [keyword, setKeyword] = useState('');
  const [chips, setChips] = useState(filterChips);
  const [mobileView, setMobileView] = useState<'list' | 'map'>('list');

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
    <div className='flex h-screen flex-col bg-white'>
      <SearchHeader summary={summary} />

      {/* Keyword + filter bar — full-width row under the header */}
      <div className='w-full shrink-0 border-b border-[#D0D0D0]'>
        <div className='mx-auto w-full max-w-[1440px] px-4 md:px-8'>
          <KeywordToolbar
            value={keyword}
            placeholder={keywordPlaceholder}
            onChange={setKeyword}
            activeFilterCount={chips.length}
          />
        </div>
      </div>

      {/* Categories — full-width row with a line beneath it */}
      <div className='w-full shrink-0 border-b border-[#E5E5E5]'>
        <div className='mx-auto flex h-[80px] w-full max-w-[1440px] items-center px-4 md:px-8'>
          <CategoryStrip
            categories={categories}
            activeCategory={activeCategory}
            onSelect={setActiveCategory}
          />
        </div>
      </div>

      {/* Results toolbar — hidden when there are no results */}
      {hasResults && (
        <div className='mx-auto w-full max-w-[1440px] shrink-0 px-4 pt-3 md:px-8'>
          <ResultsToolbar
            count={3456}
            noun={resultNoun}
            where={summary.where}
            chips={chips}
            sortLabel={sortLabel}
            onRemoveChip={removeChip}
          />
        </div>
      )}

      {/* Results — split on desktop, single toggled view below lg */}
      <div className='relative mx-auto w-full max-w-[1440px] flex-1 overflow-hidden px-4 pt-4 pb-4 md:px-8'>
        <div className='flex h-full gap-6'>
          {/* List */}
          <div
            className={cn(
              'h-full overflow-y-auto pb-4 [scrollbar-width:thin]',
              hasResults ? 'lg:w-[62%]' : 'lg:w-full',
              mobileView === 'list' ? 'block w-full' : 'hidden lg:block'
            )}
          >
            <ResultsList venues={venues} />
          </div>

          {/* Map — hidden entirely when there are no results */}
          {hasResults && (
            <div
              className={cn(
                'h-full lg:block lg:w-[38%]',
                mobileView === 'map' ? 'block w-full' : 'hidden lg:block'
              )}
            >
              <ResultsMap venues={venues} />
            </div>
          )}
        </div>

        {/* View toggle — tablet/mobile only, and only when a map exists */}
        <button
          type='button'
          onClick={() => setMobileView((v) => (v === 'list' ? 'map' : 'list'))}
          className={cn(
            'absolute bottom-6 left-1/2 z-30 flex h-[44px] -translate-x-1/2 items-center gap-2 rounded-full bg-black px-5 text-[14px] font-semibold text-white shadow-lg lg:hidden',
            !hasResults && 'hidden'
          )}
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
  );
}
