import { DarkTheme } from '@react-navigation/native'

export const DarkMode = {
  dark: true,
  colors: {
    ...DarkTheme.colors,
    primary: 'rgb(9, 92, 155)',
    danger: 'rgb(125, 8, 8)',
    warning: 'rgb(122, 90, 0)',
    default: 'rgb(68, 68, 68)',
    buttonText: 'rgb(255, 255, 255)',
    buttonTextDisabled: 'rgb(179, 179, 179)',
    background: 'rgb(32, 32, 32)',
    card: 'rgb(32, 32, 32)',
    text: 'rgb(255, 255, 255)',
    border: 'rgb(199, 199, 204)',
    borderButton: 'rgba(199, 199, 204, 0.3)',
    notification: 'rgb(13, 137, 233)',
    textChecked: 'rgb(182, 182, 182)',
    iconChecked: 'rgb(0, 255, 30)',
    backgroundChecked: 'rgba(255, 255, 255, 0.2)',
    shadowColor: '#e1e1e1',
    tagBorder: 'rgba(255, 255, 255, 0.2)',
    tag: 'rgba(255, 255, 255, 0.05)',
    confirmBackground: '#c1a2d1',
    confirmText: 'rgb(32, 32, 32)',
    searchItemBorder: 'rgb(157, 69, 193)',
    searchItemBackground: '#5d1285',
    searchItemText: 'rgb(32, 32, 32)'
  }
}
