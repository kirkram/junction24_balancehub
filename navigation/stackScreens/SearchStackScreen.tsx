import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react'
import { SearchStackParamList } from '../../@types/navigation';
import Home from '../../screens/Search/Home';
import CouponsList from '../../screens/Search/CouponsList';
import CouponScreen from '../../screens/Search/CouponScreen';
import EventsList from '../../screens/Search/EventsList';
import EventScreen from '../../screens/Search/EventScreen';
import BookingsList from '../../screens/Search/BookingsList';
import BookingScreen from '../../screens/Search/BookingScreen';


const SearchStackScreen = () => {
    const SearchStack = createNativeStackNavigator<SearchStackParamList>();
  return (
    <SearchStack.Navigator>
        <SearchStack.Screen name="MainHome" component={Home} options={{ headerShown: false }}/>
        <SearchStack.Screen name="CouponsList" component={CouponsList} options={{ headerShown: false }}/>
        <SearchStack.Screen name="CouponScreen" component={CouponScreen} options={{ headerShown: false }} />
        <SearchStack.Screen name="EventsList" component={EventsList} options={{ headerShown: false }}/>
        <SearchStack.Screen name="EventScreen" component={EventScreen} options={{ headerShown: false }} />
        <SearchStack.Screen name="BookingsList" component={BookingsList} options={{ headerShown: false }}/>
        <SearchStack.Screen name="BookingScreen" component={BookingScreen} options={{ headerShown: false }} />
    </SearchStack.Navigator>
  )
}

export default SearchStackScreen