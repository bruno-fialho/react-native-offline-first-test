/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import {Routes} from 'routes';

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <Routes />
    </NavigationContainer>
  );
}

export {App};
