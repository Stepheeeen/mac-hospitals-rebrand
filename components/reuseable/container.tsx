import React from "react";
import { View, Image, Text } from "react-native";
import tw from "twrnc";
const Container = ({
  title,
  value,
  style,
}: {
  title?: string;
  value?: any;
  style?: any;
}) => {
  return (
    <View style={style}>
      <View
        style={tw`pt-3 pl-2 item-center justify-start flex-row  mx-4.5 w-85 h-20 rounded-3xl bg-white shadow-xl `}
      >
        <View
          style={tw` w-15 h-15 items-center justify-center rounded-full bg-gray-200`}
        >
          <Image
            style={tw`w-7 h-7`}
            source={require("../../assets/images/Vector.png")}
          />
        </View>

        <View style={tw`mx-6`}>
          <Text style={tw`text-3.8`}>{title}</Text>
          <Text style={tw`text-4.6 font-bold my-2.4`}>{value}</Text>
        </View>
      </View>
    </View>
  );
};

export default Container;