import { Text, TouchableOpacity, View } from 'react-native'
import Icon from 'react-native-vector-icons/dist/MaterialIcons'
import { optionsBarStyles } from './OptionsBar-styles'
import { useTheme } from '@react-navigation/native'
import { useArchiveStore, useListStore } from '../../hooks/zustand/storeHooks'

const OptionsBar = ({ actions, ...props }) => {
  const theme = useTheme()
  // console.log(theme)
  const styles = optionsBarStyles(theme)
  const { currentList } = useListStore()
  const { archivedList } = useArchiveStore()
  const clearList = useListStore((state) => state.clearList)
  const addToArchive = useArchiveStore((state) => state.addToArchive)

  const handleArchiveList = () => {
    addToArchive(currentList)
    clearList()
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={clearList}>
        <Icon style={styles.item} name='add' />
        <Text style={styles.text}>Nueva lista</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={handleArchiveList}>
        <Icon style={styles.item} name='delete' />
        <Text style={styles.text}>Archivar lista</Text>
      </TouchableOpacity>
    </View>
  )
}

export default OptionsBar
