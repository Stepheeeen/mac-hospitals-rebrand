import React, { useState } from "react";
import Tabbar from "../reuseable/tabbar";
import { View, Text } from "react-native";
import tw from "twrnc";
import Input from "../reuseable/inputs";
import Inputs from "../reuseable/inputs";
import Button from "../reuseable/button";
import { router } from "expo-router";

const ResetPassword = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <>
      <Tabbar screenText="Reset Password" />
      <View style={tw`flex-row items-center justify-start mx-5`}>
        <Text style={tw`text-lg font-medium mt-4 my-5 text-6.3 text-[#0B3C49]`}>
          Create new password
        </Text>
      </View>

      <View style={tw`flex  justify-between flex-col pl-4 pr-4`}>
        <Inputs
          style={`w-[30%]`}
          Label="New password"
          placeholder="********"
          value={password}
          setValue={setPassword}
          passwordVisible={!showPassword}
          setPasswordVisible={setShowPassword}
        />
        <Inputs
          style={`w-[35%]`}
          Label="Confirm password"
          placeholder="********"
          value={confirmPassword}
          setValue={setConfirmPassword}
          passwordVisible={!showConfirmPassword}
          setPasswordVisible={setShowConfirmPassword}
        />

        <Button text="Done" colors={["#4FC48B", "#298582"]} func={()=>router.push("/auth/SignIn")} />
      </View>
    </>
  );
};

export default ResetPassword;
