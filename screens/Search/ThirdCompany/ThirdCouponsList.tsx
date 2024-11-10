import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet } from 'react-native'
import { NavigationProp, useNavigation } from '@react-navigation/native'
import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons'
import { LinearGradient } from 'expo-linear-gradient';
import coupons from '../../../companies_filler/Company3_Coupons.ts'
import { SearchStackParamList } from '../../../@types/navigation.ts';

const CouponsList = () => {
  const navigation = useNavigation<NavigationProp<SearchStackParamList>>();

  const handleCouponPress = (coupon: { id: string; file: string; name: string; applicationName: string }) => {
    console.log('Coupon clicked:', coupon);
    navigation.navigate('ThirdCouponScreen', { couponId : coupon.id });
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate('ThirdCompany' as never)} style={styles.backButton}>
        <Icon name="chevron-back" size={20} color="black" />
      </TouchableOpacity>
      <ScrollView showsVerticalScrollIndicator={false}>
        {coupons.map(coupon => (
          <TouchableOpacity key={coupon.id} onPress={() => handleCouponPress(coupon)}>
            <View style={styles.couponContainer}>
              <Image source={{ uri: coupon.file }} style={styles.image} />
                <LinearGradient
                colors={['rgba(145, 171, 147, 0.6)', 'rgba(132, 160, 147, 0.3)', 'transparent']}
                start={[0, 1]}
                end={[1, 0]}
                style={styles.gradient}
                >
                <View style={styles.textContainer}>
                  <Text style={styles.title} numberOfLines={1} ellipsizeMode="tail"> {coupon.name} </Text>
                  <Text style={styles.issueText}> {coupon.applicationName} </Text>
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
  issueText: {
    color: 'white',
    fontSize: 14,
  },
});

export default CouponsList