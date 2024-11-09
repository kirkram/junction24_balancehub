import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import HomeHeadder from '../components/Home/HomeHeadder'
import Coupons from '../components/Home/Coupons'
import Events from '../components/Home/Events'
import Booking from '../components/Home/Booking'

const Home = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Home</Text>
      <HomeHeadder colorr="blue" />
      <Coupons />
      <Events />
      <Booking />
      <Text>Home</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
  },
  headerText: {
    fontSize: 20,
    fontWeight: "bold",
    padding: 20,
  },
})

export default Home