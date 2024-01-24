import { StyleSheet } from 'react-native'

export const ArchivoStyles = ({ dark, colors }) => StyleSheet.create({
  container: {
    padding: 0,
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'nowrap',
    // justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    backgroundColor: dark ? 'rgba(0,0,0,0.8)' : 'rgba(0,0,0,0)'
  },
  h4: {
    fontSize: 16,
    fontFamily: 'Quicksand-Bold'
  },
  paddingTop8: {
    paddingTop: 8
  },
  paddingVertical8: {
    paddingVertical: 8
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
    width: '50%',
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'nowrap'
  },
  listTexts: {
    padding: 0,
    width: '50%',
    flexGrow: 1
    // display: 'flex',
    // flexDirection: 'row',
    // flexWrap: 'wrap'
  },
  listText: {
    color: colors.text,
    fontFamily: 'Quicksand-Medium'
  },
  crearDeNuevo: {
    width: 56,
    height: '100%',
    padding: 6,
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'nowrap',
    justifyContent: 'center',
    alignItems: 'center'
  },
  crearDeNuevoButton: {
    width: 56,
    height: 56,
    backgroundColor: 'rgba(126, 255, 94, 0.2)',
    borderColor: colors.border,
    borderWidth: 1,
    borderRadius: 12,
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'nowrap',
    justifyContent: 'center'
  },
  crearDeNuevoText: {
    padding: 4,
    color: colors.text,
    fontFamily: 'Quicksand-Medium',
    fontSize: 10,
    textAlign: 'center'
  }
})
