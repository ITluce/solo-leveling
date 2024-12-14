import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface UserState {
  height: number;
  weight: number;
  language: string;
  setUserData: (height: number, weight: number) => void;
  setLanguage: (lang: string) => void;
}

export const useUserStore = create<UserState>()(
  persist(
    (set) => ({
      height: 0,
      weight: 0,
      language: 'en',
      setUserData: (height, weight) => set({ height, weight }),
      setLanguage: (language) => set({ language })
    }),
    {
      name: 'user-storage'
    }
  )
)