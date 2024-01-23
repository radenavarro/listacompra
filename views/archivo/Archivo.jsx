import { useTheme } from '@react-navigation/native'
import { Text, SafeAreaView, ImageBackground, FlatList, View, Pressable, TouchableHighlight } from 'react-native'
import Swipeable from 'react-native-swipeable'
import { ArchivoStyles } from './Archivo-styles'
import { useArchiveStore, useListStore } from '../../hooks/zustand/storeHooks'
import { Icon } from 'react-native-paper'
import Tag from '../../components/common/Tag'

const Archivo = (props) => {
  const theme = useTheme()
  const styles = ArchivoStyles(theme)

  const { currentList } = useListStore()
  const setCurrentList = useListStore((state) => state.setCurrentList)
  const { archivedList } = useArchiveStore()
  const swipeItemOut = useArchiveStore((state) => state.removeFromArchive)
  const { activeUuidList } = useArchiveStore()
  const setActiveUuidList = useArchiveStore((state) => state.setActiveUuidList)

  const restaurarLista = () => {
    const idx = archivedList.findIndex((line) => line.list_uuid === activeUuidList)
    if (idx !== -1) {
      const newList = {
        ...archivedList[idx],
        items: archivedList[idx].items.map((item) => {
          item.checked = false
          return item
        })
      }

      if (currentList?.length === 0) {
        setCurrentList(newList.items)
      } else {
        // TODO: hay items, preguntar si se quieren sobreescribir con la nueva lista
      }
    }
    // TODO: no se encuentra la lista, hay algún error
  }

  const rightButtons = [
    <View key='1' style={styles.crearDeNuevo}>
      <TouchableHighlight style={styles.crearDeNuevoButton} onPress={restaurarLista}>
        <Text style={styles.crearDeNuevoText}>Crear de nuevo</Text>
      </TouchableHighlight>
    </View>
  ]

  const Item = ({ list_uuid, title }) => (
    <Pressable
      style={styles.listItem}
      // onPress={() => onItemCheck(uuid)}
    >
      <View
        style={styles.listSubItem}
      >
        {title}
      </View>
    </Pressable>
  )

  return (
    <ImageBackground source={require('../../img/image-3ucottvo.png')} resizeMode='repeat'>
      <SafeAreaView style={styles.container}>
        <Text style={[styles.h4, styles.paddingVertical8]}>Listas archivadas</Text>
        <FlatList
          data={archivedList}
          style={styles.list}
          renderItem={({ item }) => (
            <Swipeable
              key={item.list_uuid}
              onSwipeStart={() => { setActiveUuidList(item.list_uuid) }}
              leftButtonWidth={56}
              rightButtons={rightButtons}
              leftContent={<View />}
              onLeftActionRelease={() => swipeItemOut(item.list_uuid)}
            >
              <Item
                title={(
                  <>
                    <View style={styles.listTags}>
                      <Tag>
                        {item.fecha}
                      </Tag>
                    </View>
                    <View style={styles.listTexts}>
                      <Text style={styles.listText} numberOfLines={2} ellipsizeMode='tail'>{item.items?.map(i => i.nombre)?.join(', ')}</Text>
                    </View>
                  </>
                  )}
                uuid={item.list_uuid}
                checked={item.checked}
              />
            </Swipeable>
          )}
        />
      </SafeAreaView>
    </ImageBackground>
  )
}

export default Archivo
