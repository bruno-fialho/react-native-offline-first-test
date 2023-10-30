import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {Home} from 'screens';
import {Status} from 'screens';

const Stack = createNativeStackNavigator();

export function Routes() {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        statusBarColor: '#000062',
        statusBarStyle: 'light',
      }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Status" component={Status} />
    </Stack.Navigator>
  );
}
