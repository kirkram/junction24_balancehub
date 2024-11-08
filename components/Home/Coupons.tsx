import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet } from 'react-native'
import coupons from '../../Aava_Coupons.ts';
import React from 'react'

const Coupons = () => {
    const color = "cyan";
    const name = "100% deal";
    const issue = "Blah Oy";

    const handleCouponPress = (coupon) => {
      console.log('Coupon clicked:', coupon);
    };

  return (
    <ScrollView horizontal>
      {coupons.map(coupon => (
        <TouchableOpacity key={coupon.id} onPress={() => handleCouponPress(coupon)}>
          <Image source={{ uri: coupon.image }} style={styles.image} />
          <View style={styles.couponeContainer}>
              <Text> {name} </Text>
              <Text> {issue} </Text>
          </View>
        </TouchableOpacity>
      ))}
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  couponeContainer: {
    marginRight: 10,
    width: 175,
    position: 'relative',
  },
  image: {
    width: '100%',
    height: 100,
    borderRadius: 10,
  },
})

export default Coupons