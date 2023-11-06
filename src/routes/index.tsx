import React, {useEffect, useRef, useState} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Geolocation from '@react-native-community/geolocation';

import {Home} from 'screens';
import {Status} from 'screens';
import {database} from 'db';
import {PackageModel} from 'db/model/packageModel';
import {LocationProps, PackageStatus} from 'types/packages';
import {usePackage} from 'context/package';
import {Alert} from 'react-native';
import {sync} from 'utils/sync';

const Stack = createNativeStackNavigator();

export function Routes() {
  const [location, setLocation] = useState<LocationProps>({} as LocationProps);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const {packages, interval, isOnline, updatePackages} = usePackage();

  const getCurrentPosition = () => {
    Geolocation.getCurrentPosition(
      info => {
        setLocation({
          latitude: info.coords.latitude,
          longitude: info.coords.longitude,
          speed: info.coords.speed || 0,
        });
      },
      error => Alert.alert('GetCurrentPosition Error', JSON.stringify(error)),
      {enableHighAccuracy: true},
    );
  };

  useEffect(() => {
    if (interval && location && !!updatePackages) {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }

      async function onCreatePackage(updateInterval: number) {
        intervalRef.current = setInterval(async () => {
          getCurrentPosition();
          const createdAt = new Date().getTime();

          await database.write(async () => {
            await database.get<PackageModel>('packages').create(data => {
              data.status = PackageStatus.PENDING;
              data.latitude = location.latitude;
              data.longitude = location.longitude;
              data.speed = location.speed;
              data.time = String(createdAt);
            });
          });

          updatePackages();
        }, updateInterval * 1000);
      }

      onCreatePackage(interval);
    }
  }, [interval, location, updatePackages]);

  useEffect(() => {
    if (isOnline) {
      sync({packages});
    }
  }, [isOnline, packages]);

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
