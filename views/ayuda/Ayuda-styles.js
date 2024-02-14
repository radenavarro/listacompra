import { StyleSheet } from 'react-native'

export const AyudaStyles = ({ dark, colors }) => StyleSheet.create({
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'nowrap',
    justifyContent: 'center',
    alignItems: 'center'
  },
  container: {
    padding: 0,
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'nowrap',
    // justifyContent: 'center',
    alignItems: 'center',
    width: '94%',
    height: '100%',
    backgroundColor: dark ? 'rgba(0,0,0,0.8)' : 'rgba(0,0,0,0)'
  },
  defaultFontStyle: {
    fontSize: 14,
    fontFamily: 'Quicksand-Regular'
  },
  bold: {
    fontFamily: 'Quicksand-Bold'
  },
  h1: {
    fontSize: 32,
    fontFamily: 'Quicksand-Bold'
  },
  h2: {
    fontSize: 24,
    fontFamily: 'Quicksand-Bold'
  }
})
