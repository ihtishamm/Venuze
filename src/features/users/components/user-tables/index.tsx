'use client';

import { Button } from '@/components/ui/button';
import { DataTable } from '@/components/ui/table/data-table';
import { DataTableToolbar } from '@/components/ui/table/data-table-toolbar';
import { useUsersUiStore } from '@/features/users/store/users-ui-store';
import { useDataTable } from '@/hooks/use-data-table';
import { ColumnDef } from '@tanstack/react-table';
import { IconPlus } from '@tabler/icons-react';
import { parseAsInteger, useQueryState } from 'nuqs';

interface UserTableParams<TData, TValue> {
  data: TData[];
  totalItems: number;
  columns: ColumnDef<TData, TValue>[];
}
export function UserTable<TData, TValue>({
  data,
  totalItems,
  columns
}: UserTableParams<TData, TValue>) {
  const openAdd = useUsersUiStore((s) => s.openAdd);
  const [pageSize] = useQueryState('perPage', parseAsInteger.withDefault(10));

  const pageCount = Math.ceil(totalItems / pageSize);

  const { table } = useDataTable({
    data, // current page of users (sliced client-side)
    columns, // user columns
    pageCount: pageCount,
    shallow: false, //Setting to false triggers a network request with the updated querystring.
    debounceMs: 500
  });

  return (
    <DataTable table={table}>
      <DataTableToolbar table={table}>
        <Button size='sm' onClick={openAdd}>
          <IconPlus className='mr-1 h-4 w-4' />
          Add User
        </Button>
      </DataTableToolbar>
    </DataTable>
  );
}
