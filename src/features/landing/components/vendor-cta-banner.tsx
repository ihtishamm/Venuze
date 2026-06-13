import Image from 'next/image';

import { landingContent } from '../content';

interface CtaBannerProps {
  title: string;
  description: string;
  buttonLabel: string;
  illustrationSrc: string;
  illustrationAlt: string;
  vectorSrc?: string;
  gradient?: string;
  topBg?: string;
  bottomBg?: string;
}

export function CtaBanner({
  title,
  description,
  buttonLabel,
  illustrationSrc,
  illustrationAlt,
  vectorSrc,
  gradient = 'linear-gradient(90deg, #FF786A 0%, #FF4F37 50%, #FFC331 100%)',
  topBg = '#FDF1D2',
  bottomBg = '#FFFFFF'
}: CtaBannerProps) {
  return (
    <section className='relative w-full'>
      <div
        aria-hidden
        className='absolute inset-x-0 top-0 h-1/2'
        style={{ backgroundColor: topBg }}
      />
      <div
        aria-hidden
        className='absolute inset-x-0 bottom-0 h-1/2'
        style={{ backgroundColor: bottomBg }}
      />
      <div className='relative mx-auto max-w-[1440px] px-4 py-[36px] md:px-[55px] md:py-[40px] lg:px-[81px]'>
        <div
          className='relative overflow-hidden rounded-[20px] md:h-[230px] xl:h-[300px]'
          style={{ background: gradient }}
        >
          {/* ── MOBILE (< md) ─────────────────────────────────── */}
          <div className='flex flex-col items-center gap-4 px-6 pt-8 pb-4 text-center md:hidden'>
            <h2 className='text-[28px] leading-[34px] font-semibold text-white'>
              {title}
            </h2>
            <p className='text-[15px] leading-[22px] font-medium text-white'>
              {description}
            </p>
            <button
              type='button'
              className='flex h-[48px] w-[220px] items-center justify-center rounded-[10px] bg-black text-[16px] text-white'
            >
              {buttonLabel}
            </button>
            <Image
              src={illustrationSrc}
              alt={illustrationAlt}
              width={447}
              height={204}
              className='w-full max-w-[380px] object-contain'
            />
          </div>

          {/* ── TABLET (md – xl) ──────────────────────────────── */}

          <div className='hidden h-full md:flex xl:hidden'>
            <div className='flex w-1/2 shrink-0 flex-col justify-center gap-2.5 py-6 pr-4 pl-[45px]'>
              <h2 className='text-[24px] leading-[30px] font-semibold text-white'>
                {title}
              </h2>
              <p className='text-[13px] leading-[18px] font-medium text-white'>
                {description}
              </p>
              <button
                type='button'
                className='flex h-[40px] w-[160px] items-center justify-center rounded-[10px] bg-black text-[13px] text-white'
              >
                {buttonLabel}
              </button>
            </div>

            <div className='relative flex min-w-0 flex-1 items-end justify-end'>
              {vectorSrc && (
                <div className='absolute top-[45px] left-2'>
                  <Image
                    src={vectorSrc}
                    alt=''
                    width={82}
                    height={25}
                    className='h-auto w-[70px] object-contain'
                  />
                </div>
              )}
              <Image
                src={illustrationSrc}
                alt={illustrationAlt}
                width={447}
                height={204}
                className='h-full max-h-[210px] w-auto object-contain object-bottom'
              />
            </div>
          </div>

          {/* ── DESKTOP (xl+) — exact Figma absolute layout ───── */}

          <div className='absolute top-[30px] left-[88px] hidden w-[713px] flex-col gap-3 xl:flex'>
            <h2 className='text-[44px] leading-[50px] font-semibold tracking-[0%] text-white'>
              {title}
            </h2>
            <p className='text-[20px] leading-[30px] font-medium text-white'>
              {description}
            </p>
            <button
              type='button'
              className='flex h-[50px] w-[242px] items-center justify-center rounded-[10px] bg-black text-[20px] leading-[120%] text-white'
            >
              {buttonLabel}
            </button>
          </div>

          {/* Vector — Figma desktop: 197×57, top 170, left 586 */}
          {vectorSrc && (
            <div className='absolute top-[170px] left-[586px] hidden xl:block'>
              <Image
                src={vectorSrc}
                alt=''
                width={197}
                height={57}
                className='object-contain'
              />
            </div>
          )}

          <div className='absolute top-[96px] left-[792px] hidden xl:block'>
            <Image
              src={illustrationSrc}
              alt={illustrationAlt}
              width={446}
              height={207}
              className='object-contain'
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export function VendorCtaBanner() {
  const { title, description, buttonLabel } = landingContent.vendorCtaBanner;
  return (
    <CtaBanner
      title={title}
      description={description}
      buttonLabel={buttonLabel}
      illustrationSrc='/vendorcard.png'
      illustrationAlt='Grow your business with Venuze'
      vectorSrc='/vendor_vector.png'
    />
  );
}
