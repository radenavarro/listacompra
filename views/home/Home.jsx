import { View, Text, Pressable, FlatList, TouchableHighlight, ScrollView, SafeAreaView, ImageBackground } from 'react-native'
import { homeStyles } from './Home-styles'
import VoiceRecog from '../../components/common/VoiceRecog'
import OptionsBar from '../../components/home/OptionsBar'
import { useState } from 'react'
import { useTheme } from '@react-navigation/native'
import SwipeableFlatList from 'react-native-swipeable-list'
import Swipeable from 'react-native-swipeable'
import Icon from 'react-native-vector-icons/MaterialIcons'
import BottomMenu from '../../components/common/BottomMenu'
import { useListStore } from '../../hooks/zustand/storeHooks'

const Home = (props) => {
  const [swiping, setSwiping] = useState(false)

  const theme = useTheme()
  const styles = homeStyles(theme)

  const leftContent = <View><Text>Pull to activate</Text></View>

  const leftButtons = [
    <TouchableHighlight key='1'><Text>Button 1</Text></TouchableHighlight>,
    <TouchableHighlight key='2'><Text>Button 2</Text></TouchableHighlight>
  ]
  const onAdd = useListStore((state) => state.addToList)
  const onItemCheck = useListStore((state) => state.checkItem)
  const swipeItemOut = useListStore((state) => state.removeFromList)
  const Item = ({ uuid, title, checked }) => (
    <Pressable
      style={checked ? [styles.listItem, styles.listItemChecked] : [styles.listItem]}
      onPress={() => onItemCheck(uuid)}
    >
      <Text
        style={checked ? [styles.listText, styles.listTextChecked, styles.listTextLineThrough] : [styles.listText]}
      >
        {title}
      </Text>
      {checked && (
        <Icon name='done' style={styles.listIconChecked} />
      )}
    </Pressable>
  )

  return (
    <ImageBackground source={require('../../img/image-3ucottvo.png')} resizeMode='repeat'>
      <SafeAreaView style={styles.container}>
        <OptionsBar />
        <VoiceRecog onAdd={onAdd} />
        <FlatList
          data={useListStore((state) => state.currentList)}
          style={styles.list}
          renderItem={({ item }) => (
            <Swipeable
              key={item.uuid}
              onSwipeStart={() => { setSwiping(true) }}
              onSwipeEnd={() => { setSwiping(false) }}
              leftButtons={leftButtons}
              rightContent={<View />}
              onRightActionRelease={() => swipeItemOut(item.uuid)}
            >
              <Item title={item.nombre} uuid={item.uuid} checked={item.checked} />
            </Swipeable>
          )}
        />
      </SafeAreaView>
    </ImageBackground>
  )
}

export default Home
