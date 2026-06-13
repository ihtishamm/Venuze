'use client';

import { useUsersUiStore } from '@/features/users/store/users-ui-store';
import type { User } from '@/types/user';
import { AddUserModal } from './add-user-modal';
import { EditUserModal } from './edit-user-modal';
import { UserDetailModal } from './user-detail-modal';

/** Mounts the add/edit/detail modals once and drives them from the UI store. */
export function UserModals({ users }: { users: User[] }) {
  const mode = useUsersUiStore((s) => s.mode);
  const selectedUserId = useUsersUiStore((s) => s.selectedUserId);
  const selectedUser =
    users.find((user) => user.id === selectedUserId) ?? null;

  return (
    <>
      <AddUserModal open={mode === 'add'} />
      <EditUserModal open={mode === 'edit'} user={selectedUser} />
      <UserDetailModal
        open={mode === 'view'}
        userId={selectedUserId}
        cachedUser={selectedUser}
      />
    </>
  );
}
