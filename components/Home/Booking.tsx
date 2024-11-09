import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import booking from '../../Aava_Booking.ts';
import Colors from '../../constants/Colors.ts';

const Booking = () => {
  const handleBookingPress = (booking) => {
    // Handle the booking click here
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