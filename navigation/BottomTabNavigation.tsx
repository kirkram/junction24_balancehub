// src/navigation/BottomTabNavigation.tsx
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import Ai from '../screens/Ai';
import Header from '../components/Home/Header'; // Import the Header component
import Colors from '../constants/Colors'; // Import the Colors object
import { Platform } from 'react-native';

const BottomTabNavigation = () => {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      screenOptions={({ route, navigation }) => ({
        header: () => <Header screenName={route.name} />, // Use the custom Header component
        headerShown: true,
        tabBarIcon: ({ focused, color }) => {
          color = focused ? Colors.ss.primary : Colors.ss.secondary;
          switch (route.name) {
            // case 'Home':
            //   return <HomeIcon color={color} />;
            // case 'Ai':
            //   return <AiIcon color={color} />;
            default:
              return null;
          }
        },
        tabBarActiveTintColor: Colors.ss.primary,
        tabBarInactiveTintColor: Colors.ss.secondary,
        tabBarHideOnKeyboard: Platform.OS === 'android' ? true : false,
        tabBarStyle: {
          backgroundColor: Colors.ss.lightBg,
          borderTopWidth: 1,
          borderColor: Colors.ss.middleBg,
          height: 64,
          display: 'flex',
          justifyContent: 'space-around',
          alignItems: 'center',
          width: '100%',
        },
        tabBarLabel: () => null,
      })}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Ai" component={Ai} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigation;