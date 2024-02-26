import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'
import uuid from 'react-native-uuid'
import AsyncStorage from '@react-native-async-storage/async-storage'
import dayjs from 'dayjs'
import { sumStock, substractStock } from '../../helpers/helpers'

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
      setCurrentList: (list) => set((state) => ({ currentList: list })),
      clearList: () => set({ currentList: [] }),
      addToList: (uuid, text, amount) => set((state) => ({
        currentList: [
          ...state.currentList,
          {
            uuid,
            nombre: text,
            cantidad: amount
          }
        ]
      })),
      removeFromList: (uuid) => set((state) => {
        const updtItems = [...state.currentList].filter((listElement) => listElement.uuid !== uuid)
        return {
          currentList: updtItems
        }
      }),
      modifyFromList: (item) => set((state) => {
        const updtItems = [...state.currentList]
        const idx = updtItems.findIndex((listItem) => listItem.uuid === item.uuid)
        if (idx !== -1) {
          updtItems[idx] = item
        }
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
      }),
      addOne: (uuid) => set((state) => {
        const products = [...state.currentList]
        const idx = products.findIndex((p) => p.uuid === uuid)
        if (idx !== -1) {
          products[idx].cantidad = (parseInt(products[idx].cantidad) + 1)?.toString()
        }
        return { currentList: products }
      }),
      substractOne: (uuid) => set((state) => {
        const products = [...state.currentList]
        const idx = products.findIndex((p) => p.uuid === uuid)
        if (idx !== -1) {
          products[idx].cantidad -= 1
        }
        return { currentList: products.filter((p) => p.cantidad > 0) }
      })
    }),
    {
      name: 'list-storage',
      storage: createJSONStorage(() => AsyncStorage)
    }
  )
)

export const useArchiveStore = create(
  persist(
    (set) => ({
      activeUuidList: undefined,
      setActiveUuidList: (uuid) => set((state) => ({ activeUuidList: uuid })),
      archivedList: [],
      addToArchive: (list) => set((state) => {
        return {
          archivedList: [
            {
              list_uuid: uuid.v4(),
              fecha: dayjs().format('DD-MM-YYYY | HH:mm:ss'),
              items: [...list]
            },
            ...state.archivedList
          ]
        }
      }),
      removeFromArchive: (listUuid) => set((state) => {
        const updtItems = [...state.archivedList].filter((list) => list.list_uuid !== listUuid)
        return {
          archivedList: updtItems
        }
      })
      // removeFromArchive: (listUuid) => set({ archivedList: [] })
    }),
    {
      name: 'archive-storage',
      storage: createJSONStorage(() => AsyncStorage)
    }
  )
)

export const useProductStore = create(
  persist(
    (set) => ({
      productList: [],
      addOne: (uuid) => set((state) => {
        const products = [...state.productList]
        const idx = products.findIndex((p) => p.uuid === uuid)
        if (idx !== -1) {
          products[idx].cantidad = (parseInt(products[idx].cantidad) + 1)?.toString()
        }
        return { productList: products }
      }),
      substractOne: (uuid) => set((state) => {
        const products = [...state.productList]
        const idx = products.findIndex((p) => p.uuid === uuid)
        if (idx !== -1) {
          products[idx].cantidad -= 1
        }
        return { productList: products.filter((p) => p.cantidad > 0) }
      }),
      addProducts: (productsInList) => set((state) => {
        const products = [...state.productList]
        const merged = sumStock(productsInList, products, 'uuid', 'cantidad')
        return {
          productList: merged
        }
      }),
      removeProduct: (product) => set((state) => {
        const products = substractStock([...state.productList], [product], 'uuid', 'cantidad')
        return { productList: products }
      }),
      clearStock: (uuid) => set((state) => {
        const newList = [...state.productList]
        const idx = newList.findIndex((pr) => pr.uuid === uuid)
        if (idx !== -1) {
          newList.splice(idx, 1)
        }
        return { productList: newList }
      }),
      removeAllProducts: () => set((state) => ({ productList: [] }))
    }),
    {
      name: 'product-storage',
      storage: createJSONStorage(() => AsyncStorage)
    }
  )
)

export const useVoiceRecogFields = create(
  (set) => ({
    product: undefined,
    amount: 1,
    setProduct: (text) => set((state) => ({ product: text })),
    setAmount: (qty) => set((state) => ({ amount: qty }))
  })
)
