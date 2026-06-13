'use client';

import { Modal } from '@/components/ui/modal';
import { useUpdateUser } from '@/features/users/hooks/use-user-mutations';
import { useUsersUiStore } from '@/features/users/store/users-ui-store';
import type { User } from '@/types/user';
import { UserForm, type UserFormValues } from './user-form';

interface EditUserModalProps {
  open: boolean;
  user: User | null;
}

export function EditUserModal({ open, user }: EditUserModalProps) {
  const close = useUsersUiStore((s) => s.close);
  const { mutate, isPending } = useUpdateUser();

  if (!user) return null;

  const handleSubmit = (values: UserFormValues) => {
    mutate({ id: user.id, ...values }, { onSuccess: () => close() });
  };

  return (
    <Modal
      title='Edit user'
      description='Update this user’s information.'
      isOpen={open}
      onClose={close}
    >
      <UserForm
        defaultValues={{
          firstName: user.firstName,
          lastName: user.lastName,
          email: user.email
        }}
        onSubmit={handleSubmit}
        isSubmitting={isPending}
        submitLabel='Save changes'
      />
    </Modal>
  );
}
