'use client';

import { LayoutDashboard, LogIn, LogOut, User } from 'lucide-react';
import { useRouter } from 'next/navigation';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';
import { useAuthStore } from '@/features/auth/store/auth-store';
import { cn } from '@/lib/utils';

/**
 * Account dropdown for the public navbar. Signed out → a Login entry that routes
 * to the sign-in page. Signed in → the user's details plus dashboard / sign-out.
 */
export function AccountMenu({
  className,
  icon,
  ariaLabel
}: {
  className?: string;
  /** Trigger icon — defaults to a user icon; the mobile navbar passes a menu icon. */
  icon?: React.ReactNode;
  ariaLabel?: string;
}) {
  const user = useAuthStore((s) => s.user);
  const logout = useAuthStore((s) => s.logout);
  const router = useRouter();

  const handleSignOut = () => {
    logout();
    router.refresh();
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button
          type='button'
          aria-label={ariaLabel ?? (user ? 'Account' : 'Login')}
          className={cn(
            'text-primary flex size-[40px] items-center justify-center rounded-[10px] bg-white shadow-sm outline-none',
            className
          )}
        >
          {icon ?? <User className='size-5' />}
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className='w-56' align='end' sideOffset={10}>
        {user ? (
          <>
            <DropdownMenuLabel className='font-normal'>
              <div className='flex flex-col space-y-1'>
                <p className='text-sm leading-none font-medium'>{user.name}</p>
                <p className='text-muted-foreground text-xs leading-none'>
                  {user.email}
                </p>
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem
                onClick={() => router.push('/dashboard/overview')}
              >
                <LayoutDashboard className='mr-2 size-4' />
                Dashboard
              </DropdownMenuItem>
              <DropdownMenuItem onClick={handleSignOut}>
                <LogOut className='mr-2 size-4' />
                Sign out
              </DropdownMenuItem>
            </DropdownMenuGroup>
          </>
        ) : (
          <DropdownMenuItem onClick={() => router.push('/auth/sign-in')}>
            <LogIn className='mr-2 size-4' />
            Login
          </DropdownMenuItem>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
