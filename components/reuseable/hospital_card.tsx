import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import tw from "twrnc";

interface HospitalCardProps {
  name: string;
  status: string;
}

const HospitalCard: React.FC<HospitalCardProps> = ({ name, status }) => {
  return (
    <TouchableOpacity style={tw`flex-row items-center bg-white p-3 rounded-lg mb-3 shadow-md`}>
      {/* Hospital Image Placeholder */}
      <View style={tw`  rounded-lg flex items-center justify-center`}>
        <Image source={require("../../assets/images/hospital image.png")} style={tw`w-14 h-14`} />
      </View>

      {/* Hospital Info */}
      <View style={tw`flex-1 ml-3 text-center text-2xl `}>
        <Text style={tw`text-base font-semibold`}>{name}</Text>
      </View>

      {/* Call Icon + Status */}
      <View style={tw`items-center`}>
        <TouchableOpacity style={tw`p-2 bg-green-200 rounded-full`}>
          <Image source={require("../../assets/images/call.png")} style={tw`w-5 h-5`} />
        </TouchableOpacity>
        <Text style={tw`text-sm ${status === "Free" ? "text-green-500" : "text-yellow-500"}`}>
          {status}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default HospitalCard;
