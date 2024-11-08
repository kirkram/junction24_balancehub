import { View, Text } from 'react-native'
import React from 'react'
import HomeHeadder from '../components/Home/HomeHeadder'
import Coupons from '../components/Home/Coupons'
import Events from '../components/Home/Events'

const Home = () => {
  return (
    <View>
      <HomeHeadder colorr="blue" />
      <Coupons />
      <Events />
      <Text>Home</Text>
    </View>
  )
}

export default Home