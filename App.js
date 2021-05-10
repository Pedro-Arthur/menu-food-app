import React from 'react';
import { StatusBar, LogBox } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';

import Routes from './src/routes';

export default function App() {

  LogBox.ignoreAllLogs();

  return (
    <NavigationContainer>

      <StatusBar backgroundColor="#FFF" barStyle="dark-content" />
      <Routes />

    </NavigationContainer>
  );
}
