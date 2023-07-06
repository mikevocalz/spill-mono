import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'
import AsyncStorage from '@react-native-async-storage/async-storage'

import { createExpandedStore, ExpandSlice } from './expandStore'

type StoreState = ExpandSlice

const options = {
  name: 'app-storage',
  storage: createJSONStorage(() => AsyncStorage),
}

export const useAppStore = create<StoreState>()(
  persist(
    (...store) => ({
      ...createExpandedStore(...store),
    }),
    options
  )
)
