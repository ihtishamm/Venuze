import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Suspense } from 'react';
import UserAuthForm from './user-auth-form';

export const metadata: Metadata = {
  title: 'Sign in',
  description: 'Sign in to your Venuze account.'
};

export default function SignInViewPage() {
  return (
    <div className='relative grid h-screen w-full lg:grid-cols-[1.05fr_1fr]'>
      {/* Left: editorial venue panel — desktop only */}
      <aside className='relative hidden overflow-hidden lg:block'>
        <Image
          src='/hero.jpg'
          alt=''
          fill
          priority
          sizes='55vw'
          className='object-cover'
        />
        {/* Warm brand-tinted gradient so the wordmark and card stay legible */}
        <div
          aria-hidden
          className='absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-black/45'
        />
        <div
          aria-hidden
          className='absolute inset-0 bg-[#FF5037]/10 mix-blend-overlay'
        />

        <div className='relative z-10 flex h-full flex-col justify-between p-10 xl:p-12'>
          <Link href='/' className='inline-flex w-fit items-center'>
            <Image
              src='/venuehero.png'
              alt='Venuze'
              width={188}
              height={33}
              priority
              className='h-8 w-auto'
            />
          </Link>

          <div className='max-w-md space-y-8'>
            <h2 className='text-[40px] leading-[1.1] font-semibold tracking-[-0.03em] text-white xl:text-[48px]'>
              Celebrate in venues big and small.
            </h2>

            {/* Frosted-glass testimonial — real face, name, outcome */}
            <figure className='rounded-2xl border border-white/20 bg-white/10 p-6 shadow-2xl backdrop-blur-md'>
              <Image
                src='/stars.svg'
                alt='5 out of 5 stars'
                width={80}
                height={16}
                className='mb-4'
              />
              <blockquote className='text-[15px] leading-relaxed font-medium text-white/95'>
                &ldquo;Booked our entire gala venue in minutes. Venuze turned a
                week of back-and-forth into a single afternoon.&rdquo;
              </blockquote>
              <figcaption className='mt-5 flex items-center gap-3'>
                <Image
                  src='/ayesha.png'
                  alt=''
                  width={40}
                  height={40}
                  className='size-10 rounded-full object-cover'
                />
                <div className='text-sm'>
                  <div className='font-semibold text-white'>Ayesha Khan</div>
                  <div className='text-white/70'>Event Planner · Dubai</div>
                </div>
              </figcaption>
            </figure>
          </div>
        </div>
      </aside>

      {/* Right: form */}
      <main className='relative flex h-full items-center justify-center px-4 py-10 sm:px-8'>
        <Link
          href='/'
          className={cn(
            buttonVariants({ variant: 'ghost' }),
            'text-muted-foreground absolute top-6 right-6 hidden lg:inline-flex'
          )}
        >
          Back to home
        </Link>

        <div className='flex w-full max-w-[400px] flex-col'>
          {/* Brand mark — shown here only when the photo panel is hidden */}
          <Image
            src='/venuse.png'
            alt='Venuze'
            width={645}
            height={432}
            priority
            className='mb-8 h-9 w-auto self-center lg:hidden'
          />

          <div className='mb-8 space-y-2'>
            <h1 className='text-3xl font-semibold tracking-tight'>
              Welcome back
            </h1>
            <p className='text-muted-foreground text-sm'>
              Sign in to continue to your Venuze account.
            </p>
          </div>

          <Suspense fallback={null}>
            <UserAuthForm />
          </Suspense>
        </div>
      </main>
    </div>
  );
}
