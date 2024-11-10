import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import coupons from '../../companies_filler/Company2_Coupons.ts';
import { SearchStackParamList } from '../../@types/navigation.ts';
import Colors from '../../constants/Colors'; // Import the Colors object

const Coupons = () => {
  const navigation = useNavigation<NavigationProp<SearchStackParamList>>();
  
  const handleCouponPress = (coupon: { id: string; file: string; name: string; applicationFile: string; applicationName: string; }) => {
    console.log('Coupon clicked:', coupon);
    navigation.navigate('SecondCouponScreen', { couponId : coupon.id });
  };

  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      {coupons.map(coupon => (
        <TouchableOpacity key={coupon.id} onPress={() => handleCouponPress(coupon)}>
          <View style={styles.couponContainer}>
            <Image source={{ uri: coupon.file }} style={styles.image} />
              <View style={styles.overlay} />
              <View style={styles.textContainer}>
                <Text style={styles.title} numberOfLines={1} ellipsizeMode="tail">{coupon.name}</Text>
                <View style={styles.applicationContainer}>
                  <Image source={{ uri: coupon.applicationFile }} style={styles.applicationImage} />
                  <Text style={styles.applicationName}>{coupon.applicationName}</Text>
                </View>
              </View>
          </View>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  couponContainer: {
    marginRight: 5,
    marginLeft: 5,
    marginTop: 5,
    marginBottom: 5,
    width: 175,
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
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: Colors.ss.overlay, // Use the overlay color from Colors
    borderRadius: 10,
  },
  textContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
    position: 'absolute',
    top: 10,
    left: 10,
  },
  applicationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    bottom: 10,
    left: 10,
  },
  applicationImage: {
    width: 20,
    height: 20,
    borderRadius: 10,
    marginRight: 5,
  },
  applicationName: {
    fontSize: 14,
    color: 'white',
  },
});

export default Coupons;