import React from "react";
import { Text, TextInput, TouchableOpacity, Image, View } from "react-native";
import tw from "twrnc";

const Inputs = ({
  Label,
  style,
  placeholder,
  value,
  setValue,
  keyboardType,
  passwordVisible,
  setPasswordVisible,
}: 

{
  onChangedValue?: any;
  passwordVisible?: Boolean;
  style?: any;
  Label?: string;
  placeholder?: string;
  value?: string;
  setValue?: any;
  keyboardType?: any;
  setPasswordVisible?: any;
}) => {
  return (
    <View style={tw`relative`}>
      <Text
        // style={tw`text-gray-700 text-base mb-[-10px] ml-6 px-1 bg-white z-20 w-[15%]`}
        style={style}
      >
        {Label}
      </Text>
      <TextInput
        style={tw`w-full border border-gray-200 rounded-[20px] px-4 py-5 mb-4`}
        placeholder={placeholder}
        placeholderTextColor="#0B3C4999"
        value={value}
        onChangeText={setValue}
        keyboardType={keyboardType}
        autoCapitalize="none"
        secureTextEntry={!passwordVisible}
        // onChange={onChangedValue}
      />

      {passwordVisible !== null && (
        <TouchableOpacity
          style={tw`absolute right-5 top-10`}
          onPress={() => setPasswordVisible(!passwordVisible)}
        >
          <Image
            source={require("../../assets/images/eye-icon.png")}
            style={tw`w-6 h-6 opacity-50`}
          />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default Inputs;
