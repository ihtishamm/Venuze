import Image from 'next/image';
import { Menu, User } from 'lucide-react';

import { landingContent } from '../content';
import { Logo } from './logo';

/**
 * Public navbar. Rendered as a transparent overlay on top of the hero; it scrolls
 * away with the page (the white/sticky scrolled state is added in a later pass).
 */
export function Navbar() {
  const { logo, addListing, language } = landingContent.navbar;

  return (
    <header className='absolute inset-x-0 top-0 z-50'>
      <nav className='mx-auto flex max-w-[1440px] items-center justify-between px-4 py-5 md:px-8 lg:px-12'>
        <Logo label={logo.label} />

        {/* Desktop / tablet actions */}
        <div className='hidden items-center gap-3 md:flex'>
          <button
            type='button'
            className='text-primary text-nav flex h-[40px] items-center gap-2 rounded-[10px] bg-white px-4 py-[10px] shadow-sm'
          >
            {addListing.label}
            <Image src='/downicon.svg' alt='Expand' width={14} height={8} />
          </button>
          <button
            type='button'
            className='text-primary text-nav flex h-[40px] items-center gap-2 rounded-[10px] bg-white px-4 py-[10px] shadow-sm'
          >
            {language.label}
            <Image src='/downicon.svg' alt='Expand' width={14} height={8} />
          </button>
          <button
            type='button'
            aria-label='Account'
            className='text-primary flex size-[40px] items-center justify-center rounded-[10px] bg-white shadow-sm'
          >
            <User className='size-5' />
          </button>
        </div>

        {/* Mobile actions */}
        <div className='flex items-center gap-2 md:hidden'>
          <button
            type='button'
            className='text-black text-nav flex h-[40px] items-center gap-2 rounded-[10px] bg-white px-4 py-[10px] shadow-sm'
          >
            {addListing.label}
            <Image src='/downicon.svg' alt='Expand' width={14} height={8} />
          </button>
          <button
            type='button'
            aria-label='Open menu'
            className='text-black flex size-[40px] items-center justify-center rounded-[10px] bg-white shadow-sm'
          >
            <Menu className='size-5' />
          </button>
        </div>
      </nav>
    </header>
  );
}
