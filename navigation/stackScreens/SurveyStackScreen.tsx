import { SurveyStackParamList } from '../../@types/navigation';
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import GenderForm from '../../screens/Survey/GenderForm';
import SurveyInterests from '../../screens/Survey/SurveyIntersets';

const SurveyStack = createNativeStackNavigator<SurveyStackParamList>();

const SurveyStackScreen = () => {
  return (
    <SurveyStack.Navigator>
        <SurveyStack.Screen name="Survey" component={GenderForm} options={{ headerShown: false }}/>
        <SurveyStack.Screen name="SurveyInterests" component={SurveyInterests} options={{ headerShown: false }}/>
    </SurveyStack.Navigator>
  );
}

export default SurveyStackScreen