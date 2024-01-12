import { StyleSheet } from 'react-native'

export const voiceRecogStyles = ({ colors }) => StyleSheet.create({
  container: {
    // flex: 1,
    minHeight: 140,
    marginVertical: 16,
    backgroundColor: colors.background,
    padding: 16,
    shadowColor: colors.shadowColor,
    elevation: 4
  },
  headingText: {
    alignSelf: 'center',
    fontSize: 16,
    paddingBottom: 8,
    fontFamily: 'Quicksand-Bold'
  },
  voiceRecogContainer: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'nowrap',
    alignItems: 'center',
    gap: 16
  },
  textInputStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: colors.background,
    borderColor: colors.border,
    borderWidth: 1,
    // height: 300,
    borderRadius: 10,
    paddingVertical: 2,
    paddingHorizontal: 2,
    // shadowOffset: { width: 0, height: 1 },
    // shadowRadius: 2,
    // elevation: 2,
    // shadowOpacity: 0.4,
    color: colors.text,
    fontFamily: 'Quicksand-Medium'
  },
  speak: {
    backgroundColor: colors.primary,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8,
    width: 50,
    height: 50,
    borderRadius: 50
  },
  stop: {
    backgroundColor: colors.danger,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8,
    width: 50,
    height: 50,
    borderRadius: 50
  },
  add: {
    backgroundColor: colors.default,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8,
    width: 50,
    height: 50,
    borderRadius: 50
  },
  btnContainer: {
    display: 'flex',
    flexDirection: 'column'
    // justifyContent: 'flex-start',
    // marginTop: 24
  },
  roundIcon: {
    color: colors.buttonText,
    fontSize: 24
  }
})
