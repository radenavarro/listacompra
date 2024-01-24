import { StyleSheet } from 'react-native'

export const homeStyles = ({ dark, colors }) => StyleSheet.create({
  container: {
    width: '100%',
    minHeight: '100%',
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'nowrap',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: dark ? 'rgba(0,0,0,0.8)' : 'rgba(0,0,0,0)'
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
  listItemChecked: {
    backgroundColor: colors.backgroundChecked
  },
  listText: {
    color: colors.text,
    fontFamily: 'Quicksand-Medium'
  },
  listTextChecked: {
    color: colors.textChecked
  },
  listTextLineThrough: {
    textDecorationLine: 'line-through'
  },
  listIconChecked: {
    color: colors.iconChecked,
    fontSize: 18,
    textShadowColor: colors.shadowColor,
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 6
  }
})
