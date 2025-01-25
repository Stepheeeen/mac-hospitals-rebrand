import React from 'react'
import { View } from 'react-native'
import { Text } from 'react-native'
import { TouchableOpacity } from 'react-native'
import tw from 'twrnc'
import { LinearGradient } from 'expo-linear-gradient'
import { GestureResponderEvent } from 'react-native'

const Button = (
   {
      text,
      colors,
      func
   }:{
      text?: String,
      colors?: any,
      func?:(event: GestureResponderEvent) => void
   }
) => {
  return (
   <>
   <View style={tw`flex-row justify-between mt-10`}>
   <TouchableOpacity style={tw`flex-1 rounded-[20px] mr-2 pr-4 pl-4 pt-24`}
   onPress={func}
   >
            <LinearGradient
              colors={colors}
              start={[0, 0]}
              end={[1, 1]}
              style={tw`rounded-[20px] h-[48px] justify-center items-center`}
            >
              <Text style={tw`text-white text-center font-medium text-lg`}>
                {text}
              </Text>
            </LinearGradient>
          </TouchableOpacity>
   </View>
   </>

  )
}

export default Button