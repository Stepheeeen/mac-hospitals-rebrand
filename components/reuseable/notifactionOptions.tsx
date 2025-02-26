import React from "react";
import { Pressable, View, Image, Text, TouchableOpacity } from "react-native";
import tw from "twrnc";

const NotifactionOptions = ({
  optionText,
  onPress,
}: {
  optionText?: string;
  onPress: any;
}) => {
  return (
    <TouchableOpacity
    onPress={onPress}
      style={tw`my-2.5 flex-row items-center justify-between p-3  w-[95%] h-12 bg-[#EBFBF3] shadow-md rounded-2xl`}
    >
      <Text style={tw`text-[16px] font-[300] text-black`}>{optionText}</Text>

      <Image
        style={tw`h-3`}
        source={require("../../assets/images/arrow_forward.png")}
      />
    </TouchableOpacity>
  );
};

export default NotifactionOptions;
