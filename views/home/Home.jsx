import { View, Text, Pressable, FlatList, TouchableHighlight, SafeAreaView, ImageBackground } from 'react-native'
import { homeStyles } from './Home-styles'
import VoiceRecog from '../../components/common/VoiceRecog'
import OptionsBar from '../../components/home/OptionsBar'
import { useState } from 'react'
import { useTheme } from '@react-navigation/native'
// import Swipeable from 'react-native-swipeable'
import { Swipeable } from 'react-native-gesture-handler'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { useListStore } from '../../hooks/zustand/storeHooks'
import { throttle } from '../../helpers/helpers'

const Home = (props) => {
  const [swiping, setSwiping] = useState(false)
  const [uuidSwiping, setUuidSwiping] = useState(undefined)
  const [percentSwiped, setPercentSwiped] = useState('0')

  const theme = useTheme()
  const styles = homeStyles(theme)

  const leftContent = <View><Text>Pull to activate</Text></View>

  const leftButtons = [
    <TouchableHighlight key='1'><Text>Button 1</Text></TouchableHighlight>,
    <TouchableHighlight key='2'><Text>Button 2</Text></TouchableHighlight>
  ]
  const { currentList } = useListStore()
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
          data={currentList}
          style={styles.list}
          renderItem={({ item }) => (
            <Swipeable
              key={item.uuid}
              onActivated={(e) => {
                setSwiping(true)
                setUuidSwiping(item.uuid)
              }}
              onEnded={(e) => {
                setTimeout(() => {
                  console.log('percentSwiped onEnded:')
                  // console.log(percentSwiped)
                  setSwiping(false)
                  setPercentSwiped(0)
                  setUuidSwiping(undefined)
                }, 1000)
              }}
              onSwipeableOpen={(direction) => {
                if (direction === 'left') swipeItemOut(uuidSwiping)
              }}
              // onSwipeStart={() => { setSwiping(true) }}
              // onSwipeEnd={() => { setSwiping(false) }}
              renderLeftActions={(progress, dragX) => {
                if (JSON.stringify(dragX) > 0) {
                  const interpolated = JSON.stringify(progress.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0, 100]
                  }))

                  if (interpolated !== percentSwiped) {
                    throttle(setPercentSwiped(interpolated), 1000)
                  }
                }

                return (
                  <View style={{ width: '100%' }} />
                )
              }}
              rightButtons={leftButtons}
              leftContent={<View />}
              onLeftActionRelease={() => swipeItemOut(item.uuid)}
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
