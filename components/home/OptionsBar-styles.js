import { StyleSheet } from 'react-native'

export const optionsBarStyles = ({ colors }) => StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'nowrap',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 8,
    width: '94%',
    marginTop: 16
  },
  item: {
    // padding: 6,
    fontSize: 16,
    color: colors.buttonText
  },
  itemDisabled: {
    // padding: 6,
    fontSize: 16,
    color: colors.buttonTextDisabled
  },
  text: {
    fontSize: 11,
    color: colors.buttonText,
    fontFamily: 'Quicksand-Medium'
  },
  textDisabled: {
    fontSize: 11,
    color: colors.buttonTextDisabled,
    fontFamily: 'Quicksand-Medium'
  },
  button: {
    flexGrow: 1,
    padding: 6,
    borderColor: colors.borderButton,
    backgroundColor: colors.default,
    borderWidth: 1,
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'nowrap',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderRadius: 8
  },
  helpbutton: {
    maxWidth: 30,
    borderRadius: 50
  }
})
