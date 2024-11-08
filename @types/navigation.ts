import {NavigatorScreenParams} from '@react-navigation/native';

export type menuNavigation ={
 Root: NavigatorScreenParams<BottomTabParamList>;
}

export type BottomTabParamList = {
  Home: undefined;
  Ai: undefined;
};

export type HomeStackParamList = {
  MainHome: undefined;
  SecondHome: undefined;
};