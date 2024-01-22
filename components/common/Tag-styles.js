import { StyleSheet } from 'react-native'

export const TagStyles = ({ colors }) => StyleSheet.create({
  tag: {
    padding: 8,
    color: colors.text,
    borderColor: colors.tagBorder,
    borderWidth: 1,
    backgroundColor: colors.tag,
    borderRadius: 16,
    alignSelf: 'flex-start'
  },
  tagText: {
    fontFamily: 'Quicksand-Medium',
    fontSize: 10
  }
})
