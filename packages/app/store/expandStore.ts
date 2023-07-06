import { StateCreator } from 'zustand'

export interface ExpandSlice {
  isExpanded: boolean
  toggleExpansion: () => void
}

export const createExpandedStore: StateCreator<ExpandSlice> = (set, get) => ({
  isExpanded: true,
  toggleExpansion: () =>
    set((state) => ({ isExpanded:  !state.isExpanded })),
})
