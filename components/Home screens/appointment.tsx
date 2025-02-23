import React, { useState } from "react";
import { View, Text, TouchableOpacity, ScrollView, Image } from "react-native";
import tw from "twrnc";
import { FontAwesome, AntDesign } from "@expo/vector-icons";
import Button from "../reuseable/button";
import { LinearGradient } from "expo-linear-gradient";
import DateSelector from "../reuseable/DateSelector";
import AppointmentCard from "../reuseable/AppointmentCard";
import { router } from "expo-router";

const months = ["August 2024", "September 2024", "October 2024"];
const dates = [
  { day: "Su", date: "21" },
  { day: "Mo", date: "22" },
  { day: "Tu", date: "23" },
  { day: "We", date: "24" },
  { day: "Th", date: "25" },
  { day: "Fr", date: "26" },
  { day: "Sa", date: "27" },
  { day: "Su", date: "28" },
];

const categories = [
  {
    id: 1,
    name: "Cardiology",
    active: true,
    image: require("../../assets/options/heart.png"),
  },
  {
    id: 2,
    name: "Infertility",
    image: require("../../assets/options/infertility 2.png"),
  },
  {
    id: 3,
    name: "Pediatric",
    image: require("../../assets/options/ped.png"),
  },
  {
    id: 4,
    name: "Physiotherapy",
    image: require("../../assets/options/bones.png"),
  },
];
const times = [
  "08:00am",
  "09:00am",
  "12:00pm",
  "03:00am",
  "05:00pm",
  "06:00pm",
];

const AppointmentScreen = () => {
  const [selectedTime, setSelectedTime] = useState("09:00am");
  const [selectedDate, setSelectedDate] = useState("22");
  const [selectedMonth, setSelectedMonth] = useState(0);

  return (
    <ScrollView style={tw`p-4 bg-white`}>
      {/* Header */}
      <View style={tw`flex-row justify-between items-center mb-4`}>
        <TouchableOpacity onPress={() => router.back()}>
          <AntDesign name="arrowleft" size={24} color="black" />
        </TouchableOpacity>
        <Text style={tw`text-lg font-semibold`}>Make Appointment</Text>
        <View style={tw`w-6`} />
      </View>

      {/* Categories */}
      <Text style={tw`text-lg font-semibold mb-2`}>Categories</Text>
      <ScrollView
        horizontal
        overScrollMode="never"
        showsHorizontalScrollIndicator={false}
        style={tw`flex-row mb-4`}
      >
        {categories.map((category) => (
          <TouchableOpacity
            key={category.id}
            style={tw`px-4 py-2 rounded-lg mr-2 items-center ${
              category.active ? "bg-green-200" : "bg-gray-100"
            }`}
          >
            <Image
              source={category.image}
              style={tw`w-[45px] h-[45px] my-1 rounded`}
            />
            <Text
              style={tw`${
                category.active
                  ? "text-green-700 font-semibold"
                  : "text-gray-600"
              }`}
            >
              {category.name}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Schedule */}
      <Text style={tw`text-lg font-semibold`}>Schedules</Text>
      <DateSelector
        dates={dates}
        months={months}
        selectedDate={selectedDate}
        selectedMonth={selectedMonth}
        setSelectedDate={setSelectedDate}
        setSelectedMonth={setSelectedMonth}
      />

      {/* Available Time */}
      <Text style={tw`text-lg font-semibold my-2 mt-5`}>Available time</Text>
      <View style={tw`flex-row flex-wrap mb-4 justify-center`}>
        {times.map((time) => (
          <TouchableOpacity
            key={time}
            onPress={() => setSelectedTime(time)}
            style={tw`px-4 py-2 rounded-lg m-1 flex-row items-center ${
              selectedTime === time ? "bg-green-200" : "bg-gray-100"
            }`}
          >
            <FontAwesome
              name="clock-o"
              size={16}
              color={selectedTime === time ? "#2e7d32" : "#9e9e9e"}
            />
            <Text
              style={tw`ml-2 ${
                selectedTime === time
                  ? "text-green-700 font-semibold"
                  : "text-gray-600"
              }`}
            >
              {time}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Doctor Card */}
      <View style={tw`items-center my-3 mb-8`}>
        <AppointmentCard
          date={selectedDate}
          month={months[selectedMonth]}
          time={selectedTime}
        />
      </View>

      {/* Book Appointment Button */}
      <View style={tw`items-center my-3`}>
        <Button
          colors={["#4FC48B", "#298582"]}
          func={() => {}}
          text="Book an Appointment"
          style={"w-[95%]"}
        />
      </View>
    </ScrollView>
  );
};

export default AppointmentScreen;
