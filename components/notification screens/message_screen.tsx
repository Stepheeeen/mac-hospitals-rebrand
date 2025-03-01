import React from "react";
import { View, Image, Pressable, Text, StyleSheet } from "react-native";
import tw from "twrnc";
import Tabbar from "../reuseable/tabbar";
import { router } from "expo-router";
import { useState, useEffect } from "react";
import CustomButton from "../reuseable/custom_button";

const Message_screen = () => {
  const [messageDate, setMessageDate] = useState("02/03/2023");

  useEffect(() => {
    setTimeout(() => {
      setMessageDate(new Date().toLocaleDateString());
    }, 2000);
  }, []);

  // useEffect(() => {
  //   setTimeout(() => {
  //     setMessageDate(new Date().toLocaleDateString()); // Replace with API data
  //   }, 2000);
  // }, []);
  return (
    <>
      <View style={tw`flex-1 item-center  `}>
        <View
          style={tw`flex flex-row pt-9 items-center w-full  h-35 w-1/1 bg-[#5AEB169E] rounded-bl-30 rounded-br-30 `}
        >
          <Pressable onPress={() => router.back()}>
            <Image
              style={tw`mx-10 h-4 w-3`}
              source={require("../../assets/images/arrow_back.png")}
            />
          </Pressable>

          <View style={tw` mx-16 justify-center item-center w-1/1 `}>
            <Image source={require("../../assets/images/sender.png")} />
            <Text style={tw`item-center mx-2.5  text-lg`}>Sender</Text>
          </View>
          {/* <Text style={styles.date}>{messageDate}</Text> */}
        </View>
        <View style={tw`my-4 items-center`}>
          <Text style={tw`text-black text-sm`}>{messageDate}</Text>
        </View>

        <View
          style={tw`my-4 mx-4 p-3 items-start rounded-3xl h-16 w-1/1.1 shadow-lg bg-white`}
        >
          <Text>Body of the message</Text>
        </View>
        <View style={tw`my-40`}>

        </View>
        <View style={tw`flex-row justify-center mt-4`}>
          <CustomButton
            title="Reply"
            onPress={() => console.log("Reply clicked")}
          />
          <CustomButton
            title="Forward"
            onPress={() => console.log("Forward clicked")}
          />
        </View>
      </View>
    </>
  );
};

export default Message_screen;
