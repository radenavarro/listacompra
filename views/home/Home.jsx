import { View, Text, Pressable, FlatList, TouchableHighlight, SafeAreaView, ImageBackground, Modal, TextInput } from 'react-native'
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
  // E S T A D O
  const [swiping, setSwiping] = useState(false)
  const [uuidSwiping, setUuidSwiping] = useState(undefined)
  const [percentSwiped, setPercentSwiped] = useState('0')
  const [editing, setEditing] = useState(undefined)

  // E S T I L O S
  const theme = useTheme()
  const styles = homeStyles(theme)

  // S T O R E
  const { currentList } = useListStore()
  const onAdd = useListStore((state) => state.addToList)
  const onItemCheck = useListStore((state) => state.checkItem)
  const swipeItemOut = useListStore((state) => state.removeFromList)
  const addOne = useListStore((state) => state.addOne)
  const substractOne = useListStore((state) => state.substractOne)
  const modifyFromList = useListStore((state) => state.modifyFromList)

  const editOne = (item) => {
    setEditing(item)
  }

  const handleModify = (item) => {
    modifyFromList(item)
    setEditing(undefined)
  }

  const Item = ({ uuid, title, qty, checked }) => (
    <Pressable
      style={checked ? [styles.listItem, styles.listItemChecked] : [styles.listItem]}
      onPress={() => onItemCheck(uuid)}
    >
      <Text
        style={checked ? [styles.listText, styles.listTextChecked, styles.listTextLineThrough] : [styles.listText]}
      >
        {title} x{qty}
      </Text>
      {checked && (
        <Icon name='done' style={styles.listIconChecked} />
      )}
    </Pressable>
  )

  return (
    <ImageBackground source={require('../../img/image-3ucottvo.png')} resizeMode='repeat'>
      <SafeAreaView style={styles.container}>
        <Modal
          animationType='fade'
          transparent
          visible={!!editing}
          onRequestClose={() => {
            setEditing(undefined)
          }}
        >
          <Pressable style={styles.modalCenter} onPress={() => setEditing(undefined)}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>¿Modificar nombre de producto?</Text>
              <TextInput
                style={styles.modalTextInput}
                value={editing?.nombre ?? ''}
                onChangeText={(text) => setEditing({ ...editing, nombre: text })}
              />
              <View style={styles.modalActions}>
                <TouchableHighlight key='1'>
                  <Icon name='close' style={styles.modalCancelButton} />
                </TouchableHighlight>
                <TouchableHighlight key='2' onPress={() => handleModify(editing)}>
                  <Icon name='done' style={styles.modalOkButton} />
                </TouchableHighlight>
              </View>
            </View>
          </Pressable>
        </Modal>
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
              // rightButtons={leftButtons}
              renderRightActions={(progress, dragX) => {
                // const interpolated = dragX.interpolate({
                //   inputRange: [0, 1],
                //   outputRange: [0, 100]
                // })
                return (
                  <View style={styles.rightActionsWrapper}>
                    <TouchableHighlight style={styles.rightActionsFirstPressable} onPress={() => addOne(item.uuid)}>
                      <Icon name='add' style={styles.rightActionsIcon} />
                    </TouchableHighlight>
                    <TouchableHighlight style={styles.rightActionsPressable} onPress={() => substractOne(item.uuid)}>
                      <Icon name='remove' style={styles.rightActionsIcon} />
                    </TouchableHighlight>
                    <TouchableHighlight style={styles.rightActionsEditPressable} onPress={() => editOne(item)}>
                      <Icon name='edit' style={styles.rightActionsIcon} />
                    </TouchableHighlight>
                  </View>
                )
              }}
              // leftContent={<View />}
              // onLeftActionRelease={() => swipeItemOut(item.uuid)}
            >
              <Item title={item.nombre} qty={item.cantidad} uuid={item.uuid} checked={item.checked} />
            </Swipeable>
          )}
        />
      </SafeAreaView>
    </ImageBackground>
  )
}

export default Home
