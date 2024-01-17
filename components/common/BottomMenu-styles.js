import { StyleSheet } from 'react-native'

export const BottomMenuStyles = ({ colors }) => StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: 64,
    backgroundColor: 'rgb(155, 111, 255)',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'nowrap',
    justifyContent: 'center',
    alignItems: 'center'
  },
  iconContainer: {
    flexGrow: 1,
    borderColor: 'rgba(0, 0, 0, 0.2)',
    borderWidth: 1,
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'nowrap',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 8
  },
  icon: {
    fontSize: 48,
    color: 'white'
  }
})
