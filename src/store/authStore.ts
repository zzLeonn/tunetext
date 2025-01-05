import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface AuthState {
  accessToken: string | null;
  refreshToken: string | null;
  expiresAt: number | null;
  setTokens: (tokens: { accessToken: string; refreshToken: string; expiresIn: number }) => void;
  clearTokens: () => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      accessToken: null,
      refreshToken: null,
      expiresAt: null,
      setTokens: ({ accessToken, refreshToken, expiresIn }) => {
        set({
          accessToken,
          refreshToken,
          expiresAt: Date.now() + expiresIn * 1000,
        });
      },
      clearTokens: () => {
        set({
          accessToken: null,
          refreshToken: null,
          expiresAt: null,
        });
      },
    }),
    {
      name: 'auth-storage',
    }
  )
);

