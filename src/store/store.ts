import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';
import { createUserSlice, UserSlice } from './slices/user.slice';

export const useMyStore = create<UserSlice >()(
  devtools(
    persist(
      (...a) => ({
        // @ts-ignore
        ...createUserSlice(...a),
      }),
      {
        name: 'bound-storage',
      },
    ),
  ),
);
