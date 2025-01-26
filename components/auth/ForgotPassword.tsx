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
      <View style={tw`flex items-center justify-between flex-col`}>
        <View>
          <Text style={tw`pl-3 text-lg font-bold mt-4 my-10 text-5.7`}>
            Select how you would like to retrieve your password
          </Text>
          <Container
            style={tw`mt-4`}
            title="Phone number"
            value={"080123xxx57"}
          />
          <Container
            style={tw`my-6`}
            title="Email address"
            value={"example@gmail.com"}
          />
        </View>

        <Button text="Continue" colors={["#4FC48B", "#298582"]} />
      </View>
    </>
  );
};

export default ForgotPassword;
