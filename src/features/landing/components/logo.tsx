import Image from 'next/image';

import { cn } from '@/lib/utils';

interface LogoProps {
  label: string;
  className?: string;
}

export function Logo({ label, className }: LogoProps) {
  return (
    <span className={cn('inline-flex items-center', className)}>
      <Image
        src='/venuse.png'
        alt={label}
        width={645}
        height={432}
        priority
        className='h-9 w-auto lg:hidden'
      />
      <Image
        src='/venuehero.png'
        alt={label}
        width={188}
        height={33}
        priority
        className='hidden h-8 w-auto lg:block'
      />
    </span>
  );
}
