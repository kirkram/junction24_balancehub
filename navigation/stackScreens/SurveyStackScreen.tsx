import { SurveyStackParamList } from '../../@types/navigation';
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Survey from '../../screens/Survey';

const SurveyStackScreen = () => {
    const SurveyStack = createNativeStackNavigator<SurveyStackParamList>();
  return (
    <SurveyStack.Navigator>
        <SurveyStack.Screen name="Survey" component={Survey} options={{ headerShown: false }}/>
    </SurveyStack.Navigator>
  )
}

export default SurveyStackScreen