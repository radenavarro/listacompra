import { Text, TouchableOpacity, View } from 'react-native'
import { voiceRecogStyles } from './VoiceRecog-styles'
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition'

const VoiceRecog = (props) => {
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition
  } = useSpeechRecognition()

  if (!browserSupportsSpeechRecognition) {
    return <Text>Browser doesn't support speech recognition.</Text>
  }
  return (
    <View>
      <Text>Microphone: {listening ? 'on' : 'off'}</Text>
      <TouchableOpacity onPress={SpeechRecognition.startListening()}><Text>Start</Text></TouchableOpacity>
      <TouchableOpacity onPress={SpeechRecognition.stopListening()}><Text>Stop</Text></TouchableOpacity>
      <TouchableOpacity onPress={SpeechRecognition.resetTranscript()}><Text>Reset</Text></TouchableOpacity>
    </View>
  )
}

export default VoiceRecog
