import React from 'react';
import type {Node} from 'react';
import {QueryClient, QueryClientProvider} from 'react-query';
import ScreenOne from './src/ScreenOne';
import ScreenSecond from './src/ScreenSecond';
import ScreenThree from './src/ScreenThree';
import ScreenFour from './src/ScreenFour';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import CartState from './src/Common/CartState';
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
const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#F9C0E7',
    color: '#661A0A',
  },
};
const App: () => Node = ({navigation}) => {
  return (
    <NavigationContainer theme={MyTheme}>
      <QueryClientProvider client={queryClient}>
        <CartState>
          <Stack.Navigator
            screenOptions={{
              headerShown: false,
            }}>
            <Stack.Screen name="ScreenOne" component={ScreenOne} />
            <Stack.Screen name="ScreenSecond" component={ScreenSecond} />
            <Stack.Screen name="ScreenThree" component={ScreenThree} />
            <Stack.Screen name="ScreenFour" component={ScreenFour} />
          </Stack.Navigator>
        </CartState>
      </QueryClientProvider>
    </NavigationContainer>
  );
};

export default App;
