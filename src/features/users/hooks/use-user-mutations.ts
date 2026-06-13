import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'sonner';
import { createUser, deleteUser, updateUser } from '@/features/users/api/users';
import { usersKeys } from '@/features/users/hooks/use-users';
import type { User, UserInput } from '@/types/user';

/** Map the UI form fields onto the reqres `{ name, job }` write DTO. */
function toDto(input: UserInput) {
  return {
    name: `${input.firstName} ${input.lastName}`.trim(),
    job: input.job?.trim() ?? ''
  };
}

function useUsersMutation<TVars>(
  mutationFn: (vars: TVars) => Promise<unknown>,
  applyOptimistic: (current: User[], vars: TVars) => User[],
  successMessage: string
) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn,
    onMutate: async (vars: TVars) => {
      await queryClient.cancelQueries({ queryKey: usersKeys.all });
      const previous = queryClient.getQueryData<User[]>(usersKeys.all);
      queryClient.setQueryData<User[]>(usersKeys.all, (current = []) =>
        applyOptimistic(current, vars)
      );
      return { previous };
    },
    onError: (_error, _vars, context) => {
      if (context?.previous) {
        queryClient.setQueryData(usersKeys.all, context.previous);
      }
    },
    onSuccess: () => toast.success(successMessage)
  });
}

export function useCreateUser() {
  return useUsersMutation<UserInput>(
    (input) => createUser(toDto(input)),
    (current, input) => [
      {
        // reqres returns a random id we can't reuse for later edits, so we mint
        // a stable client-side id instead.
        id: Date.now(),
        email: input.email,
        firstName: input.firstName,
        lastName: input.lastName,
        avatar: ''
      },
      ...current
    ],
    'User created successfully'
  );
}

export function useUpdateUser() {
  return useUsersMutation<UserInput & { id: number }>(
    ({ id, ...input }) => updateUser(id, toDto(input)),
    (current, { id, firstName, lastName, email }) =>
      current.map((user) =>
        user.id === id ? { ...user, firstName, lastName, email } : user
      ),
    'User updated successfully'
  );
}

export function useDeleteUser() {
  return useUsersMutation<number>(
    (id) => deleteUser(id),
    (current, id) => current.filter((user) => user.id !== id),
    'User deleted successfully'
  );
}
