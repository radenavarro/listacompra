import { SafeAreaView, Text, TextInput, TouchableOpacity, View, ActivityIndicator } from 'react-native'
import Voice from '@react-native-community/voice'
import { voiceRecogStyles } from './VoiceRecog-styles'
import { useEffect, useState } from 'react'
import { useTheme } from '@react-navigation/native'
import Icon from 'react-native-vector-icons/MaterialIcons'

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

  return (
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
              onChangeText={text => setResult(text)}
            />
          </View>
          <View style={styles.btnContainer}>
            {isLoading
              ? (
                <ActivityIndicator size='large' color={theme.colors?.text} />
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
            <TouchableOpacity
              style={styles.stop}
              onPress={stopRecording}
            >
              <Icon style={styles.roundIcon} name='stop' />
            </TouchableOpacity>

          </View>
          <TouchableOpacity
            style={styles.add}
            onPress={() => props.onAdd(result)}
          >
            <Icon style={styles.roundIcon} name='add' />
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </View>
  )
}

export default VoiceRecog
