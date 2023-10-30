import {NativeStackNavigationProp} from '@react-navigation/native-stack';

type RootAppType = {
  Home: undefined;
  Status: undefined;
};

export type AppScreenProps = NativeStackNavigationProp<RootAppType>;
