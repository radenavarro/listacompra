import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'
import uuid from 'react-native-uuid'
import AsyncStorage from '@react-native-async-storage/async-storage'
import dayjs from 'dayjs'

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
export const useListStore = create(
  persist(
    (set) => ({
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
    })
    ,
    {
      name: 'list-storage',
      storage: createJSONStorage(() => AsyncStorage)
    }
  )
)

export const useArchiveStore = create(
  persist(
    (set) => ({
      archivedList: [],
      addToArchive: (list) => set((state) => {
        return {
          archivedList: [
            ...state.archivedList,
            {
              list_uuid: uuid.v4(),
              fecha: dayjs().format('DD-MM-YYYY | HH:mm:ss'),
              items: [...list]
            }
          ]
        }
      }),
      // removeFromArchive: (listUuid) => set((state) => {
      //   const updtItems = [...state.archivedList].filter((list) => list.list_uuid !== listUuid)
      //   return {
      //     archivedList: updtItems
      //   }
      // })
      removeFromArchive: (listUuid) => set({ archivedList: [] })
    }),
    {
      name: 'archive-storage',
      storage: createJSONStorage(() => AsyncStorage)
    }
  )
)
