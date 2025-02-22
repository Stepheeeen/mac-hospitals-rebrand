import React from "react";
import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import tw from "twrnc";
import { FontAwesome, AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { router } from "expo-router";
import Button from "@/components/reuseable/button";

const InfertilityScreen = () => {
  const navigation = useNavigation();

  const services = [
    "Consultations with doctors",
    "Diagnostic tests",
    "Fertility Medications",
    "Surgical Interventions",
    "Counseling and Support Services",
    "Nutritional Counseling and Lifestyle Modifications",
    "Follow-up Care",
  ];

  return (
    <ScrollView style={tw`flex-1 bg-white p-4`}>
      {/* Header */}
      <View style={tw`flex-row justify-between items-center mb-4`}>
        <TouchableOpacity onPress={() => router.back()}>
          <AntDesign name="arrowleft" size={24} color="black" />
        </TouchableOpacity>
        <Text style={tw`text-lg font-semibold`}>Infertility</Text>
        <View style={tw`w-6`} />
      </View>

      <View style={tw`px-3 mt-7`}>
        {/* Image */}
        <Image
          source={require("../../../assets/options/infertility 2.png")} // Replace with actual image URL
          style={tw`w-full h-50 rounded-lg shadow-lg`}
          resizeMode="cover"
        />

        {/* Description */}
        <Text style={tw`text-[#070707] text-base my-6`}>
          Infertility is the inability to conceive a child after one year of
          regular, unprotected sexual intercourse for individuals under 35 years
          old, or after six months for individuals 35 years or older. It can
          affect both men and women and may be caused by various factors.
        </Text>

        {/* Services Section */}
        <Text style={tw`text-lg font-bold text-black mb-2`}>
          Our Infertility Quality Services Include
        </Text>
        {services.map((service, index) => (
          <View key={index} style={tw`flex-row items-center my-2`}>
            <FontAwesome
              name="check-circle"
              size={18}
              color="green"
              style={tw`mr-2`}
            />
            <Text style={tw`text-black text-base`}>{service}</Text>
          </View>
        ))}

        <View style={tw`items-center my-3`}>
          <Button
            colors={["#4FC48B", "#298582"]}
            func={() => {}}
            text="Book an Appointment"
            style={"w-[95%]"}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default InfertilityScreen;
