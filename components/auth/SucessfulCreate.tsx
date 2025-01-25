import React from "react";
import { View } from "react-native";
import tw from "twrnc";
import { Image } from "react-native";
import { Text } from "react-native";

const SucessfulCreate = () => {
  return (
    <>
      <View style={tw`flex-1 items-center justify-center`}>
        <View
          style={tw`w-[300px] h-[470px]  bg-green-500 items-center justify-center shadow-lg bg-white rounded-3xl`}
        >
          <Image source={require("../../assets/images/doctor.png")} />

          <Image
            style={tw`my-7`}
            source={require("../../assets/images/ic_twotone-check.png")}
          />

          <Text style={tw`text-[#2DBA33] text-center text-lg pr-5 pl-5`}>
            Congratulations! You have successfully signed up to MAC Hospitals
          </Text>
        </View>
      </View>
    </>
  );
};

export default SucessfulCreate;
