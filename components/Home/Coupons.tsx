import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet } from 'react-native'
import coupons from '../../Aava_Coupons.ts';
import React from 'react'

const Coupons = () => {
  const handleCouponPress = (coupon) => {
    console.log('Coupon clicked:', coupon);
  };
  return (
    <ScrollView horizontal alwaysBounceVertical showsHorizontalScrollIndicator={false} >
      {coupons.map(coupon => (
        <TouchableOpacity key={coupon.id} onPress={() => handleCouponPress(coupon)}>
          <View style={styles.couponeContainer}>
            <Image source={{ uri: coupon.file }} style={styles.image} />
            <View style={styles.textContainer}>
              <Text style={styles.title} numberOfLines={1} ellipsizeMode="tail"> {coupon.name} </Text>
              <Text style={styles.issueText}> {coupon.applicationName} </Text>
            </View>
          </View>
        </TouchableOpacity>
      ))}
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  couponeContainer: {
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
  textContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'space-between',
    padding: 10,
    backgroundColor: 'rgba(0, 0, 255, 0.35)',
    borderRadius: 10,
  },
  title: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
  },
  issueText: {
    color: 'white',
    fontSize: 14,
  },
})

export default Coupons
