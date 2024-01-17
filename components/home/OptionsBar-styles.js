import { StyleSheet } from 'react-native'

export const optionsBarStyles = ({ colors }) => StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 8,
    width: '80%',
    marginTop: 16
  },
  item: {
    padding: 4,
    fontSize: 22,
    color: colors.buttonText
  },
  text: {
    color: colors.buttonText,
    fontFamily: 'Quicksand-Medium'
  },
  button: {
    flexGrow: 1,
    borderColor: colors.borderButton,
    backgroundColor: colors.default,
    borderWidth: 1,
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'nowrap',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderRadius: 8
  }
})
