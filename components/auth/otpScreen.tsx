import React from "react";
import { View, StyleSheet, Alert } from "react-native";
import CodeInputProps from "../reuseable/codeInputProps";
import Button from "../reuseable/button";
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
    <View style={styles.screen}>
      <CodeInputProps
        phoneNumber="081***86"
        onVerify={handleVerify}
        onResend={handleResend}
        resendTimer={60} // Optional, default is 60 seconds
      />

      <Button
      colors={["#4FC48B", "#298582"]}
      text="Verify"
      func={()=>router.push("/auth/Registration")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#FFFFFF",
  },
});

export default OtpScreen;
