import { View, Text } from 'react-native'
import React from 'react'

const Coupons = () => {
    const color = "cyan";
    const name = "100% deal";
    const issue = "Blah Oy";
  return (
    <View>
        <View style={{ backgroundColor: color , width:200, height:100 }}>
            <Text> {name} </Text>
            <Text> {issue} </Text>
        </View>
    </View>
  )
}

export default Coupons