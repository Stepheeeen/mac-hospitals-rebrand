import React from "react";
import { View, Image } from "react-native";
import tw from "twrnc";
import { router } from "expo-router";

const index = () => {
  setTimeout(() => {
    router.replace("/auth/SignIn");
  }, 3000);
  return (
    <View style={tw`flex-1 justify-center items-center`}>
      <Image
        source={require("../assets/images/welcome_screen.png")}
        style={tw`flex-1 w-full h-full`}
      />
      
    </View>
  );
};

export default index;
