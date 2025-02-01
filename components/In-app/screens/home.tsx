import React, { useState } from "react";
import { ScrollView, View, Image, Text } from "react-native";
import tw from "twrnc";

const Home = () => {
  const [user] = useState("");
  const [imageUrl] = useState("");
  return (
    <>
      <View style={tw`flex-row justify-between`}>
        <Image source={require("../../assets/images/twemoji_ambulance.png")} />

        {/* i honestly dont know what i did here but you should understand what i'm doing Sir */}
        <Text>Hello, {user}</Text>

        <View style={tw`rounded h-5 w-5 bg-gray-700`}></View>
      </View>

      <ScrollView
        style={tw`flex-1`}
        contentContainerStyle={tw`px-6 py-6`}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
      ></ScrollView>
    </>
  );
};

export default Home;
