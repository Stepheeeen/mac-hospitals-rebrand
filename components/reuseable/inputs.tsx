import React from "react";
import { Text, TextInput } from "react-native";
import tw from "twrnc";

const Inputs = ({
  Label,
  style,
  placeholder,
  value,
  setValue,
  keyboardType,
  passwordVisible,
}: // onChangedValue,

{
  onChangedValue?: any;
  passwordVisible?: Boolean;
  style?: any;
  Label?: string;
  placeholder?: string;
  value?: string;
  setValue?: any;
  keyboardType?: any;
}) => {
  return (
    <>
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
    </>
  );
};

export default Inputs;
