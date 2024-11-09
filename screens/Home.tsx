import { View, Text, StyleSheet, ScrollView } from 'react-native';
import React from 'react';
import HomeHeadder from '../components/Home/HomeHeadder';
import Coupons from '../components/Home/Coupons';
import Events from '../components/Home/Events';
import Booking from '../components/Home/Booking';

const Home = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.headerText}>Home</Text>
      <HomeHeadder colorr="blue" />
      
      <Text style={styles.sectionTitle}>Coupons</Text>
      <View style={styles.sectionContainer}>
        <Coupons />
      </View>
      
      <Text style={styles.sectionTitle}>Events</Text>
      <View style={styles.sectionContainer}>
        <Events />
      </View>
      
      <Text style={styles.sectionTitle}>Booking</Text>
      <View style={styles.sectionContainer}>
        <Booking />
      </View>
      
      <Text>Home</Text>
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
  sectionTitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginVertical: 3,
  },
  sectionContainer: {
    marginBottom: 20, // Add margin to the bottom of each section
  },
});

export default Home;