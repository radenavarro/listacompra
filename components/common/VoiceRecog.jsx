import { SafeAreaView, Text, TextInput, TouchableOpacity, View, ActivityIndicator } from 'react-native'
import { useEffect, useState } from 'react'
import ToastManager, { Toast } from 'toastify-react-native'
import Voice from '@react-native-community/voice'
import { voiceRecogStyles } from './VoiceRecog-styles'
import { useTheme } from '@react-navigation/native'
import Icon from 'react-native-vector-icons/MaterialIcons'
// Zustand store
import { useListStore } from '../../hooks/zustand/storeHooks'

const VoiceRecog = (props) => {
  const [result, setResult] = useState('')
  const [isLoading, setLoading] = useState(false)

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
    setResult(text)
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

  // const clear = () => {
  //   setResult('')
  // }

  const handleAdd = () => {
    if (!result || result === '') {
      return Toast.warn(<Text>Debes escribir algo antes de añadir a la lista</Text>, 'top')
    }
    return props.onAdd(result)
  }

  const setStoredItem = useListStore((state) => state.setCurrentItem)

  return (
    <>
      <ToastManager duration={3000} animationStyle='rightInOut' textStyle={{ fontSize: 12 }} width={256} height={92} position='bottom' />
      <View style={styles.container}>
        <SafeAreaView>
          <Text style={styles.headingText}>Lista de la compra</Text>
          <View style={styles.voiceRecogContainer}>
            <View style={styles.textInputStyle}>
              <TextInput
                value={result}
                style={{ fontFamily: 'Quicksand-Regular', minWidth: 140 }}
            // multiline
                placeholder='Prueba a decir algo'
                onChangeText={(text) => {
                  setResult(text)
                  setStoredItem(text)
                }}
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
