import {NavigatorScreenParams} from '@react-navigation/native';

export type menuNavigation ={
 Root: NavigatorScreenParams<BottomTabParamList>;
}

export type BottomTabParamList = {
  Home: undefined;
  Search: undefined;
  Survey: undefined;
};

export type HomeStackParamList = {
  MainHome: undefined;
  CouponsList: undefined;
  EventsList: undefined;
  BookingsList: undefined;
  CouponScreen: { couponId: string };
  EventScreen: { eventId: string };
  BookingScreen: { bookingId: string };
  SustainabilityScreen: undefined;
  ContactUsScreen: undefined;
};

export type SearchStackParamList = {
  MainHome: undefined;
  CouponsList: undefined;
  EventsList: undefined;
  BookingsList: undefined;
  CouponScreen: { couponId: string };
  EventScreen: { eventId: string };
  BookingScreen: { bookingId: string };
  SustainabilityScreen: undefined;
  ContactUsScreen: undefined;
};

export type SurveyStackParamList = {
  Survey: undefined;
  SurveyInterests: undefined;
};