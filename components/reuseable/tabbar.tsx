import React from "react";
import tw from "twrnc";
import { Text, Image, Pressable, View } from "react-native";
import { router } from "expo-router";

const Tabbar = ({
  screenText,
  subText,
}: {
  screenText?: string;
  subText?: any;
}) => {
  return (
    <View style={tw`flex flex-row items-center justify-between w-full p-7`}>
      <Pressable onPress={() => router.back()}>
        <Image
          style={tw`h-4 w-3`}
          source={require("../../assets/images/arrow_back.png")}
        />
      </Pressable>

      <Text style={tw`text-[18px] font-[400]`}>{screenText}</Text>

      <View>{subText}</View>
    </View>
  );
};

export default Tabbar;
