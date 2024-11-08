import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { menuNavigation } from "../@types/navigation";
import BottomTabNavigation from "./BottomTabNavigation";

const Navigation = () => {
    const Stack = createNativeStackNavigator<menuNavigation>();
  return (
    <NavigationContainer theme={DefaultTheme}>
        <Stack.Navigator>
            <Stack.Screen name="Root" component={BottomTabNavigation} options={{headerShown: false}} />
        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigation