import { StyleSheet } from 'react-native'

export const stockStyles = ({ dark, colors }) => StyleSheet.create({
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
  listText: {
    color: colors.text,
    fontFamily: 'Quicksand-Medium'
  },
  rightActionsWrapper: {
    width: 96,
    display: 'flex',
    flexDirection: 'row-reverse',
    flexWrap: 'nowrap',
    alignItems: 'center'
  },
  rightActionsPressable: {
    width: 48,
    height: '94%',
    backgroundColor: colors.danger,
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'nowrap',
    alignItems: 'center',
    justifyContent: 'center'
  },
  rightActionsFirstPressable: {
    marginRight: 14,
    width: 48,
    height: '94%',
    backgroundColor: colors.primary,
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'nowrap',
    alignItems: 'center',
    justifyContent: 'center'
  },
  rightActionsIcon: {
    fontSize: 28
  }
})
