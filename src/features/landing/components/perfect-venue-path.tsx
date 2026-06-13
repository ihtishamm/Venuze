import Image from 'next/image';

import { landingContent } from '../content';

export function PerfectVenuePath() {
  const { title, description, steps } = landingContent.perfectVenuePath;

  return (
    <section className='w-full bg-white'>
      <div className='mx-auto max-w-[1440px] px-4 py-16 sm:px-6 md:pb-[75px] lg:px-[81px]'>
        <div className='mx-auto max-w-[1200px] text-center'>
          <h2 className='font-poppins text-[28px] leading-[34px] font-semibold tracking-[0%] text-black sm:text-[36px] sm:leading-[42px] lg:text-[44px] lg:leading-[50px]'>
            {title}
          </h2>
          <p className='font-poppins mt-4 text-[15px] leading-[24px] font-normal text-black sm:text-[16px] lg:text-[18px] lg:leading-[28px]'>
            {description}
          </p>
        </div>

        <div className='mt-12 flex flex-col items-center gap-10 lg:flex-row lg:items-start lg:gap-16'>
          <div
            className='relative w-full max-w-[350px] shrink-0 sm:max-w-[440px] lg:max-w-[515px]'
            style={{ aspectRatio: '515 / 407' }}
          >
            {/* Left column — shifted down 10.97% */}
            <div className='absolute top-[10.97%] left-0 flex h-[89%] w-[48.54%] flex-col gap-[3.7%]'>
              <div className='relative flex-1 overflow-hidden rounded-[20px]'>
                <Image
                  src='/venue_people_2.png'
                  alt='People enjoying an event'
                  fill
                  sizes='(max-width: 640px) 45vw, 250px'
                  className='object-cover'
                />
              </div>
              <div className='relative flex-1 overflow-hidden rounded-[20px]'>
                <Image
                  src='/venue_people_1.png'
                  alt='Couple at a venue event'
                  fill
                  sizes='(max-width: 640px) 45vw, 250px'
                  className='object-cover'
                />
              </div>
            </div>

            {/* Right column — at top, left offset 51.46% */}
            <div className='absolute top-0 left-[51.46%] flex h-[89%] w-[48.54%] flex-col gap-[3.7%]'>
              <div className='relative flex-1 overflow-hidden rounded-[20px]'>
                <Image
                  src='/venue_people_4.png'
                  alt='Celebration at a venue'
                  fill
                  sizes='(max-width: 640px) 45vw, 250px'
                  className='object-cover'
                />
              </div>
              <div className='relative flex-1 overflow-hidden rounded-[20px]'>
                <Image
                  src='/venue_people_3.png'
                  alt='Event gathering'
                  fill
                  sizes='(max-width: 640px) 45vw, 250px'
                  className='object-cover'
                />
              </div>
            </div>

            {/* Center circle — Figma: 131×131, 10px solid #FFF border, white bg */}
            <div
              className='absolute z-10 flex aspect-square items-center justify-center rounded-full bg-white'
              style={{
                top: '31.7%',
                left: '36.5%',
                width: '25.44%',
                border: '10px solid #FFFFFF',
                boxShadow: '0px 4px 20px rgba(0,0,0,0.15)'
              }}
            >
              <div className='relative h-[55%] w-[55%]'>
                <Image
                  src='/vendor_center.png'
                  alt='Venue icon'
                  fill
                  className='object-contain'
                />
              </div>
            </div>
          </div>

          <div className='mt-10 w-full lg:flex-1'>
            {steps.map((step, index) => {
              const isLast = index === steps.length - 1;
              return (
                <div
                  key={step.number}
                  className='flex gap-[20px] lg:gap-[31px]'
                >
                  <div className='flex w-[40px] shrink-0 flex-col items-center lg:w-[50px]'>
                    <div
                      className='font-poppins flex h-[40px] w-[40px] shrink-0 items-center justify-center rounded-full text-[15px] font-semibold text-white lg:h-[50px] lg:w-[50px] lg:text-[16px]'
                      style={{
                        background:
                          'linear-gradient(270deg, #FE8B16 0%, #FF5039 100%)'
                      }}
                    >
                      {step.number}
                    </div>

                    {!isLast && (
                      <div
                        className='my-2 flex-1'
                        style={{
                          width: '2px',
                          minHeight: '40px',
                          backgroundImage:
                            'repeating-linear-gradient(to bottom, #A1A1A1 0px, #A1A1A1 7px, transparent 7px, transparent 10px)'
                        }}
                      />
                    )}
                  </div>

                  <div
                    className={`flex min-w-0 flex-col gap-[10px] ${!isLast ? 'pb-[40px]' : ''}`}
                  >
                    <h3
                      className='font-poppins text-[18px] leading-[24px] font-semibold text-black lg:text-[24px] lg:leading-[30px]'
                      style={{ letterSpacing: '-0.03em' }}
                    >
                      {step.title}
                    </h3>
                    <p
                      className='font-poppins text-[14px] leading-[22px] font-normal text-[#555555] lg:text-[16px] lg:leading-[24px]'
                      style={{ letterSpacing: '-0.03em' }}
                    >
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
