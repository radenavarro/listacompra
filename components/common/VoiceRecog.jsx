import { SafeAreaView, Text, TextInput, TouchableOpacity, View, ActivityIndicator, FlatList } from 'react-native'
import { useCallback, useEffect, useState } from 'react'
import ToastManager, { Toast } from 'toastify-react-native'
import uuid from 'react-native-uuid'
import Voice from '@react-native-community/voice'
import { voiceRecogStyles } from './VoiceRecog-styles'
import { useTheme } from '@react-navigation/native'
import Icon from 'react-native-vector-icons/MaterialIcons'
// Zustand store
import { useListStore, useProductStore, useVoiceRecogFields } from '../../hooks/zustand/storeHooks'
import { debounce } from '../../helpers/helpers'
import { locales, numbers } from '../../helpers/diccionario'

const VoiceRecog = (props) => {
  const [result, setResult] = useState('')
  // const [amount, setAmount] = useState('1')
  const [isLoading, setLoading] = useState(false)
  const [searchResult, setSearchResult] = useState([])
  const [stateLocale, setStateLocale] = useState(locales.es)// TODO: multilenguaje

  const { product, amount, setProduct, setAmount } = useVoiceRecogFields()
  // const { setCurrentList, addToList } = useListStore()
  const { productList } = useProductStore()

  useEffect(() => {
    Voice.onSpeechStart = speechStartHandler
    Voice.onSpeechEnd = speechEndHandler
    Voice.onSpeechResults = speechResultsHandler
    return () => {
      Voice.destroy().then(Voice.removeAllListeners)
    }
  }, [])

  const theme = useTheme()
  const styles = voiceRecogStyles(theme)

  const speechStartHandler = e => {
    console.log('speechStart successful', e)
  }

  const speechEndHandler = e => {
    setLoading(false)
    console.log('stop handler', e)
  }

  const speechResultsHandler = e => {
    const text = e.value[0]
    if (stateLocale) {
      // Encuentra el número exacto como palabra (y no solo parte de él), o el número directamente
      const quantity = Object.entries(numbers.locales[stateLocale])
        ?.find((entry) => (
          (text.match(new RegExp('(^|\\W)' + entry[1] + '($|\\W)')))?.length > 0 ||
          text.match(/[0-9]*/m)?.[0] === entry[0]
        ))

      let newText = text
      let newQty = amount
      if (quantity) {
        newText = text.replace(quantity[1], '')?.trim()
        newQty = quantity[0]
        setResult(newText) // legacy
        setProduct(newText)
        return setAmount(newQty)
      }
    }
    setResult(text)
    setProduct(text)
    setStoredItem(text)
  }

  const startRecording = async () => {
    setLoading(true)
    try {
      await Voice.start('es-Es')
    } catch (error) {
      console.log('error', error)
    }
  }

  const stopRecording = async () => {
    try {
      await Voice.stop()
      setLoading(false)
    } catch (error) {
      console.log('error', error)
    }
  }

  const handleAdd = () => {
    if (!result || result === '') {
      return Toast.warn(<Text>Debes escribir algo antes de añadir a la lista</Text>, 'top')
    }
    const newUuid = uuid.v4()
    return props.onAdd(newUuid, result, amount)
  }

  const handleChangeAmount = (qty) => {
    setAmount(qty)
  }

  const handleSelect = (item) => {
    setSearchResult([])
    return props.onAdd(item.uuid, item.nombre, (amount && amount > 0) ? amount : 1)
  }

  const debouncedSetResult = useCallback(debounce(
    (text, _productList) => {
      // TODO: BÚSQUEDA EN PRODUCTOS
      const productsFoundByName = _productList.filter((pr) => pr.nombre?.toLowerCase()?.includes(text.toLowerCase()))
      if (productsFoundByName.length > 0) {
        setSearchResult(productsFoundByName)
      } else {
        setSearchResult([])
      }
    },
    1000
  ), [])

  const setStoredItem = useListStore((state) => state.setCurrentItem)

  return (
    <>
      <ToastManager duration={3000} animationStyle='rightInOut' textStyle={{ fontSize: 12 }} width={256} height={92} position='bottom' />
      <View style={styles.container}>
        <SafeAreaView>
          <Text style={styles.headingText}>Lista de la compra</Text>
          <View style={styles.voiceRecogContainer}>
            <FlatList
              style={styles.searchFlatlist}
              data={searchResult}
              renderItem={({ item }) => {
                return (
                  <>
                    <TouchableOpacity onPress={() => setSearchResult([])}>
                      <Icon name='close' style={{ fontSize: 22 }} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.searchFlatlistItem} onPress={() => handleSelect(item)}>
                      <Text numberOfLines={1} ellipsizeMode='tail' style={styles.searchFlatlistText}>{item.nombre}</Text>
                    </TouchableOpacity>
                  </>

                )
              }}
            />
            <View style={styles.textInputWrapper}>
              <TextInput
                value={product}
                style={styles.textInputStyle}
                placeholder='Producto'
                onChangeText={(text) => {
                  setResult(text)
                  debouncedSetResult(text, productList)
                  setProduct(text)
                  setStoredItem(text)
                }}
              />

            </View>
            <View style={styles.amountInputWrapper}>
              <TextInput
                value={amount}
                placeholder='Cant.'
                style={styles.amountInput}
                keyboardType='numeric'
                onChangeText={handleChangeAmount}
              />
            </View>
            <View style={styles.btnContainer}>
              {isLoading
                ? (
                  <>
                    <ActivityIndicator size={50} color={theme.colors?.text} style={{ position: 'absolute', zIndex: 100, pointerEvents: 'none' }} />
                    <TouchableOpacity
                      style={styles.stop}
                      onPress={stopRecording}
                    >
                      <Icon style={styles.roundIcon} name='stop' />
                    </TouchableOpacity>
                  </>
                  )
                : (
                  <TouchableOpacity
                    onPress={startRecording}
                    style={styles.speak}
                  >
                    {/* <Text style={{ color: 'white', fontWeight: 'bold' }}>Hablar</Text> */}
                    <Icon style={styles.roundIcon} name='keyboard-voice' />
                  </TouchableOpacity>
                  )}

            </View>
            <TouchableOpacity
              style={styles.add}
              onPress={handleAdd}
            >
              <Icon style={styles.roundIcon} name='add' />
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      </View>
    </>
  )
}

export default VoiceRecog
