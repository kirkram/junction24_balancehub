import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BottomTabParamList } from '../@types/navigation';
import React from 'react';
import Home from '../screens/Home';
import Ai from '../screens/Ai';

const BottomTabNavigation = () => {
    const Tab = createBottomTabNavigator<BottomTabParamList>();
  return (
    <Tab.Navigator>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Ai" component={Ai} />
    </Tab.Navigator>
  )
}

export default BottomTabNavigation