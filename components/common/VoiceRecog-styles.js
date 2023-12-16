import { StyleSheet } from 'react-native'

export const voiceRecogStyles = ({ colors }) => StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    padding: 24
  },
  headingText: {
    alignSelf: 'center',
    marginVertical: 26,
    fontWeight: 'bold',
    fontSize: 26
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
    color: colors.text
  },
  speak: {
    backgroundColor: colors.primary,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8,
    borderRadius: 8
  },
  stop: {
    backgroundColor: colors.danger,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8,
    borderRadius: 8
  },
  clear: {
    backgroundColor: colors.default,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    borderRadius: 8,
    marginTop: 15
  },
  btnContainer: {
    display: 'flex',
    flexDirection: 'row',
    with: '50%',
    justifyContent: 'space-evenly',
    marginTop: 24
  }
})
