import { View, Text } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react'
import { HomeStackParamList } from '../../@types/navigation';
import Home from '../../screens/Home';
import CouponsList from '../../screens/CouponsList';

const HomeStackScreen = () => {
    const HomeStack = createNativeStackNavigator<HomeStackParamList>();
  return (
    <HomeStack.Navigator>
        <HomeStack.Screen name="MainHome" component={Home} options={{ headerShown: false }}/>
        <HomeStack.Screen name="CouponsList" component={CouponsList} options={{ headerShown: false }}/>
    </HomeStack.Navigator>
  )
}

export default HomeStackScreen