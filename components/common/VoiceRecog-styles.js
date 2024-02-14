import { StyleSheet } from 'react-native'

export const voiceRecogStyles = ({ colors }) => StyleSheet.create({
  container: {
    // flex: 1,
    minHeight: 140,
    width: '94%',
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
    justifyContent: 'center',
    alignItems: 'center',
    gap: 8
  },
  textInputWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: colors.background,
    borderColor: colors.border,
    borderWidth: 1,
    height: 48,
    borderRadius: 10,
    paddingVertical: 2,
    paddingHorizontal: 2,
    // shadowOffset: { width: 0, height: 1 },
    // shadowRadius: 2,
    // elevation: 2,
    // shadowOpacity: 0.4,
    color: colors.text,
    fontFamily: 'Quicksand-Medium',
    flexGrow: 1
  },
  textInputStyle: {
    fontFamily: 'Quicksand-Regular',
    minWidth: 140,
    flex: 2
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
  },
  amountInputWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: colors.background,
    borderColor: colors.border,
    borderWidth: 1,
    height: 48,
    borderRadius: 10,
    paddingVertical: 2,
    paddingHorizontal: 2,
    // shadowOffset: { width: 0, height: 1 },
    // shadowRadius: 2,
    // elevation: 2,
    // shadowOpacity: 0.4,
    color: colors.text,
    fontFamily: 'Quicksand-Medium',
    flexGrow: 0
  },
  amountInput: {
    width: 48,
    fontFamily: 'Quicksand-Regular',
    textAlign: 'center'
  },
  searchFlatlist: {
    position: 'absolute',
    top: 48,
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'nowrap',
    width: '100%'
  },
  searchFlatlistItem: {
    flexGrow: 1,
    borderColor: colors.border,
    borderWidth: 1,
    padding: 8,
    backgroundColor: colors.default
  },
  searchFlatlistText: {
    fontFamily: 'Quicksand-Medium'
  }
})
