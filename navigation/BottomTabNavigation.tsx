// src/navigation/BottomTabNavigation.tsx
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Home/Home';
import Ai from '../screens/Survey/GenderForm';
import Header from '../components/Home/Header'; // Import the Header component
import Colors from '../constants/Colors'; // Import the Colors object
import { Platform } from 'react-native';
import HomeStackScreen from './stackScreens/HomeStackScreen';
import HomeIcon from '../components/Icons/HomeIcon';
// import AiIcon from '../components/Icons/AiIcon';
import RatingIcon from '../components/Icons/RatingIcon';
import SurveyStackScreen from './stackScreens/SurveyStackScreen';
import SearchStackScreen from './stackScreens/SearchStackScreen';

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
            case 'HOME':
              return <HomeIcon color={color} />;
            case 'RATING':
              return <RatingIcon color={color} />;
            // case 'Survey':
            //   return <SurveyIcon color={color} />;
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
          height: 80,
          display: 'flex',
          justifyContent: 'space-around',
          alignItems: 'center',
          width: '100%',
        },
        // tabBarLabel: () => null,
      })}
    >
      <Tab.Screen
        name="HOME"
        component={HomeStackScreen}
        options={{
          tabBarLabel: 'HOME',
        }}
      />
      <Tab.Screen
        name="RATING"
        component={SearchStackScreen}
        options={{
          tabBarLabel: 'RATING',
        }}
      />
      {/* <Tab.Screen
        name="Survey"
        component={SurveyStackScreen}
        options={{
          tabBarLabel: 'Survey',
        }}
      /> */}
    </Tab.Navigator>
  );
};

export default BottomTabNavigation;