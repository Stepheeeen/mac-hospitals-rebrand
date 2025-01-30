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
}: {
  Label?: string;
  style?: any;
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
    <>
      <View style={tw`relative`}>
        {Label && (
          <Text
            style={tw`${isValid ? 'text-gray-700' : 'text-red-500'} text-sm -mb-2 ml-5 px-1 bg-white z-20 w-auto ${style}`}
          >
            {Label}
          </Text>
        )}
        <TextInput
          style={tw`w-full border ${isValid ? 'border-gray-200' : 'border-red-500'} rounded-2xl px-4 py-4 mb-1`}
          placeholder={placeholder}
          placeholderTextColor="#0B3C4999"
          value={value}
          onChangeText={validateInput}
          keyboardType={keyboardType}
          autoCapitalize="none"
          secureTextEntry={setPasswordVisible ? !passwordVisible : false}
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
      {!isValid && <Text style={tw`text-red-500 mb-4 ml-2 text-xs`}>Please fill this field</Text>}
    </>
  );
};

export default Inputs;