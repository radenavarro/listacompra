import { View } from 'react-native'
import { BottomMenuStyles } from './BottomMenu-styles'
import { useTheme } from '@react-navigation/native'
import Icon from 'react-native-vector-icons/MaterialIcons'

const BottomMenu = (props) => {
  const theme = useTheme()
  const styles = BottomMenuStyles(theme)
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <Icon name='home' style={styles.icon} />
      </View>
      <View style={styles.iconContainer}>
        <Icon name='storage' style={styles.icon} />
      </View>
    </View>
  )
}

export default BottomMenu
