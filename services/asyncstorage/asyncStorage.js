import AsyncStorage from '@react-native-async-storage/async-storage'
import dayjs from 'dayjs'

export async function getItem (item) {
  try {
    const itemToReturn = await AsyncStorage.getItem(item)
    return itemToReturn
  } catch (e) {
    console.error(e)
  }
}

export async function setItem (key, value) {
  try {
    await AsyncStorage.setItem(key, value)
    return true
  } catch (error) {
    console.log(error.message)
  }
}

export async function archivarLista (lista) {
  try {
    const time = dayjs()
    const dates = [time.startOf('month'), time.endOf('month')]
    const listas = AsyncStorage.getItem(`lista_${dates[0].format('DD-MM-YYYY')}-${dates[1].format('DD-MM-YYYY')}`)
    listas.push(lista)
    AsyncStorage.setItem(`lista_${dates[0].format('DD-MM-YYYY')}-${dates[1].format('DD-MM-YYYY')}`, listas)

    return true
  } catch (error) {
    console.log(error.message)
  }
}
