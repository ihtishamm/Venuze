'use client';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Modal } from '@/components/ui/modal';
import { Skeleton } from '@/components/ui/skeleton';
import { useUser } from '@/features/users/hooks/use-user';
import { useUsersUiStore } from '@/features/users/store/users-ui-store';
import type { User } from '@/types/user';

interface UserDetailModalProps {
  open: boolean;
  userId: number | null;
  /** Seed from the list cache so the view renders instantly with no fetch. */
  cachedUser: User | null;
}

export function UserDetailModal({
  open,
  userId,
  cachedUser
}: UserDetailModalProps) {
  const close = useUsersUiStore((s) => s.close);
  const { data: user, isLoading } = useUser(
    open ? userId : null,
    cachedUser ?? undefined
  );

  return (
    <Modal
      title='User details'
      description='Read-only view of this user.'
      isOpen={open}
      onClose={close}
    >
      {isLoading ? (
        <DetailSkeleton />
      ) : user ? (
        <div className='space-y-6'>
          <div className='flex items-center gap-4'>
            <Avatar className='h-16 w-16'>
              <AvatarImage
                src={user.avatar}
                alt={`${user.firstName} ${user.lastName}`}
              />
              <AvatarFallback className='text-lg'>
                {user.firstName?.[0]}
                {user.lastName?.[0]}
              </AvatarFallback>
            </Avatar>
            <div>
              <p className='text-lg font-semibold'>
                {user.firstName} {user.lastName}
              </p>
              <p className='text-muted-foreground text-sm'>{user.email}</p>
            </div>
          </div>
          <dl className='grid grid-cols-3 gap-2 text-sm'>
            <DetailRow label='User ID' value={String(user.id)} />
            <DetailRow label='First name' value={user.firstName} />
            <DetailRow label='Last name' value={user.lastName} />
            <DetailRow label='Email' value={user.email} />
          </dl>
        </div>
      ) : (
        <p className='text-muted-foreground py-6 text-center text-sm'>
          User not found.
        </p>
      )}
    </Modal>
  );
}

function DetailRow({ label, value }: { label: string; value: string }) {
  return (
    <>
      <dt className='text-muted-foreground col-span-1'>{label}</dt>
      <dd className='col-span-2 font-medium break-all'>{value}</dd>
    </>
  );
}

function DetailSkeleton() {
  return (
    <div className='space-y-6'>
      <div className='flex items-center gap-4'>
        <Skeleton className='h-16 w-16 rounded-full' />
        <div className='space-y-2'>
          <Skeleton className='h-5 w-40' />
          <Skeleton className='h-4 w-52' />
        </div>
      </div>
      <div className='space-y-2'>
        {Array.from({ length: 4 }).map((_, i) => (
          <Skeleton key={i} className='h-4 w-full' />
        ))}
      </div>
    </div>
  );
}
