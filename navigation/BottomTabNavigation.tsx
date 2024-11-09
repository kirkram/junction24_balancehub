// src/navigation/BottomTabNavigation.tsx
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Home/Home';
import Ai from '../screens/Survey/Survey';
import Header from '../components/Home/Header'; // Import the Header component
import Colors from '../constants/Colors'; // Import the Colors object
import { Platform } from 'react-native';
import HomeStackScreen from './stackScreens/HomeStackScreen';
import HomeIcon from '../components/Icons/HomeIcon';
import AiIcon from '../components/Icons/AiIcon';
import SurveyStackScreen from './stackScreens/SurveyStackScreen';
import TinderStackScreen from './stackScreens/TinderStackScreen';

const BottomTabNavigation = () => {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      screenOptions={({ route, navigation }) => ({
        header: () => <Header screenName={route.name} />, // Use the custom Header component
        headerShown: true,
        tabBarIcon: ({ focused, color }) => {
          color = focused ? Colors.ss.secondary : Colors.ss.primary;
          switch (route.name) {
            case 'Home':
              return <HomeIcon color={color} />;
            case 'Tinder':
              return <AiIcon color={color} />;
            case 'Survey':
              return <AiIcon color={color} />;
            default:
              return null;
          }
        },
        tabBarActiveTintColor: Colors.ss.secondary,
        tabBarInactiveTintColor: Colors.ss.primary,
        tabBarHideOnKeyboard: Platform.OS === 'android' ? true : false,
        tabBarStyle: {
          backgroundColor: Colors.ss.lightBg,
          borderTopWidth: 1,
          borderColor: Colors.ss.middleBg,
          height: 77,
          display: 'flex',
          justifyContent: 'space-around',
          alignItems: 'center',
          width: '100%',
        },
        // tabBarLabel: () => null,
      })}
    >
      <Tab.Screen
        name="Home"
        component={HomeStackScreen}
        options={{
          tabBarLabel: 'Home',
        }}
      />
      <Tab.Screen
        name="Tinder"
        component={TinderStackScreen}
        options={{
          tabBarLabel: 'Tinder',
        }}
      />
      <Tab.Screen
        name="Survey"
        component={SurveyStackScreen}
        options={{
          tabBarLabel: 'Survey',
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigation;