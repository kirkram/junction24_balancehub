import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons'
import coupons from '../Aava_Coupons.ts'

const CouponsList = () => {
  const navigation = useNavigation();

  const handleCouponPress = (coupon) => {
    console.log('Coupon clicked:', coupon);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate('MainHome' as never)} style={styles.backButton}>
        <Icon name="chevron-back" size={20} color="black" />
      </TouchableOpacity>
      <ScrollView showsVerticalScrollIndicator={false}>
        {coupons.map(coupon => (
          <TouchableOpacity key={coupon.id} onPress={() => handleCouponPress(coupon)}>
            <View style={styles.couponContainer}>
              <Image source={{ uri: coupon.file }} style={styles.image} />
              <View style={styles.textContainer}>
                <Text style={styles.title} numberOfLines={1} ellipsizeMode="tail"> {coupon.name} </Text>
                <Text style={styles.issueText}> {coupon.applicationName} </Text>
              </View>
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
  couponContainer: {
    marginVertical: 5,
    width: '100%',
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
});

export default CouponsList