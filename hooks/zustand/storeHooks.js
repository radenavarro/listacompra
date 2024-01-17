import { create } from 'zustand'
import uuid from 'react-native-uuid'

/**
 * <p>Estado empleado para manejar listas y sus ítems</p>
 * <p>Propiedades:</p>
 * <ul>
 * <li>currentItem</li>
 * <li>setCurrentItem</li>
 * <li>currentList</li>
 * <li>clearList</li>
 * <li>addToList</li>
 * <li>removeFromList</li>
 * <li>checkItem</li>
 * </ul>
 */
export const useListStore = create((set) => ({
  currentItem: {},
  setCurrentItem: (text) => set((state) => ({ currentItem: text })),
  currentList: [],
  clearList: () => set({ currentList: [] }),
  addToList: (text) => set((state) => ({
    currentList: [
      ...state.currentList,
      {
        uuid: uuid.v4(),
        nombre: text
      }
    ]
  })),
  removeFromList: (uuid) => set((state) => {
    const updtItems = [...state.currentList].filter((listElement) => listElement.uuid !== uuid)
    return {
      currentList: updtItems
    }
  }),
  checkItem: (uuid) => set((state) => {
    const updtItems = [...state.currentList]
    const idx = updtItems.findIndex((it) => it.uuid === uuid)
    if (idx !== -1) {
      updtItems[idx].checked = !updtItems[idx].checked
    }
    return {
      currentList: updtItems
    }
  })
}))
