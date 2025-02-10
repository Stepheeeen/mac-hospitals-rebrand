import React from "react";
import { Pressable, View, Image, Text } from "react-native";
import tw from "twrnc";

const NotifactionOptions = ({ optionText }: { optionText?: string }) => {
  return (
   <View style={tw`my-2.5 flex-row items-center justify-between p-3  w-[95%] h-12 bg-[#EBFBF3] shadow-md rounded-2xl`}>
     <Text style={tw`text-[16px] font-[300] text-black`}>{optionText}</Text>

     <Pressable>
      <Image
        style={tw`h-3 w-3`}
        source={require("../../assets/images/arrow_forward.png")}
      />
     </Pressable>
   </View>
  );
};

export default NotifactionOptions;
