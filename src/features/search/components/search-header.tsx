'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Search } from 'lucide-react';

import { landingContent } from '@/features/landing/content';
import { AccountMenu } from '@/features/landing/components/account-menu';
import { Logo } from '@/features/landing/components/logo';
import { type SearchSummary } from '@/types/search';

export function SearchHeader({ summary }: { summary: SearchSummary }) {
  const { logo, addListing, language } = landingContent.navbar;

  return (
    <header className='sticky top-0 z-40 w-full border-b border-[#E5E5E5] bg-white shadow-[0px_4px_10px_0px_#0000001A]'>
      <div className='mx-auto flex h-[88px] max-w-[1440px] items-center justify-between gap-3 px-4 md:px-6'>
        <Link href='/' aria-label='Venuze home'>
          <Logo label={logo.label} />
        </Link>

        {/* Query summary — links home to edit the search */}
        <Link
          href='/'
          className='flex h-[44px] w-full max-w-[200px] items-center justify-between rounded-[10px] bg-white pr-1.5 pl-6 shadow-[0px_1px_4px_0px_#00000040] sm:max-w-[430px]'
        >
          <div className='hidden items-center gap-[30px] sm:flex'>
            <span className='text-[14px] leading-none font-medium text-black'>
              {summary.where}
            </span>
            <span className='h-[17px] w-px bg-[#DFDFDF]' />
            <span className='text-[14px] leading-none font-medium text-black'>
              {summary.when}
            </span>
            <span className='h-[17px] w-px bg-[#DFDFDF]' />
            <span className='text-[14px] leading-none font-medium text-black'>
              {summary.guests} Guests
            </span>
          </div>
          <span className='text-[14px] leading-none font-medium text-black sm:hidden'>
            Search venues
          </span>
          <span className='bg-primary flex size-[34px] items-center justify-center rounded-[10px] text-white'>
            <Search className='size-4' />
          </span>
        </Link>

        {/* Actions */}
        <div className='hidden items-center gap-3 lg:flex'>
          <button
            type='button'
            className='text-primary text-nav flex h-[40px] items-center gap-2 rounded-[10px] border border-[#E5E5E5] px-4 py-[10px] shadow-sm'
          >
            {addListing.label}
            <Image src='/downicon.svg' alt='' width={14} height={8} />
          </button>
          <button
            type='button'
            className='text-primary text-nav flex h-[40px] items-center gap-2 rounded-[10px] border border-[#E5E5E5] px-4 py-[10px] shadow-sm'
          >
            {language.label}
            <Image src='/downicon.svg' alt='' width={14} height={8} />
          </button>
          <AccountMenu className='border border-[#E5E5E5]' />
        </div>

        {/* Account only on mobile */}
        <AccountMenu className='border border-[#E5E5E5] lg:hidden' />
      </div>
    </header>
  );
}
