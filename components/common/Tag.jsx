import { Text, View } from 'react-native'
import { TagStyles } from './Tag-styles'
import { useTheme } from '@react-navigation/native'

const Tag = (props) => {
  const theme = useTheme()
  const styles = TagStyles(theme)
  return (
    <View style={styles.tag}>
      <Text style={styles.tagText}>
        {props.children}
      </Text>
    </View>

  )
}

export default Tag
