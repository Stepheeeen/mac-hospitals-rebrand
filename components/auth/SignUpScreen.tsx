import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  View,
  Image,
  Text,
  TouchableOpacity,
} from "react-native";
import tw from "twrnc";
import { LinearGradient } from "expo-linear-gradient";

import Inputs from "../reuseable/inputs";
import { router } from "expo-router";
import Button from "../reuseable/button";

export default function SignUpScreen({ navigation }: any) {
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);
  return (
    <KeyboardAvoidingView
      style={tw`flex-1`}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <ScrollView
        style={tw`flex-1 bg-white`}
        contentContainerStyle={tw`px-6 py-6`}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
      >
        <StatusBar style="dark" />
        {/* Logo */}
        <View style={tw`items-center mb-3`}>
          <Image
            source={require("../../assets/images/mac-hospitals-logo.png")}
            style={tw`w-23 h-23`}
            resizeMode="contain"
          />
        </View>
        {/*Social Login Buttons */}
        <TouchableOpacity
          style={tw`flex-row items-center h-[48px] justify-center py-3 px-4 rounded-[20px] border border-gray-200 mb-4`}
        >
          <Image
            source={require("../../assets/images/google-icon.png")}
            style={tw`w-5 h-5 mr-2`}
          />

          <Text style={tw`text-gray-700 font-medium text-base`}>
            Sign Up with Google
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={tw`flex-row items-center justify-center h-[48px] py-3 px-4 rounded-[20px] bg-[#1877F2] mb-4`}
        >
          <Image
            source={require("../../assets/images/facebook-icon.png")}
            style={tw`w-5 h-5 mr-2`}
          />
          <Text style={tw`text-white font-medium text-base`}>
            Sign Up with Facebook
          </Text>
        </TouchableOpacity>
        {/* Divider */}
        <View style={tw`flex-row items-center my-2`}>
          <View style={tw`flex-1 h-[1px] bg-gray-300`} />
          <Text style={tw`mx-4 text-gray-500`}>OR</Text>
          <View style={tw`flex-1 h-[1px] bg-gray-300`} />
        </View>
        {/* Sign Up Form */}
        <Inputs
          style={`w-[15%]`}
          Label="Name"
          placeholder="Enter your name"
          keyboardType={"default"}
          value={name}
          setValue={setName}
        />
        <Inputs
          style={`w-[32%]`}
          Label="Email address"
          placeholder="Enter your Email"
          value={email}
          setValue={setEmail}
        />
        <Inputs
          style={`w-[34%]`}
          Label="Phone Number"
          placeholder="080438943xxx"
          value={phoneNumber}
          setValue={setPhoneNumber}
        />
        <Inputs
          style={`w-[23%]`}
          Label="Password"
          placeholder="********"
          value={password}
          setValue={setPassword}
          keyboardType="default"
          passwordVisible={passwordVisible}
          setPasswordVisible={setPasswordVisible}
        />

        {/* Sign In link* */}
        <View style={tw`flex-row justify-center mb-17`}>
          <Text style={tw`text-gray-700`}>Already have an account? </Text>
          <TouchableOpacity onPress={()=>router.push("/auth/SignIn")}>
            <Text style={tw`text-[#0EA47A]`}>Sign In</Text>
          </TouchableOpacity>
        </View>

        <Button colors={["#4FC48B", "#298582"]} text="Signup" func={()=>router.push("/auth/Options/")}/>
        {/* </TouchableOpacity> */}
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
