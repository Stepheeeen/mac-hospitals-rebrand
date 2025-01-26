import React, { useState } from "react";
import { TouchableOpacity, View } from "react-native";
import { Image } from "react-native";
import tw from "twrnc";
import { Text } from "react-native";
import Checkbox from "expo-checkbox";
import Button from "../reuseable/button";

const Doctor_Client = () => {
  const [isChecked, setIsChecked] = useState(false);
  return (
    <View style={tw`justify-center items-center my-16`}>
      <Image source={require("../../assets/Medical.png")} />

      {/* Div */}
      <View style={tw`my-7 items-start w-full pl-8`}>
        <Text style={tw` text-left text-lg font-bold `}>Continue as</Text>
        <View style={tw`flex-row items-center`}>
          <Text style={tw` text-left text-lg my-2  `}>Doctor</Text>
          <TouchableOpacity onPress={() => setIsChecked(!isChecked)}>
            <Checkbox
              style={tw`w-5 h-5 border rounded mr-2 mx-3`}
              value={isChecked}
              onValueChange={setIsChecked}
            />
          </TouchableOpacity>
        </View>

        <View style={tw`flex-row items-center`}>
          <Text style={tw` text-left text-lg my-1`}>Client</Text>
          <TouchableOpacity onPress={() => setIsChecked(!isChecked)}>
            <Checkbox
              style={tw`w-5 h-5 border rounded mr-2 mx-4.5`}
              value={isChecked}
              onValueChange={setIsChecked}
            />
          </TouchableOpacity>
        </View>
      </View>
      <Button colors={["#4FC48B", "#298582"]} text="Continue" />
    </View>
  );
};

export default Doctor_Client;
