'use client';

import { type ComponentType, type FormEvent } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Facebook, Instagram } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { type SocialPlatform } from '@/types/landing-page';

import { landingContent } from '../content';

function XIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox='0 0 24 24'
      fill='currentColor'
      aria-hidden
      className={className}
    >
      <path d='M18.244 2.25h3.308l-7.227 8.26 8.502 11.24h-6.66l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231 5.45-6.231Zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77Z' />
    </svg>
  );
}

const socialIcons: Record<
  SocialPlatform,
  ComponentType<{ className?: string }>
> = {
  x: XIcon,
  facebook: ({ className }) => <Facebook className={className} />,
  instagram: ({ className }) => <Instagram className={className} />
};

export function Footer() {
  const { tagline, columns, contact, socials, copyright } =
    landingContent.footer;

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    event.currentTarget.reset();
  };

  return (
    <footer className='relative z-10 -mt-[80px] w-full rounded-t-[50px] bg-black text-white lg:-mt-[140px]'>
      <div className='mx-auto max-w-[1440px] px-6 pt-[140px] pb-[40px] sm:px-10 lg:px-[81px] lg:pt-[200px]'>
        <div className='grid grid-cols-1 gap-x-[80px] gap-y-[48px] lg:grid-cols-2'>
          {/* ── Left: logo, tagline, link columns ─────────────── */}
          <div className='flex flex-col gap-[40px]'>
            <div className='flex items-center gap-[18px]'>
              <Image
                src='/venuse.png'
                alt='Venuze'
                width={645}
                height={432}
                className='h-[44px] w-auto'
              />
              <p className='font-poppins max-w-[565px] text-[24px] leading-[45px] font-semibold text-white'>
                {tagline}
              </p>
            </div>

            <nav className='grid grid-cols-2 gap-x-[40px] gap-y-[32px] sm:grid-cols-4'>
              {columns.map((column) => (
                <div
                  key={column.title}
                  className='flex w-[156px] flex-col gap-[14px]'
                >
                  <h3 className='font-poppins text-[20px] leading-[120%] font-normal text-[#A6A6A6]'>
                    {column.title}
                  </h3>
                  <ul className='flex flex-col gap-[7px]'>
                    {column.links.map((link) => (
                      <li key={link.label}>
                        <Link
                          href={link.href}
                          className='font-poppins text-[12px] leading-[175%] font-normal text-white transition-opacity hover:opacity-70'
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </nav>
          </div>

          {/* ── Right: Get in Touch form ──────────────────────── */}
          <div className='flex flex-col gap-[16px] lg:max-w-[516px] lg:justify-self-end'>
            <h2 className='font-poppins text-[24px] leading-[30px] font-semibold text-white'>
              {contact.heading}
            </h2>
            <form className='flex flex-col gap-[16px]' onSubmit={handleSubmit}>
              <Input
                type='email'
                name='email'
                required
                placeholder={contact.emailPlaceholder}
                aria-label={contact.emailPlaceholder}
                className='h-[44px] rounded-[10px] border-[#2B2B2B] bg-[#141414] px-[20px] text-[16px] text-white placeholder:text-[#8A8A8A] md:text-[16px]'
              />
              <Textarea
                name='message'
                required
                placeholder={contact.messagePlaceholder}
                aria-label={contact.messagePlaceholder}
                className='min-h-[148px] resize-none rounded-[10px] border-[#2B2B2B] bg-[#141414] px-[20px] py-[16px] text-[16px] text-white placeholder:text-[#8A8A8A] md:text-[16px]'
              />
              <Button
                type='submit'
                className='h-[48px] self-end rounded-[10px] bg-[#FF4F37] px-[32px] text-[16px] font-semibold text-white hover:bg-[#FF4F37]/90'
              >
                {contact.submitLabel}
              </Button>
            </form>
          </div>
        </div>

        {/* ── Divider ─────────────────────────────────────────── */}
        <hr className='mt-[40px] border-t border-[#2B2B2B]' />

        {/* ── Socials + copyright ─────────────────────────────── */}
        <div className='mt-[24px] flex flex-col items-start gap-[20px] sm:flex-row sm:items-center sm:justify-between'>
          <div className='flex items-center gap-[24px]'>
            {socials.map((social) => {
              const Icon = socialIcons[social.id];
              return (
                <Link
                  key={social.id}
                  href={social.href}
                  aria-label={social.label}
                  className='text-white transition-opacity hover:opacity-70'
                >
                  <Icon className='h-[20px] w-[20px]' />
                </Link>
              );
            })}
          </div>
          <p className='text-[14px] leading-[20px] font-normal text-[#B3B3B3]'>
            {copyright}
          </p>
        </div>
      </div>
    </footer>
  );
}
