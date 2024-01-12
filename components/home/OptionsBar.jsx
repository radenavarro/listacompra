import { Text, TouchableOpacity, View } from 'react-native'
import Icon from 'react-native-vector-icons/dist/MaterialIcons'
import { optionsBarStyles } from './OptionsBar-styles'
import { useTheme } from '@react-navigation/native'

const OptionsBar = (props) => {
  const theme = useTheme()
  console.log(theme)
  const styles = optionsBarStyles(theme)
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button}>
        <Icon style={styles.item} name='add' />
        <Text style={styles.text}>Nueva lista</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Icon style={styles.item} name='delete' />
        <Text style={styles.text}>Archivar lista</Text>
      </TouchableOpacity>
    </View>
  )
}

export default OptionsBar
