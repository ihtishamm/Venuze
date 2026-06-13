'use client';

import { Modal } from '@/components/ui/modal';
import { useCreateUser } from '@/features/users/hooks/use-user-mutations';
import { useUsersUiStore } from '@/features/users/store/users-ui-store';
import { UserForm, type UserFormValues } from './user-form';

export function AddUserModal({ open }: { open: boolean }) {
  const close = useUsersUiStore((s) => s.close);
  const { mutate, isPending } = useCreateUser();

  const handleSubmit = (values: UserFormValues) => {
    mutate(values, { onSuccess: () => close() });
  };

  return (
    <Modal
      title='Add user'
      description='Create a new user account.'
      isOpen={open}
      onClose={close}
    >
      <UserForm
        onSubmit={handleSubmit}
        isSubmitting={isPending}
        submitLabel='Create user'
      />
    </Modal>
  );
}
