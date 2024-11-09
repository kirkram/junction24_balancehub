import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import booking from '../../companies_filler/Companies_Booking.ts';
import Colors from '../../constants/Colors.ts';
import { NavigationProp, useNavigation } from '@react-navigation/native'
import { HomeStackParamList } from '../../@types/navigation.ts';

const Booking = () => {
  const navigation = useNavigation<NavigationProp<HomeStackParamList>>();

  const handleBookingPress = (booking: { id: string; image: string; title: string; description: string}) => {
    navigation.navigate('BookingScreen', { bookingId: booking.id });
    console.log('Booking clicked:', booking);
  };

  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false} >
      {booking.map(event => (
        <TouchableOpacity key={event.id} onPress={() => handleBookingPress(event)}>
          <View style={styles.eventContainer}>
            <Image source={{ uri: event.image }} style={styles.image} />
            <View style={styles.textContainer}>
              <Text style={styles.title}>{event.title}</Text>
            </View>
          </View>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  eventContainer: {
    marginRight: 5,
    marginLeft: 5,
    marginTop: 5,
    marginBottom: 5,
    width: 225,
    position: 'relative',
  },
  image: {
    width: '100%',
    height: 100,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  textContainer: {
    backgroundColor: Colors.ss.darkBg,
    padding: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  title: {
    color: Colors.ss.font,
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Booking;