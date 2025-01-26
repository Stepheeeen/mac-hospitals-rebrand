import React from "react";
import { View, Image } from "react-native";
import tw from "twrnc";
import { router } from "expo-router";
import ForgotPassword from "@/components/auth/ForgotPassword";
import OtpScreen from "@/components/auth/otpScreen";
import ResetPassword from "@/components/auth/resetPassword";
import LoginScreen from "@/components/auth/LoginScreen";

const index = () => {
  // setTimeout(() => {
  //   router.replace("../auth/SignIn/index.tsx");
  // }, 3000);
  return (
    // <View style={tw`flex-1 justify-center items-center`}>
    //   <Image
    //     source={require("../assets/images/welcome_screen.png")}
    //     style={tw`flex-1 w-full h-full`}
    //   />
    // </View>
    // <ForgotPassword/>
    // <OtpScreen/>
    <ResetPassword/>
    // <LoginScreen/>
  );
};

export default index;
