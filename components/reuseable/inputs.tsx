import React, { useState } from "react";
import { Text, TextInput, TouchableOpacity, Image, View } from "react-native";
import tw from "twrnc";

const Inputs = ({
  Label,
  style,
  placeholder,
  value,
  setValue,
  keyboardType,
  passwordVisible = false,
  setPasswordVisible,
}: // onChangedValue,

{
  onChangedValue?: any;
  // passwordVisible?: Boolean;
  style?: any;
  Label?: string;
  // style?: any;
  placeholder?: string;
  value?: string;
  setValue?: (text: string) => void;
  keyboardType?: any;
  passwordVisible?: boolean;
  setPasswordVisible?: (visible: boolean) => void;
}) => {
  const [isValid, setIsValid] = useState(true);

  const validateInput = (text: any) => {
    // Add your validation logic here
    const isValid = text.length > 0; // Example: input should not be empty
    setIsValid(isValid);
    if (setValue) {
      setValue(text);
    }
  };

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
     
     
     {setPasswordVisible && (
          <TouchableOpacity
            style={tw`absolute right-5 top-[35%]`}
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