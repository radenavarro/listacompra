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
  },
  // RIGHT ACTIONS
  rightActionsWrapper: {
    width: 144,
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
  rightActionsEditPressable: {
    width: '100%',
    height: '94%',
    backgroundColor: colors.warning,
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'nowrap',
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingHorizontal: 10
  },
  rightActionsIcon: {
    fontSize: 28
  },
  // MODAL
  modalCenter: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: colors.confirmBackground,
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  modalText: {
    fontFamily: 'Quicksand-Bold',
    color: colors.confirmText
  },
  modalTextInput: {
    marginTop: 8,
    fontFamily: 'Quicksand-Regular',
    color: colors.confirmText,
    borderColor: colors.border,
    borderWidth: 1,
    borderRadius: 16,
    minWidth: 128
  },
  modalActions: {
    marginTop: 64,
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between'
  },
  modalOkButton: {
    backgroundColor: colors.primary,
    fontSize: 32,
    padding: 8,
    borderRadius: 50
  },
  modalCancelButton: {
    backgroundColor: colors.danger,
    fontSize: 32,
    padding: 8,
    borderRadius: 50
  }
})
