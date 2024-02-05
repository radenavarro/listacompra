import { Text, TouchableOpacity, View } from 'react-native'
import Icon from 'react-native-vector-icons/dist/MaterialIcons'
import { optionsBarStyles } from './OptionsBar-styles'
import { useTheme } from '@react-navigation/native'
import { useArchiveStore, useListStore, useProductStore, useVoiceRecogFields } from '../../hooks/zustand/storeHooks'

const OptionsBar = ({ actions, ...props }) => {
  const theme = useTheme()
  // console.log(theme)
  const styles = optionsBarStyles(theme)

  //      S T O R E
  // List
  const { currentList } = useListStore()
  const clearList = useListStore((state) => state.clearList)
  // Archive
  // const { archivedList } = useArchiveStore()
  const addToArchive = useArchiveStore((state) => state.addToArchive)
  // Voice
  const { setProduct, setAmount } = useVoiceRecogFields()
  // Stock
  const { addProducts } = useProductStore()

  const handleArchiveList = () => {
    addToArchive(currentList)
    addToStock(currentList)
    clearList()
  }

  const addToStock = (products) => {
    addProducts(products)
  }

  const clearFields = () => {
    setProduct(undefined)
    setAmount('1')
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={clearList}>
        <Icon style={styles.item} name='add' />
        <Text style={styles.text}>Nueva lista</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={clearFields}>
        <Icon style={styles.item} name='clear-all' />
        <Text style={styles.text}>Limpiar campos</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={handleArchiveList}>
        <Icon style={styles.item} name='delete' />
        <Text style={styles.text}>Archivar lista</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => {}}>
        <Icon style={styles.item} name='question-mark' />
      </TouchableOpacity>
    </View>
  )
}

export default OptionsBar
