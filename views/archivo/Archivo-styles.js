import { StyleSheet } from 'react-native'

export const ArchivoStyles = ({ colors }) => StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'nowrap',
    // justifyContent: 'center',
    alignItems: 'center',
    height: '100%'
  },
  h4: {
    fontSize: 16,
    fontFamily: 'Quicksand-Bold'
  },
  paddingTop8: {
    paddingTop: 8
  },
  list: {
    width: '100%',
    height: 50,
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'nowrap'
  },
  listItem: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'nowrap',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderColor: colors.border,
    borderWidth: 1,
    padding: 14,
    marginVertical: 2,
    marginHorizontal: 16,
    backgroundColor: colors.default,
    fontFamily: 'Quicksand-Medium'
  },
  listSubItem: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'nowrap',
    alignItems: 'center',
    gap: 8
  },
  listTags: {
    padding: 0,
    maxWidth: '50%',
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'nowrap'
  },
  listTexts: {
    padding: 0,
    maxWidth: '50%',
    flexGrow: 1
    // display: 'flex',
    // flexDirection: 'row',
    // flexWrap: 'wrap'
  },
  listText: {
    color: colors.text,
    fontFamily: 'Quicksand-Medium'
  }
})
