import React from "react";
import { ScrollView, TouchableOpacity, View } from "react-native";
import tw from "twrnc";
import { Text, Image, Pressable } from "react-native";
import Tabbar from "../reuseable/tabbar";
import Container from "../reuseable/container";
import Button from "../reuseable/button";
import { router } from "expo-router/build/imperative-api";

const ForgotPassword = ({ title, value }: { title?: string; value?: any }) => {
  return (
    <View
      style={tw`bg-white flex flex-1 flex-col items-center justify-between py-5`}
    >
      <View>
        <Tabbar screenText="Forget Password" />
        <View style={tw`flex items-center justify-between flex-col w-full`}>
          <View style={tw`w-full p-3`}>
            <Text style={tw`text-[16px] text-[#0B3C49]`}>
              Select how you would like to retrieve your password
            </Text>

            <View>
              {[
                { title: "Phone number", value: "081*******86" },
                { title: "Email address", value: "Shi*********@gmail.com" },
              ].map((item, index) => (
                <TouchableOpacity
                  key={index}
                  onPress={() => router.push("/auth/OTP")}
                  style={tw`p-2 items-center justify-start px-4 flex-row rounded-[20px] bg-white shadow-md mt-5`}
                >
                  <Image
                    style={tw`w-12 h-12`}
                    source={require("../../assets/images/Vector.png")}
                  />

                  <View style={tw`mx-6`}>
                    <Text style={tw`text-[13px] text-[#0B3C4980]`}>
                      {item.title}
                    </Text>
                    <Text
                      style={tw`text-[20px] font-semibold my-2 text-[#0B3C49]`}
                    >
                      {item.value}
                    </Text>
                  </View>
                </TouchableOpacity>
              ))}
            </View>
          </View>
        </View>

        <Button 
        func={()=>router.push("/auth/OTP")}
        text="Continue" colors={["#4FC48B", "#298582"]} />
      </View>
      <Button text="Continue" colors={["#4FC48B", "#298582"]} />
    </View>
  );
};

export default ForgotPassword;