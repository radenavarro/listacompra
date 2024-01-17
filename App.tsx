/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { DarkTheme, DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { createMaterialBottomTabNavigator } from 'react-native-paper/react-navigation';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { SafeAreaProvider } from 'react-native-safe-area-context';

// THEMES
import { DarkMode } from './themes/darkMode';
import { LightMode } from './themes/lightMode';
// VIEWS
import Home from './views/home/Home';
import Archivo from './views/archivo/Archivo';
// CSS in JS
import {AppStyles} from './App-styles'

type SectionProps = PropsWithChildren<{
  title: string;
}>;

const Stack = createNativeStackNavigator();
const Tab = createMaterialBottomTabNavigator();

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === "dark";

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const styles = isDarkMode ? AppStyles(DarkMode) : AppStyles(LightMode)

  return (
    <SafeAreaProvider>
      <NavigationContainer theme={isDarkMode ? DarkMode : LightMode}>
        <Tab.Navigator>
          <Tab.Screen 
            name={'Lista'} 
            component={Home} 
            options={{
              tabBarIcon: ({color}) => (
                <Icon style={styles.icon} name='home' />
              )
            }}
          />
          <Tab.Screen 
            name={'Archivo'} 
            component={Archivo} 
            options={{
              tabBarIcon: ({color}) => (
                <Icon style={styles.icon} name='storage' />
              )
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default App;
