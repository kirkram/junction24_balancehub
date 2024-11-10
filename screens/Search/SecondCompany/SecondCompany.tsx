import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import Colors from '../../../constants/Colors';
import HomeWelcome  from '../../../components/Search/HomeWelcome1';
import Coupons      from '../../../components/Search/Coupons2';
import Events       from '../../../components/Search/Events2';
import Booking      from '../../../components/Search/Booking2';

const Search = () => {
  const navigation = useNavigation<any>();

  const handlePress = (section: string) => {
    if (section === 'Coupons') {
      navigation.navigate('SecondCouponsList');
    } else if (section === 'Events') {
      navigation.navigate('SecondEventsList');
    } else if (section === 'Bookings') {
      navigation.navigate('SecondBookingsList');
    } else if (section === 'Like' || section === 'Dislike') {
      navigation.navigate('ThirdCompany');
    } else {
      console.log(`${section} clicked`);
    }
  };

  return (
    <ScrollView style={styles.container}>
      <HomeWelcome colorr="darkcyan" />

      <View style={styles.likeDislikeContainer}>
        <TouchableOpacity style={styles.dislikeButton} onPress={() => handlePress('Like')}>
          <Icon name="thumbs-down" size={40} color="rgba(150, 161, 147, 0.8)" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.likeButton} onPress={() => handlePress('Dislike')}>
          <Icon name="thumbs-up" size={40} color="rgba(150, 161, 147, 0.8)" />
        </TouchableOpacity>
      </View>

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
    marginTop: 3,
    marginBottom: 7,
  },
  infoContainer: {
    marginTop: 20,
    marginBottom: 5,
    paddingBottom: 15,
    color: Colors.ss.bottomText,
    fontSize: 20,
  },
  likeDislikeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 30,
    marginBottom: 20,
  },
  likeButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  dislikeButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default Search;