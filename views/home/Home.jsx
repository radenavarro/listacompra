import { View, Text, Pressable, FlatList, TouchableHighlight, ScrollView, SafeAreaView, ImageBackground } from 'react-native'
import { homeStyles } from './Home-styles'
import VoiceRecog from '../../components/common/VoiceRecog'
import OptionsBar from '../../components/home/OptionsBar'
import { useState } from 'react'
import { useTheme } from '@react-navigation/native'
import uuid from 'react-native-uuid'
import SwipeableFlatList from 'react-native-swipeable-list'
import Swipeable from 'react-native-swipeable'
import Icon from 'react-native-vector-icons/MaterialIcons'

const Home = (props) => {
  const [listElements, setListElements] = useState([])
  const [swiping, setSwiping] = useState(false)

  const theme = useTheme()
  const styles = homeStyles(theme)

  const leftContent = <View><Text>Pull to activate</Text></View>

  const leftButtons = [
    <TouchableHighlight key='1'><Text>Button 1</Text></TouchableHighlight>,
    <TouchableHighlight key='2'><Text>Button 2</Text></TouchableHighlight>
  ]

  const onAdd = (element) => {
    setListElements([
      ...listElements,
      {
        uuid: uuid.v4(),
        nombre: element
      }
    ])
  }
  const Item = ({ uuid, title, checked }) => (
    <Pressable
      style={(() => {
        if (checked) return [styles.listItem, styles.listItemChecked]
        return [styles.listItem]
      })()}
      onPress={() => {
        const updtItems = [...listElements]
        const idx = updtItems.findIndex((it) => it.uuid === uuid)
        if (idx !== -1) {
          updtItems[idx].checked = !updtItems[idx].checked
          setListElements(updtItems)
        }
      }}
    >
      <Text
        style={(() => {
          if (checked) return [styles.listText, styles.listTextChecked]
          return [styles.listText]
        })()}
      >{title}
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
        {/* <ScrollView
        style={styles.list}
        scrollEnabled={!swiping}
      >
        {listElements.map((item, idx) => {
          return (
            <Swipeable
              key={item.uuid}
              onSwipeStart={() => { setSwiping(true) }}
              onSwipeEnd={() => { setSwiping(false) }}
              leftButtons={leftButtons}
              rightContent={<View />}
              onRightActionRelease={() => {
                const updtItems = listElements.filter((listElement) => listElement.uuid !== item.uuid)
                setListElements(updtItems)
              }}
            >
              <Item title={item.nombre} uuid={item.uuid} checked={item.checked} />
            </Swipeable>
          )
        })}
      </ScrollView> */}
        <FlatList
          data={listElements}
          style={styles.list}
          renderItem={({ item }) => (
            <Swipeable
              key={item.uuid}
              onSwipeStart={() => { setSwiping(true) }}
              onSwipeEnd={() => { setSwiping(false) }}
              leftButtons={leftButtons}
              rightContent={<View />}
              onRightActionRelease={() => {
                const updtItems = listElements.filter((listElement) => listElement.uuid !== item.uuid)
                setListElements(updtItems)
              }}
            >
              {/* {console.log(item)} */}
              <Item title={item.nombre} uuid={item.uuid} checked={item.checked} />
            </Swipeable>
          )}
        />
      </SafeAreaView>
    </ImageBackground>
  )
}

export default Home
