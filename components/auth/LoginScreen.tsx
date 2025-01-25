import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import Checkbox from "expo-checkbox";
import { LinearGradient } from "expo-linear-gradient";
import tw from "twrnc";
import Inputs from "../reuseable/inputs";
import { router } from "expo-router";

export default function LoginScreen({ navigation }: any) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

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
        <View style={tw`items-center mb-12`}>
          <Image
            source={require("../../assets/images/mac-hospitals-logo.png")}
            style={tw`w-16 h-16`}
            resizeMode="contain"
          />
        </View>

        {/* Social Login Buttons */}
        <TouchableOpacity
          style={tw`flex-row items-center h-[48px] justify-center py-3 px-4 rounded-[20px] border border-gray-200 mb-4`}
        >
          <Image
            source={require("../../assets/images/google-icon.png")}
            style={tw`w-5 h-5 mr-2`}
          />
          <Text style={tw`text-gray-700 font-medium text-base`}>
            Log in with Google
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
            Log in with Facebook
          </Text>
        </TouchableOpacity>

        {/* Divider */}
        <View style={tw`flex-row items-center my-6`}>
          <View style={tw`flex-1 h-[1px] bg-gray-300`} />
          <Text style={tw`mx-4 text-gray-500`}>OR</Text>
          <View style={tw`flex-1 h-[1px] bg-gray-300`} />
        </View>

        {/* Email Input */}
        <Inputs
          style={tw`text-gray-700 text-base mb-[-10px] ml-6 px-1 bg-white z-20 w-[27%]`}
          Label="Email address"
          value={email}
          keyboardType={"email-address"}
          placeholder="Enter your email address"
          setValue={setEmail}
        // onChangedValue={set}
        />

        {/* Password Input */}
        <Text
          style={tw`text-gray-700 text-base mb-[-10px] ml-6 bg-white z-20 w-[27%] px-1`}
        >
          Password
        </Text>
        <View style={tw`relative`}>
          <TextInput
            style={tw`w-full border border-gray-200 rounded-[20px] px-4 py-5 mb-4 pr-12`}
            placeholder="Enter your password"
            value={password}
            onChangeText={setPassword}
            placeholderTextColor="#0B3C4999"
            secureTextEntry={!showPassword}
          />
          <TouchableOpacity
            style={tw`absolute right-4 top-3`}
            onPress={() => setShowPassword(!showPassword)}
          >
            <Image
              source={require("../../assets/images/eye-icon.png")}
              style={tw`w-6 h-6 opacity-50`}
            />
          </TouchableOpacity>
        </View>

        {/* Remember Me & Forgot Password */}
        <View style={tw`flex-row items-center justify-between pb-6`}>
          <TouchableOpacity
            style={tw`flex-row items-center`}
            onPress={() => setRememberMe(!rememberMe)}
          >
            <Checkbox
              style={tw`w-5 h-5 border rounded mr-2`}
              value={rememberMe}
              onValueChange={setRememberMe}
            />
            <Text style={tw`text-gray-700`}>Remember me</Text>
          </TouchableOpacity>

          <TouchableOpacity>
            <Text style={tw`text-[#0EA47A] underline`}>Forgot Password?</Text>
          </TouchableOpacity>
        </View>

        {/* Sign Up Link */}
        <View style={tw`flex-row justify-center mb-17`}>
          <Text style={tw`text-gray-700`}>Don't have an account? </Text>
          <TouchableOpacity onPress={() => {router.push("/auth/signUp") }}>
            <Text style={tw`text-[#0EA47A]`}>Sign up</Text>
          </TouchableOpacity>
        </View>

        {/* Login & Back Buttons */}
        <View style={tw`flex-row justify-between mt-10`}>
          <TouchableOpacity style={tw`flex-1 rounded-[20px] mr-2`}>
            <LinearGradient
              colors={["#4FC48B", "#298582"]}
              start={[0, 0]}
              end={[1, 1]}
              style={tw`rounded-[20px] h-[48px] justify-center items-center`}
            >
              <Text style={tw`text-white text-center font-medium text-lg`}>
                Login
              </Text>
            </LinearGradient>
          </TouchableOpacity>

          <TouchableOpacity
            style={tw`flex-1 border border-[#0EA47A] h-[48px] py-2 rounded-[20px] ml-2`}
            onPress={() => navigation.goBack()}
          >
            <Text style={tw`text-[#0EA47A] text-center font-medium text-lg`}>
              Back
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
