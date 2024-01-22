import { useTheme } from '@react-navigation/native'
import { Text, SafeAreaView, ImageBackground, FlatList, View, Pressable } from 'react-native'
import Swipeable from 'react-native-swipeable'
import { ArchivoStyles } from './Archivo-styles'
import { useArchiveStore } from '../../hooks/zustand/storeHooks'
import { Icon } from 'react-native-paper'
import Tag from '../../components/common/Tag'

const Archivo = (props) => {
  const theme = useTheme()
  const styles = ArchivoStyles(theme)
  const { archivedList } = useArchiveStore()
  // const swipeItemOut = useArchiveStore((state) => state.removeFromArchive)
  const swipeItemOut = (item) => console.log(item.fecha)

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
      <SafeAreaView style={styles.container}>{console.log(archivedList)}
        <Text style={[styles.h4, styles.paddingTop8]}>Listas archivadas</Text>
        <FlatList
          data={archivedList}
          style={styles.list}
          renderItem={({ item }) => (
            <Swipeable
              key={item.uuid}
              onSwipeStart={() => {}}
              onSwipeEnd={() => {}}
              // leftButtons={leftButtons}
              leftContent={<View />}
              onLeftActionRelease={() => swipeItemOut(item)}
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
