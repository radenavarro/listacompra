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
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import Stock from './views/stock/Stock';

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
        <GestureHandlerRootView style={{flex: 1}}>
        <Tab.Navigator
          activeColor={isDarkMode ? "#ffffff" : "#9600cd"}
          inactiveColor={isDarkMode ? "#c1a2d1" : "#7e6ba3"}
          barStyle={{backgroundColor: isDarkMode ? "#5d1285" : "#cdc0e8"}}
          activeIndicatorStyle={{backgroundColor: isDarkMode ? 'rgb(157, 69, 193)' : 'rgb(239, 232, 254)'}}
        >
          <Tab.Screen 
            name={'Lista'} 
            component={Home} 
            options={{
              tabBarIcon: ({color}) => (
                <Icon style={styles.icon} name='home' color={color} />
              ),
              tabBarLabel: (<Text style={styles.label}>LISTA</Text>)
            }}
          />
          <Tab.Screen 
            name={'Archivo'} 
            component={Archivo} 
            options={{
              tabBarIcon: ({color}) => (
                <Icon style={styles.icon} name='storage' color={color} />
              ),
              tabBarLabel: (<Text style={styles.label}>ARCHIVO</Text>)
            }}
          />
          <Tab.Screen
            name={'Stock'} 
            component={Stock} 
            options={{
              tabBarIcon: ({color}) => (
                <Icon style={styles.icon} name='kitchen' color={color} />
              ),
              tabBarLabel: (<Text style={styles.label}>STOCK</Text>)
            }}
          />
        </Tab.Navigator>
        </GestureHandlerRootView>
        
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default App;
