import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react'
import { SearchStackParamList } from '../../@types/navigation';
import FirstCompany        from '../../screens/Search/FirstCompany/FirstCompany';
import FirstCouponsList    from '../../screens/Search/FirstCompany/FirstCouponsList';
import FirstCouponScreen   from '../../screens/Search/FirstCompany/FirstCouponScreen';
import FirstEventsList     from '../../screens/Search/FirstCompany/FirstEventsList';
import FirstEventScreen    from '../../screens/Search/FirstCompany/FirstEventScreen';
import FirstBookingsList   from '../../screens/Search/FirstCompany/FirstBookingsList';
import FirstBookingScreen  from '../../screens/Search/FirstCompany/FirstBookingScreen';
import SecondCompany       from '../../screens/Search/SecondCompany/SecondCompany';
import SecondCouponsList   from '../../screens/Search/SecondCompany/SecondCouponsList';
import SecondCouponScreen  from '../../screens/Search/SecondCompany/SecondCouponScreen';
import SecondEventsList    from '../../screens/Search/SecondCompany/SecondEventsList';
import SecondEventScreen   from '../../screens/Search/SecondCompany/SecondEventScreen';
import SecondBookingsList  from '../../screens/Search/SecondCompany/SecondBookingsList';
import SecondBookingScreen from '../../screens/Search/SecondCompany/SecondBookingScreen';
import ThirdCompany        from '../../screens/Search/ThirdCompany/ThirdCompany';
import ThirdCouponsList    from '../../screens/Search/ThirdCompany/ThirdCouponsList';
import ThirdCouponScreen   from '../../screens/Search/ThirdCompany/ThirdCouponScreen';
import ThirdEventsList     from '../../screens/Search/ThirdCompany/ThirdEventsList';
import ThirdEventScreen    from '../../screens/Search/ThirdCompany/ThirdEventScreen';
import ThirdBookingsList   from '../../screens/Search/ThirdCompany/ThirdBookingsList';
import ThirdBookingScreen  from '../../screens/Search/ThirdCompany/ThirdBookingScreen';

const SearchStackScreen = () => {
    const SearchStack = createNativeStackNavigator<SearchStackParamList>();
  return (
    <SearchStack.Navigator>
        <SearchStack.Screen name="FirstCompany"        component={FirstCompany} options={{ headerShown: false }}/>
        <SearchStack.Screen name="FirstCouponsList"    component={FirstCouponsList} options={{ headerShown: false }}/>
        <SearchStack.Screen name="FirstCouponScreen"   component={FirstCouponScreen} options={{ headerShown: false }} />
        <SearchStack.Screen name="FirstEventsList"     component={FirstEventsList} options={{ headerShown: false }}/>
        <SearchStack.Screen name="FirstEventScreen"    component={FirstEventScreen} options={{ headerShown: false }} />
        <SearchStack.Screen name="FirstBookingsList"   component={FirstBookingsList} options={{ headerShown: false }}/>
        <SearchStack.Screen name="FirstBookingScreen"  component={FirstBookingScreen} options={{ headerShown: false }} />
        <SearchStack.Screen name="SecondCompany"       component={SecondCompany} options={{ headerShown: false }}/>
        <SearchStack.Screen name="SecondCouponsList"   component={SecondCouponsList} options={{ headerShown: false }}/>
        <SearchStack.Screen name="SecondCouponScreen"  component={SecondCouponScreen} options={{ headerShown: false }} />
        <SearchStack.Screen name="SecondEventsList"    component={SecondEventsList} options={{ headerShown: false }}/>
        <SearchStack.Screen name="SecondEventScreen"   component={SecondEventScreen} options={{ headerShown: false }} />
        <SearchStack.Screen name="SecondBookingsList"  component={SecondBookingsList} options={{ headerShown: false }}/>
        <SearchStack.Screen name="SecondBookingScreen" component={SecondBookingScreen} options={{ headerShown: false }} />
        <SearchStack.Screen name="ThirdCompany"        component={ThirdCompany} options={{ headerShown: false }}/>
        <SearchStack.Screen name="ThirdCouponsList"    component={ThirdCouponsList} options={{ headerShown: false }}/>
        <SearchStack.Screen name="ThirdCouponScreen"   component={ThirdCouponScreen} options={{ headerShown: false }} />
        <SearchStack.Screen name="ThirdEventsList"     component={ThirdEventsList} options={{ headerShown: false }}/>
        <SearchStack.Screen name="ThirdEventScreen"    component={ThirdEventScreen} options={{ headerShown: false }} />
        <SearchStack.Screen name="ThirdBookingsList"   component={ThirdBookingsList} options={{ headerShown: false }}/>
        <SearchStack.Screen name="ThirdBookingScreen"  component={ThirdBookingScreen} options={{ headerShown: false }} />
    </SearchStack.Navigator>
  )
}

export default SearchStackScreen