import React from 'react';
import type {Node} from 'react';
import {QueryClient, QueryClientProvider} from 'react-query';

import ScreenOne from './src/ScreenOne';
import ScreenSecond from './src/ScreenSecond';
import ScreenThree from './src/ScreenThree';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: true,
      refetchOnMount: true,
      cacheTime: 1000 * 60 * 60 * 24,
    },
  },
});
const App: () => Node = ({navigation}) => {
  return (
    <NavigationContainer>
      <QueryClientProvider client={queryClient}>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}>
          <Stack.Screen name="ScreenOne" component={ScreenOne} />
          <Stack.Screen name="ScreenSecond" component={ScreenSecond} />
          <Stack.Screen name="ScreenThree" component={ScreenThree} />
        </Stack.Navigator>
      </QueryClientProvider>
    </NavigationContainer>
  );
};

export default App;
