import { Dimensions } from 'react-native'

export const useDimensions = () => {
  const dimensions = [Dimensions.get('window').width, Dimensions.get('window').height]
  return dimensions
}
