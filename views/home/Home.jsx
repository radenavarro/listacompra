import { View } from 'react-native'
import { homeStyles } from './Home-styles'
import VoiceRecog from '../../components/common/VoiceRecog'

const Home = (props) => {
  return (
    <View style={homeStyles.container}>
      <VoiceRecog />
    </View>
  )
}

export default Home
