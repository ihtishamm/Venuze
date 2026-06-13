import { useQuery } from '@tanstack/react-query';
import { getUser } from '@/features/users/api/users';
import { usersKeys } from '@/features/users/hooks/use-users';
import type { User } from '@/types/user';

/**
 * Fetch a single user for the detail view. When the user is already in the list
 * cache we seed it as `initialData` and skip the network call — this also covers
 * optimistically-created users that don't exist on reqres yet. Without a seed
 * (e.g. a deep link) the query runs and surfaces a real loading state.
 */
export function useUser(id: number | null, initialData?: User) {
  return useQuery({
    queryKey: usersKeys.detail(id ?? 0),
    queryFn: () => getUser(id as number),
    enabled: id != null && !initialData,
    initialData,
    staleTime: Infinity
  });
}
