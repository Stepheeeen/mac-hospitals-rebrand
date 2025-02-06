import Statusbar from "@/components/reuseable/statusbar";
import React, { useState } from "react";
import { ScrollView, View, Image, Text } from "react-native";

import SearchBar from "@/components/reuseable/Searchbar";
import tw from "twrnc";
import InfoCard from "@/components/reuseable/InfoCard";

const HomeScreen = () => {
  const [user] = useState("MAC");
  const [imageUrl] = useState("");
  const [search, setSearch] = useState("");

  return (
    <>
      <ScrollView
        style={tw`flex-1`}
        contentContainerStyle={tw`px-6 py-6`}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
      >
        <Statusbar user={user} />

        <Text style={tw`my-5 text-5`}>How may we help you ?</Text>

        <SearchBar
          placeholder="Search for services or ailment"
          value={search}
          onChangeText={setSearch}
        />
<View style={tw`my-5`}></View>
        <InfoCard
        imageSource={require("../../../assets/options/bp.png")}
        title="GOPD"
        description="General Outpatient Department"
        />

<InfoCard
        imageSource={require("../../../assets/options/infertility 2.png")}
        title="Infertility"
        description="Get your infertility problem resolved"
        />

<InfoCard
        imageSource={require("../../../assets/options/eyes.png")}
        title="Ophthalmology"
        description="Are you having eyes related issues?"
        />

<InfoCard
        imageSource={require("../../../assets/options/preg.png")}
        title="Gynaecology"
        description="Are you having women related issues?"
        />

<InfoCard
        imageSource={require("../../../assets/options/ped.png")}
        title="Pediatric"
        description="Visit, for children related issues"
        />

<InfoCard
        imageSource={require("../../../assets/options/bones.png")}
        title="Physiotherapy"
        description="Are you having joints, bone ot muscles pain"
        />

<InfoCard
        imageSource={require("../../../assets/options/heart.png")}
        title="Cardiology"
        description="Heart related issues?"
        />

<InfoCard
        imageSource={require("../../../assets/options/dent.png")}
        title="Dental"
        description="Do you have tooth 
problem?"
        />

<InfoCard
        imageSource={require("../../../assets/options/pharm.png")}
        title="Pharmacy"
        description="Get all your prescribed 
drugs here."
        />

<InfoCard
        imageSource={require("../../../assets/options/lab.png")}
        title="Laboratory"
        description="Make appointment for
laboratory checkup"
        />
        <View style={tw`my-10`}></View>
      </ScrollView>
    </>
  );
};

export default HomeScreen;
