import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import HomeWelcome from '../components/Home/HomeWelcome';
import Coupons from '../components/Home/Coupons';
import Events from '../components/Home/Events';
import Booking from '../components/Home/Booking';

const Home = () => {
  const navigation = useNavigation<any>();

  const handlePress = (section: string) => {
    if (section === 'Coupons') {
      navigation.navigate('CouponsList');
    } else if (section === 'Events') {
      navigation.navigate('EventsList');
    } else if (section === 'Bookings') {
      navigation.navigate('BookingsList');
    } else {
      console.log(`${section} clicked`);
    }
  };

  return (
    <ScrollView style={styles.container}>
      <HomeWelcome colorr="blue" />
      
      <TouchableOpacity style={styles.sectionHeader} onPress={() => handlePress('Coupons')}>
        <Text style={styles.sectionTitle}>Coupons</Text>
        <Icon name="chevron-forward" size={20} color="black" />
      </TouchableOpacity>
      <View style={styles.sectionContainer}>
        <Coupons />
      </View>
      
      <TouchableOpacity style={styles.sectionHeader} onPress={() => handlePress('Events')}>
        <Text style={styles.sectionTitle}>Events</Text>
        <Icon name="chevron-forward" size={20} color="black" />
      </TouchableOpacity>
      <View style={styles.sectionContainer}>
        <Events />
      </View>
      
      <TouchableOpacity style={styles.sectionHeader} onPress={() => handlePress('Bookings')}>
        <Text style={styles.sectionTitle}>Booking</Text>
        <Icon name="chevron-forward" size={20} color="black" />
      </TouchableOpacity>
      <View style={styles.sectionContainer}>
        <Booking />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  headerText: {
    fontSize: 20,
    fontWeight: "bold",
    padding: 20,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 0,
    paddingBottom: 5,
    paddingTop: 15,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "bold",
  },
  sectionContainer: {
    marginBottom: 7, 
  },
});

export default Home;