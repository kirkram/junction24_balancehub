import { View, Text } from 'react-native'
import React from 'react'
import HomeHeadder from '../components/Home/HomeHeadder'
import Coupons from '../components/Home/Coupons'

const Home = () => {
  return (
    <View>
      <HomeHeadder colorr="blue" />
      <Coupons />
      <Text>Home</Text>
    </View>
  )
}

export default Home