'use client';

import { Button } from '@/components/ui/button';
import { DataTableSkeleton } from '@/components/ui/table/data-table-skeleton';
import { useUsers } from '@/features/users/hooks/use-users';
import type { User } from '@/types/user';
import { IconAlertTriangle } from '@tabler/icons-react';
import { parseAsInteger, parseAsString, useQueryState } from 'nuqs';
import { UserModals } from './user-modals';
import { UserTable } from './user-tables';
import { columns } from './user-tables/columns';

/** Filter the full list by name/email — reqres has no server-side search. */
function filterUsers(users: User[], search: string | null): User[] {
  if (!search) return users;
  const query = search.toLowerCase();
  return users.filter(
    (user) =>
      `${user.firstName} ${user.lastName}`.toLowerCase().includes(query) ||
      user.email.toLowerCase().includes(query)
  );
}

export default function UserListingPage() {
  const { data: users, isLoading, isError, refetch } = useUsers();
  const [page] = useQueryState('page', parseAsInteger.withDefault(1));
  const [perPage] = useQueryState('perPage', parseAsInteger.withDefault(10));
  const [search] = useQueryState('name', parseAsString);

  if (isLoading) {
    return (
      <DataTableSkeleton columnCount={4} rowCount={8} filterCount={1} />
    );
  }

  if (isError) {
    return (
      <div className='flex flex-1 flex-col items-center justify-center gap-3 py-16 text-center'>
        <IconAlertTriangle className='text-destructive h-10 w-10' />
        <div>
          <p className='font-medium'>Failed to load users</p>
          <p className='text-muted-foreground text-sm'>
            Something went wrong while fetching the user list.
          </p>
        </div>
        <Button variant='outline' onClick={() => refetch()}>
          Try again
        </Button>
      </div>
    );
  }

  const allUsers = users ?? [];
  const filtered = filterUsers(allUsers, search);
  const start = (page - 1) * perPage;
  const pageRows = filtered.slice(start, start + perPage);

  return (
    <>
      <UserTable data={pageRows} totalItems={filtered.length} columns={columns} />
      <UserModals users={allUsers} />
    </>
  );
}
