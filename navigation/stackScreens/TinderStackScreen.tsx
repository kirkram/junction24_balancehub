import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react'
import { TinderStackParamList } from '../../@types/navigation';
import Home from '../../screens/Tinder/Home';
import CouponsList from '../../screens/Tinder/CouponsList';
import CouponScreen from '../../screens/Tinder/CouponScreen';
import EventsList from '../../screens/Tinder/EventsList';
import EventScreen from '../../screens/Tinder/EventScreen';
import BookingsList from '../../screens/Tinder/BookingsList';
import BookingScreen from '../../screens/Tinder/BookingScreen';


const TinderStackScreen = () => {
    const TinderStack = createNativeStackNavigator<TinderStackParamList>();
  return (
    <TinderStack.Navigator>
        <TinderStack.Screen name="MainHome" component={Home} options={{ headerShown: false }}/>
        <TinderStack.Screen name="CouponsList" component={CouponsList} options={{ headerShown: false }}/>
        <TinderStack.Screen name="CouponScreen" component={CouponScreen} options={{ headerShown: false }} />
        <TinderStack.Screen name="EventsList" component={EventsList} options={{ headerShown: false }}/>
        <TinderStack.Screen name="EventScreen" component={EventScreen} options={{ headerShown: false }} />
        <TinderStack.Screen name="BookingsList" component={BookingsList} options={{ headerShown: false }}/>
        <TinderStack.Screen name="BookingScreen" component={BookingScreen} options={{ headerShown: false }} />
    </TinderStack.Navigator>
  )
}

export default TinderStackScreen