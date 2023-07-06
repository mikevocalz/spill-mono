import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { createExpandedStore, ExpandSlice } from './expandStore'

type StoreState = ExpandSlice

const options = {
  name: 'app-storage',
}

export const useAppStore = create<StoreState>()(
  persist(
    (...store) => ({
      ...createExpandedStore(...store),
    }),
    options
  )
)
