import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';
import { createUserSlice, type UserSlice } from './slices/user.slice';

export const useMyStore = create<UserSlice >()(
  devtools(
    persist(
      (...a) => ({
        ...createUserSlice(...a),
      }),
      {
        name: 'bound-storage',
      },
    ),
  ),
);
