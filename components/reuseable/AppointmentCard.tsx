import React from "react";
import { View, Text, Image } from "react-native";
import tw from "twrnc";
import { FontAwesome5 } from "@expo/vector-icons";

const AppointmentCard = ({
  date,
  time,
  month,
}: {
  date: any;
  time: any;
  month: any;
}) => {
  return (
    <View
      style={tw`flex-row bg-white w-[90%] shadow-md rounded-xl items-center`}
    >
      {/* Left Border */}
      <View style={tw`w-2 bg-[#93A18E] h-full rounded-l-xl`} />

      {/* Doctor Profile */}
      <View style={tw`flex-row flex-1 items-center w-[60%] px-3 py-5`}>
        <Image
          source={require("../../assets/images/dr.hannah.png")} // Replace with actual doctor image URL
          style={tw`w-15 h-15 rounded-full`}
        />
        <View style={tw`ml-3`}>
          <Text style={tw`text-[#757575] font-normal flex-wrap w-[80px]`}>
            Dr. Summer Hannah
          </Text>
        </View>
      </View>
      <View style={tw`w-[1px] bg-[#93A18E] h-[70%] rounded-l-xl`} />

      {/* Date Section */}
      <View style={tw`items-center justify-center w-[40%] px-3`}>
        <FontAwesome5 name="calendar-alt" size={16} color="#93A18E" />
        <Text style={tw`ml-2 text-gray-900 font-semibold text-center`}>
          {date} {month}
        </Text>
        <Text style={tw`ml-2 text-gray-900 font-normal`}> {time}</Text>
      </View>
    </View>
  );
};

export default AppointmentCard;
