import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import booking from '../../Aava_Booking.ts';

const Booking = () => {
  const handleBookingPress = (booking) => {
    // Handle the booking click here
    console.log('Booking clicked:', booking);
  };

  return (
    <ScrollView horizontal alwaysBounceVertical showsHorizontalScrollIndicator={false} >
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
    width: 175, // Smaller width
    position: 'relative',
  },
  image: {
    width: '100%',
    height: 100, // Adjusted height
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  textContainer: {
    backgroundColor: 'gray', // Gray background
    padding: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  title: {
    color: 'black', // Blue font color
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Booking;