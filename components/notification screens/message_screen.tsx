import React from 'react'
import { View, Image } from 'react-native'
import tw from 'twrnc'
import Tabbar from '../reuseable/tabbar'

const Message_screen = () => {
  return (
   <>
   <View style={tw`flex-1 items-center  `}>
      <View style={tw`flex-row h-42 w-1/1 bg-[#5AEB169E] rounded-bl-30 rounded-br-30`}>

      {/* <Tabbar/> */}

      <Image 
      style={tw`h-20 w-20 ml-5`}
      source={require('../../assets/images/sender.png')}/>

      </View>
   </View>
   </>

  )
}

export default Message_screen