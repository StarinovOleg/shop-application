import React from 'react';
import type {Node} from 'react';

import ScreenOne from './src/ScreenOne';
import ScreenSecond from './src/ScreenSecond';
import ScreenThree from './src/ScreenThree';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();
const App: () => Node = ({navigation}) => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="ScreenOne" component={ScreenOne} />
        <Stack.Screen name="ScreenSecond" component={ScreenSecond} />
        <Stack.Screen name="ScreenThree" component={ScreenThree} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
