// // components/SocialLoginButton.tsx
// import React from 'react';
// import { TouchableOpacity, Text, Image, ImageSourcePropType } from 'react-native';
// import tw from 'twrnc';

// interface SocialLoginButtonProps {
//   icon: ImageSourcePropType;
//   text: string;
//   onPress?: () => void;
//   style?: object;
// }

// export const SocialLoginButton = ({ 
//   icon, 
//   text, 
//   onPress, 
//   style 
// }: SocialLoginButtonProps) => (
//   <TouchableOpacity
//     style={[
//       tw`flex-row items-center justify-center h-[48px] py-3 px-4 rounded-[20px] mb-4`,
//       style
//     ]}
//     onPress={onPress}
//   >
//     <Image source={icon} style={tw`w-5 h-5 mr-2`} />
//     <Text style={tw`font-medium text-base`}>{text}</Text>
//   </TouchableOpacity>
// );

// // components/Divider.tsx
// import React from 'react';
// import { View, Text } from 'react-native';
// import tw from 'twrnc';

// export const Divider = () => (
//   <View style={tw`flex-row items-center my-6`}>
//     <View style={tw`flex-1 h-[1px] bg-gray-300`} />
//     <Text style={tw`mx-4 text-gray-500`}>OR</Text>
//     <View style={tw`flex-1 h-[1px] bg-gray-300`} />
//   </View>
// );

// // components/LoginInput.tsx


// // Updated LoginScreen.tsx
// import React, { useState } from "react";
// import {
//   View,
//   Text,
//   TouchableOpacity,
//   Image,
//   ScrollView,
//   KeyboardAvoidingView,
//   Platform,
// } from "react-native";
// import { StatusBar } from "expo-status-bar";
// import Checkbox from "expo-checkbox";
// import { LinearGradient } from "expo-linear-gradient";
// import tw from "twrnc";

// import { SocialLoginButton } from './components/SocialLoginButton';
// import { Divider } from './components/Divider';
// import { LoginInput } from './components/LoginInput';

// export default function LoginScreen({ navigation }: any) {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [rememberMe, setRememberMe] = useState(false);

//   return (
//     <KeyboardAvoidingView
//       style={tw`flex-1`}
//       behavior={Platform.OS === "ios" ? "padding" : "height"}
//     >
//       <ScrollView
//         style={tw`flex-1 bg-white`}
//         contentContainerStyle={tw`px-6 py-6`}
//         showsVerticalScrollIndicator={false}
//         keyboardShouldPersistTaps="handled"
//       >
//         <StatusBar style="dark" />

//         {/* Logo */}
//         <View style={tw`items-center mb-12`}>
//           <Image
//             source={require("../assets/images/mac-hospitals-logo.png")}
//             style={tw`w-16 h-16`}
//             resizeMode="contain"
//           />
//         </View>

//         {/* Social Login Buttons */}
//         <SocialLoginButton
//           icon={require("../assets/images/google-icon.png")}
//           text="Log in with Google"
//           style={tw`border border-gray-200`}
//         />
//         <SocialLoginButton
//           icon={require("../assets/images/facebook-icon.png")}
//           text="Log in with Facebook"
//           style={tw`bg-[#1877F2]`}
//         />

//         <Divider />

//         {/* Email Input */}
//         <LoginInput
//           label="Email address"
//           value={email}
//           onChangeText={setEmail}
//           placeholder="Enter your email address"
//         />

//         {/* Password Input */}
//         <LoginInput
//           label="Password"
//           value={password}
//           onChangeText={setPassword}
//           placeholder="Enter your password"
//           isPassword
//         />

//         {/* Remember Me & Forgot Password */}
//         <View style={tw`flex-row items-center justify-between pb-6`}>
//           <TouchableOpacity
//             style={tw`flex-row items-center`}
//             onPress={() => setRememberMe(!rememberMe)}
//           >
//             <Checkbox
//               style={tw`w-5 h-5 border rounded mr-2`}
//               value={rememberMe}
//               onValueChange={setRememberMe}
//             />
//             <Text style={tw`text-gray-700`}>Remember me</Text>
//           </TouchableOpacity>

//           <TouchableOpacity>
//             <Text style={tw`text-[#0EA47A] underline`}>Forgot Password?</Text>
//           </TouchableOpacity>
//         </View>

//         {/* Sign Up Link */}
//         <View style={tw`flex-row justify-center mb-17`}>
//           <Text style={tw`text-gray-700`}>Don't have an account? </Text>
//           <TouchableOpacity>
//             <Text style={tw`text-[#0EA47A]`}>Sign up</Text>
//           </TouchableOpacity>
//         </View>

//         {/* Login & Back Buttons */}
//         <View style={tw`flex-row justify-between mt-10`}>
//           <TouchableOpacity style={tw`flex-1 rounded-[20px] mr-2`}>
//             <LinearGradient
//               colors={["#4FC48B", "#298582"]}
//               start={[0, 0]}
//               end={[1, 1]}
//               style={tw`rounded-[20px] h-[48px] justify-center items-center`}
//             >
//               <Text style={tw`text-white text-center font-medium text-lg`}>
//                 Login
//               </Text>
//             </LinearGradient>
//           </TouchableOpacity>

//           <TouchableOpacity
//             style={tw`flex-1 border border-[#0EA47A] h-[48px] py-2 rounded-[20px] ml-2`}
//             onPress={() => navigation.goBack()}
//           >
//             <Text style={tw`text-[#0EA47A] text-center font-medium text-lg`}>
//               Back
//             </Text>
//           </TouchableOpacity>
//         </View>
//       </ScrollView>
//     </KeyboardAvoidingView>
//   );
// }