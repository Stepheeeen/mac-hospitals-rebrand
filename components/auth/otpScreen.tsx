import React from "react";
import { View, StyleSheet, Alert, ScrollView } from "react-native";
import CodeInputProps from "../reuseable/codeInputProps";
import Button from "../reuseable/button";
import Tabbar from "../reuseable/tabbar";
import tw from "twrnc";
import { router } from "expo-router";
// import CodeInput from "./CodeInput";

const OtpScreen = () => {
  const handleVerify = (code: string) => {
    Alert.alert("Verification Code", `Entered code: ${code}`);
  };

  const handleResend = () => {
    Alert.alert("Resend Code", "Code has been resent to your phone!");
  };

  return (
    <View style={tw`flex-1 bg-white flex items-center justify-between pt-3 pb-8`}>
      <View style={tw`w-full`}>
        <Tabbar screenText="Forget Password" />
        <View style={tw`w-full mt-[15%]`}>
          <CodeInputProps
            phoneNumber="081*****86"
            onVerify={handleVerify}
            onResend={handleResend}
            resendTimer={60} // Optional, default is 60 seconds
          />
        </View>
      </View>
      <Button colors={["#4FC48B", "#298582"]} text="Verify" func={()=>router.push("/auth/ResetPassword")} />
    </View>
  );
};

export default OtpScreen;
