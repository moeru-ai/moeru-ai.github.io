import { useLocalStorage } from 'foxact/use-local-storage'

export const useAppearance = () =>
  useLocalStorage<'dark' | 'light' | 'system'>(
    'moetalk/theme/appearance',
    'system',
  )
