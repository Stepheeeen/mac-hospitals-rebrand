import Statusbar from "@/components/reuseable/statusbar";
import React, { useState } from "react";
import { ScrollView, View, Image, Text, ImageBackground } from "react-native";

import SearchBar from "@/components/reuseable/Searchbar";
import tw from "twrnc";
import InfoCard from "@/components/reuseable/InfoCard";

const HomeScreen = () => {
  const [user] = useState("MAC");
  const [imageUrl] = useState("");
  const [search, setSearch] = useState("");

  const infoCardContext = [
    {
      image: require("../../assets/options/bp.png"),
      title: "GOPD",
      description: "General Outpatient Department",
    },
    {
      image: require("../../assets/options/infertility 2.png"),
      title: "Infertility",
      description: "Get your infertility problem resolved",
    },
    {
      image: require("../../assets/options/eyes.png"),
      title: "Ophthalmology",
      description: "Are you having eyes related issues?",
    },
    {
      image: require("../../assets/options/preg.png"),
      title: "Gynaecology",
      description: "Are you having women related issues?",
    },
    {
      image: require("../../assets/options/ped.png"),
      title: "Pediatric",
      description: "Visit, for children related issues",
    },
    {
      image: require("../../assets/options/bones.png"),
      title: "Physiotherapy",
      description: "Are you having joints, bone ot muscles pain",
    },
    {
      image: require("../../assets/options/heart.png"),
      title: "Cardiology",
      description: "Heart related issues?",
    },
    {
      image: require("../../assets/options/dent.png"),
      title: "Dental",
      description: "Do you have tooth problem?",
    },
    {
      image: require("../../assets/options/pharm.png"),
      title: "Pharmacy",
      description: "Get all your prescribed drugs here.",
    },
    {
      image: require("../../assets/options/lab.png"),
      title: "Laboratory",
      description: "Make appointment for laboratory checkup",
    },
  ];

  return (
    <ImageBackground
      source={require("../../assets/images/background.png")}
      style={tw`flex-1`} // Ensuring ImageBackground covers the screen
    >
      <ScrollView
        style={tw`flex-1`}
        contentContainerStyle={tw`px-6 py-8`}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
      >
        <Statusbar user={user} />

        <Text style={tw`my-5 text-2xl font-semibold`}>
          How may we help you?
        </Text>

        <SearchBar
          placeholder="Search for services or ailment"
          value={search}
          onChangeText={setSearch}
        />

        <View style={tw`my-2`} />

        {infoCardContext?.map((info, index) => (
          <InfoCard
            key={index}
            imageSource={info.image}
            title={info.title}
            description={info.description}
          />
        ))}

        <View style={tw`my-10`} />
      </ScrollView>
    </ImageBackground>
  );
};

export default HomeScreen;
