import { useQuery } from '@tanstack/react-query';
import { getAllUsers } from '@/features/users/api/users';

export const usersKeys = {
  all: ['users'] as const,
  detail: (id: number) => ['users', id] as const
};

/**
 * Fetch the full user list once. reqres is non-persistent, so we treat this
 * cached array as the session source of truth: mutations patch it optimistically
 * and we deliberately don't refetch (a refetch would discard those writes).
 */
export function useUsers() {
  return useQuery({
    queryKey: usersKeys.all,
    queryFn: getAllUsers,
    staleTime: Infinity,
    refetchOnWindowFocus: false
  });
}
