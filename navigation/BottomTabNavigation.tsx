// src/navigation/BottomTabNavigation.tsx
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import Ai from '../screens/Ai';
import Header from '../components/Home/Header'; // Import the Header component
import Colors from '../constants/Colors'; // Import the Colors object
import { Platform } from 'react-native';
import HomeStackScreen from './stackScreens/HomeStackScreen';
import HomeIcon from '../components/Icons/HomeIcon';
import AiIcon from '../components/Icons/AiIcon';

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
            case 'Ai':
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
        name="Ai"
        component={Ai}
        options={{
          tabBarLabel: 'Ai',
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigation;