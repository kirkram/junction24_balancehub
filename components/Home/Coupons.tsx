import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import coupons from '../../Aava_Coupons.ts';

const Coupons = () => {
  const handleCouponPress = (coupon) => {
    console.log('Coupon clicked:', coupon);
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
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(200, 200, 150, 0.25)',
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