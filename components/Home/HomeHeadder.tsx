import { View, Text } from 'react-native'
import React from 'react'

const HomeHeadder = ({colorr}:{colorr:string}) => {
    console.log(colorr);
    
  return (
    <View style={{ backgroundColor:colorr, width:"100%", height:"20%" }}>
      <Text>HomeHeadder</Text>
    </View>
  )
}

export default HomeHeadder