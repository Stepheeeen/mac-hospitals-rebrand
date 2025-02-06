import React from "react";
import { View, Image } from "react-native";
// import { Image } from "react-native-svg";
import { Text } from "react-native";

import tw from "twrnc"

const Statusbar = (

   {
      user
   }:
   {
      user?:string
   }
) => {

  return (
    <View style={tw`flex-row items-center justify-between `}>
      <Image source={require("../../assets/images/twemoji_ambulance.png")} />
      <Text style={tw`text-5`}>Hello, {user}</Text>

      <View style={tw`w-10 h-10 bg-gray-500 rounded-full`}>
        {/* <Image
     source={require({imageUrl})}
     /> */}
      </View>
    </View>
  );
};

export default Statusbar;
