import { Alert, Text, TouchableOpacity, View } from 'react-native'
import Icon from 'react-native-vector-icons/dist/MaterialIcons'
import { optionsBarStyles } from './OptionsBar-styles'
import { useNavigation, useTheme } from '@react-navigation/native'
import { useArchiveStore, useListStore, useProductStore, useVoiceRecogFields } from '../../hooks/zustand/storeHooks'
import { deepClone } from '../../helpers/helpers'

const OptionsBar = ({ actions, ...props }) => {
  const theme = useTheme()
  // console.log(theme)
  const styles = optionsBarStyles(theme)

  const navigation = useNavigation()

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
    addToArchive(deepClone(currentList))
    addToStock(deepClone(currentList))
    clearList()
  }

  const confirmClearList = () => {
    if (currentList?.length === 0) return clearList()
    return Alert.alert('Nueva lista', '¿Eliminar lista actual?', [
      {
        text: 'No',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel'
      },
      { text: 'Si', onPress: () => clearList() }
    ])
  }

  const addToStock = (products) => {
    addProducts(products)
  }

  const clearFields = () => {
    setProduct(undefined)
    setAmount('1')
  }

  const goToHelp = () => {
    return navigation?.navigate('Ayuda')
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={confirmClearList}>
        <Icon style={styles.item} name='add' />
        <Text style={styles.text}>Nueva lista</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={clearFields}>
        <Icon style={styles.item} name='clear-all' />
        <Text style={styles.text}>Limpiar campos</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={handleArchiveList} disabled={currentList?.length === 0}>
        <Icon style={currentList?.length === 0 ? styles.itemDisabled : styles.item} name='delete' />
        <Text style={currentList?.length === 0 ? styles.textDisabled : styles.text}>Archivar lista</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.button, styles.helpbutton]} onPress={goToHelp}>
        <Icon style={styles.item} name='question-mark' />
      </TouchableOpacity>
    </View>
  )
}

export default OptionsBar
