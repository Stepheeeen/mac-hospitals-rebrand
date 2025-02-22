import React from "react";
import { View, Text, Image, Pressable, TouchableOpacity } from "react-native";
import tw from "twrnc";

interface InfoCardProps {
  imageSource: any;
  title: string;
  description: string;
}

const InfoCard: React.FC<InfoCardProps> = ({
  imageSource,
  title,
  description,
}) => {
  return (
    <TouchableOpacity
      style={tw`flex-row bg-green-100 rounded-xl overflow-hidden shadow-md my-3`}
    >
      <Image
        source={
          typeof imageSource === "string" ? { uri: imageSource } : imageSource
        }
        style={tw`w-1/2 h-37`}
        resizeMode="cover"
      />
      <View style={tw`w-1/2 p-4 justify-center`}>
        <Text style={tw`text-xl font-semibold text-black my-2 text-center`}>
          {title}
        </Text>
        <Text style={tw`text-gray-600 text-sm text-center`}>{description}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default InfoCard;
