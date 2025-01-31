import React, { useState, useEffect } from "react";
import { View } from "react-native";
import tw from "twrnc";
import { Image } from "react-native";
import { Text } from "react-native";
import { router } from "expo-router";

const SucessfulCreate = () => {
  const [timer, setTimer] = useState(4);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prevTimer) => prevTimer - 1);
    }, 1000);

    const timeout = setTimeout(() => {
      router.replace("/auth/SignIn");
    }, 4000);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, []);

  return (
    <>
      <View style={tw`flex-1 items-center bg-white justify-center`}>
        <View style={tw`absolute top-5 right-5`}>
          <Text style={tw`text-gray-700`}>
            Redirecting to login screen in {timer}
          </Text>
        </View>
        <View
          style={tw`w-10/12 h-8/12 bg-green-500 items-center justify-center shadow-lg bg-white rounded-3xl`}
        >
          <Image source={require("../../assets/images/doctor.png")} />

          <Image
            style={tw`my-7`}
            source={require("../../assets/images/ic_twotone-check.png")}
          />

          <Text style={tw`text-[#2DBA33] text-center text-lg pr-5 pl-5`}>
            Congratulations! You have successfully signed up to MAC Hospitals
          </Text>
        </View>
      </View>
    </>
  );
};

export default SucessfulCreate;