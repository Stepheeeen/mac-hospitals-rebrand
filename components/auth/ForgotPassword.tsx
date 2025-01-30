import React from "react";
import { View } from "react-native";
import tw from "twrnc";
import { Text, Image, Pressable } from "react-native";
import Tabbar from "../reuseable/tabbar";
import Container from "../reuseable/container";
import Button from "../reuseable/button";

const ForgotPassword = ({ title, value }: { title?: string; value?: any }) => {
  return (
    <>
      <Tabbar screenText="Forget Password" />
      <View style={tw`flex items-center justify-between flex-col w-full`}>
        <View style={tw`w-full p-3`}>
          <Text style={tw`text-[16px] text-[#0B3C49]`}>
            Select how you would like to retrieve your password
          </Text>

          <View>
            <View
              style={tw`p-2 items-center justify-center flex-row rounded-[20px] bg-white shadow-md`}
            >
              <View
                style={tw`w-15 h-15 items-center justify-center rounded-full bg-gray-200`}
              >
                <Image
                  style={tw``}
                  source={require("../../assets/images/Vector.png")}
                />
              </View>

              <View style={tw`mx-6`}>
                <Text style={tw`text-3.6`}>{title}</Text>
                <Text style={tw`text-4.6 font-bold my-2.4`}>{value}</Text>
              </View>
            </View>
          </View>
        </View>

        <Button text="Continue" colors={["#4FC48B", "#298582"]} />
      </View>
    </>
  );
};

export default ForgotPassword;
