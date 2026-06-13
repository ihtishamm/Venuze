import { create } from 'zustand';

type UserModalMode = 'add' | 'edit' | 'view';

interface UsersUiState {
  /** Which modal is open, or `null` when none. */
  mode: UserModalMode | null;
  /** The user the edit/view modal targets. */
  selectedUserId: number | null;

  openAdd: () => void;
  openEdit: (id: number) => void;
  openView: (id: number) => void;
  close: () => void;
}

/** UI-only state for the user-management modals (kept out of the URL/cache). */
export const useUsersUiStore = create<UsersUiState>((set) => ({
  mode: null,
  selectedUserId: null,
  openAdd: () => set({ mode: 'add', selectedUserId: null }),
  openEdit: (id) => set({ mode: 'edit', selectedUserId: id }),
  openView: (id) => set({ mode: 'view', selectedUserId: id }),
  close: () => set({ mode: null, selectedUserId: null })
}));
