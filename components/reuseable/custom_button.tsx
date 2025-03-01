import React from "react";
import { Text, TouchableOpacity } from "react-native";
import tw from "twrnc";

interface ButtonProps {
  title: string;
  onPress: () => void;
}

const CustomButton: React.FC<ButtonProps> = ({ title, onPress }) => {
  return (
    <TouchableOpacity
      style={tw`border border-gray-500 px-6 py-2 rounded-lg mx-2 w-30 h-10`}
      onPress={onPress}
    >
      <Text style={tw`text-black text-base text-center`}>{title}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
