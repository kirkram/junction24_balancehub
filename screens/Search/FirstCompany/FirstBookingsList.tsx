import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet } from 'react-native'
import { NavigationProp, useNavigation } from '@react-navigation/native'
import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons'
import { LinearGradient } from 'expo-linear-gradient';
import bookings from '../../../companies_filler/Company1_Booking.ts'
import { SearchStackParamList } from '../../../@types/navigation.ts';

const BookingsList = () => {
  const navigation = useNavigation<NavigationProp<SearchStackParamList>>();

  const handleBookingPress = (booking: { id: string; image: string; title: string; }) => {
    console.log('Booking clicked:', booking);
    navigation.navigate('FirstBookingScreen', { bookingId: booking.id });
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate('FirstCompany' as never)} style={styles.backButton}>
        <Icon name="chevron-back" size={20} color="black" />
      </TouchableOpacity>
      <ScrollView showsVerticalScrollIndicator={false}>
        {bookings.map(booking => (
          <TouchableOpacity key={booking.id} onPress={() => handleBookingPress(booking)}>
            <View style={styles.bookingContainer}>
              <Image source={{ uri: booking.image }} style={styles.image} />
                <LinearGradient
                colors={['rgba(145, 171, 147, 0.6)', 'rgba(132, 160, 147, 0.3)', 'transparent']}
                start={[0, 1]}
                end={[1, 0]}
                style={styles.gradient}
                >
                <View style={styles.textContainer}>
                  <Text style={styles.title} numberOfLines={1} ellipsizeMode="tail"> {booking.title} </Text>
                </View>
                </LinearGradient>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  backButton: {
    padding: 8,
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  bookingContainer: {
    marginVertical: 5,
    width: '100%',
    position: 'relative',
  },
  image: {
    width: '100%',
    height: 100,
    borderRadius: 10,
  },
  gradient: {
    ...StyleSheet.absoluteFillObject,
    borderRadius: 10,
  },
  textContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'space-between',
    padding: 10,
    borderRadius: 10,
  },
  title: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
  },
  locationText: {
    color: 'white',
    fontSize: 14,
  },
});

export default BookingsList