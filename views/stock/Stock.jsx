import { View, Text, Pressable, FlatList, TouchableHighlight, SafeAreaView, ImageBackground } from 'react-native'
import { homeStyles } from './Home-styles'
import VoiceRecog from '../../components/common/VoiceRecog'
import OptionsBar from '../../components/home/OptionsBar'
import { useState } from 'react'
import { useTheme } from '@react-navigation/native'
// import Swipeable from 'react-native-swipeable'
import { Swipeable } from 'react-native-gesture-handler'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { useListStore, useProductStore } from '../../hooks/zustand/storeHooks'
import { throttle } from '../../helpers/helpers'
import { stockStyles } from './Stock-styles'

const Stock = (props) => {
  const [percentSwiped, setPercentSwiped] = useState('0')

  const theme = useTheme()
  const styles = stockStyles(theme)

  const leftContent = <View><Text>Pull to activate</Text></View>

  const leftButtons = [
    <TouchableHighlight key='1'><Text>Button 1</Text></TouchableHighlight>,
    <TouchableHighlight key='2'><Text>Button 2</Text></TouchableHighlight>
  ]
  const { productList } = useProductStore()
  const swipeItemOut = useProductStore((state) => state.clearStock)
  const addOne = useProductStore((state) => state.addOne)
  const substractOne = useProductStore((state) => state.substractOne)

  const Item = ({ uuid, title, amount }) => (
    <Pressable
      style={[styles.listItem]}
    >
      <Text
        style={[styles.listText]}
      >
        {title}
      </Text>
      <Text>
        {amount} {amount > 1 ? 'uds' : 'ud'}
      </Text>
    </Pressable>
  )

  return (
    <ImageBackground source={require('../../img/image-3ucottvo.png')} resizeMode='repeat'>
      <SafeAreaView style={styles.container}>
        <Text style={[styles.h4, styles.paddingVertical8]}>Productos disponibles</Text>
        <FlatList
          data={productList}
          style={styles.list}
          renderItem={({ item }) => (
            <Swipeable
              key={item.uuid}
              onActivated={(e) => {
                // setSwiping(true)
                // setUuidSwiping(item.uuid)
              }}
              onEnded={(e) => {
                setTimeout(() => {
                  console.log('percentSwiped onEnded:')
                  // console.log(percentSwiped)
                  // setSwiping(false)
                  // setPercentSwiped(0)
                  // setUuidSwiping(undefined)
                }, 1000)
              }}
              onSwipeableOpen={(direction) => {
                if (direction === 'left') swipeItemOut(item.uuid)
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
              renderRightActions={(progress, dragX) => {
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
                  <View style={styles.rightActionsWrapper}>
                    <TouchableHighlight style={styles.rightActionsFirstPressable} onPress={() => addOne(item.uuid)}>
                      <Icon name='add' style={styles.rightActionsIcon} />
                    </TouchableHighlight>
                    <TouchableHighlight style={styles.rightActionsPressable} onPress={() => substractOne(item.uuid)}>
                      <Icon name='remove' style={styles.rightActionsIcon} />
                    </TouchableHighlight>
                  </View>
                )
              }}
              leftContent={<View />}
              onLeftActionRelease={() => swipeItemOut(item.uuid)}
            >
              <Item title={item.nombre} uuid={item.uuid} amount={item.cantidad} />
            </Swipeable>
          )}
        />
      </SafeAreaView>
    </ImageBackground>
  )
}

export default Stock
