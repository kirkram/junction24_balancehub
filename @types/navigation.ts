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
  ProfileScreen: undefined;
};

export type SearchStackParamList = {
  FirstCompany: undefined;
  FirstCouponsList: undefined;
  FirstEventsList: undefined;
  FirstBookingsList: undefined;
  FirstCouponScreen: { couponId: string };
  FirstEventScreen: { eventId: string };
  FirstBookingScreen: { bookingId: string };
  SecondCompany: undefined;
  SecondCouponsList: undefined;
  SecondEventsList: undefined;
  SecondBookingsList: undefined;
  SecondCouponScreen: { couponId: string };
  SecondEventScreen: { eventId: string };
  SecondBookingScreen: { bookingId: string };
  ThirdCompany: undefined;
  ThirdCouponsList: undefined;
  ThirdEventsList: undefined;
  ThirdBookingsList: undefined;
  ThirdCouponScreen: { couponId: string };
  ThirdEventScreen: { eventId: string };
  ThirdBookingScreen: { bookingId: string };
};

export type SurveyStackParamList = {
  Survey: undefined;
  SurveyInterests: undefined;
};