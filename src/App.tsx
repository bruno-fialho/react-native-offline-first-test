/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import {Routes} from 'routes';
import {PackageProvider} from 'context/package';

function App(): JSX.Element {
  return (
    <PackageProvider>
      <NavigationContainer>
        <Routes />
      </NavigationContainer>
    </PackageProvider>
  );
}

export {App};
