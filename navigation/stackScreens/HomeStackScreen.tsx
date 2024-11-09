import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react'
import { HomeStackParamList } from '../../@types/navigation';
import Home from '../../screens/Home/Home';
import CouponsList from '../../screens/Home/CouponsList';
import CouponScreen from '../../screens/Home/CouponScreen';
import EventsList from '../../screens/Home/EventsList';
import EventScreen from '../../screens/Home/EventScreen';
import BookingsList from '../../screens/Home/BookingsList';
import BookingScreen from '../../screens/Home/BookingScreen';
import SustainabilityScreen from '../../screens/Home/SustainabilityScreen';
import ContactUsScreen from '../../screens/Home/ContactUsScreen';


const HomeStackScreen = () => {
    const HomeStack = createNativeStackNavigator<HomeStackParamList>();
  return (
    <HomeStack.Navigator>
        <HomeStack.Screen name="MainHome" component={Home} options={{ headerShown: false }}/>
        <HomeStack.Screen name="CouponsList" component={CouponsList} options={{ headerShown: false }}/>
        <HomeStack.Screen name="CouponScreen" component={CouponScreen} options={{ headerShown: false }} />
        <HomeStack.Screen name="EventsList" component={EventsList} options={{ headerShown: false }}/>
        <HomeStack.Screen name="EventScreen" component={EventScreen} options={{ headerShown: false }} />
        <HomeStack.Screen name="BookingsList" component={BookingsList} options={{ headerShown: false }}/>
        <HomeStack.Screen name="BookingScreen" component={BookingScreen} options={{ headerShown: false }} />
        <HomeStack.Screen name="SustainabilityScreen" component={SustainabilityScreen} options={{ headerShown: false }} />
        <HomeStack.Screen name="ContactUsScreen" component={ContactUsScreen} options={{ headerShown: false }} />
    </HomeStack.Navigator>
  )
}

export default HomeStackScreen