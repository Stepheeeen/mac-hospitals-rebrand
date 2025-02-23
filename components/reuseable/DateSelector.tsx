import React, { useState } from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import tw from "twrnc";
import { AntDesign } from "@expo/vector-icons";

const DateSelector = ({
  months,
  dates,
  selectedMonth,
  selectedDate,
  setSelectedMonth,
  setSelectedDate,
}: {
  months: [] | any;
  dates: [] | any;
  selectedMonth: any;
  selectedDate: any;
  setSelectedMonth: any;
  setSelectedDate: any;
}) => {
  return (
    <View style={tw`mt-4`}>
      {/* Month Selector */}
      <View style={tw`flex-row justify-between items-center mb-2`}>
        <TouchableOpacity>
          <Text style={tw`text-lg font-semibold`}>{months[selectedMonth]}</Text>
        </TouchableOpacity>

        <View style={tw`flex flex-row gap-3`}>
          <TouchableOpacity
            onPress={() => setSelectedMonth(Math.max(selectedMonth - 1, 0))}
          >
            <AntDesign name="left" size={20} color="black" />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              setSelectedMonth(Math.min(selectedMonth + 1, months.length - 1))
            }
          >
            <AntDesign name="right" size={20} color="black" />
          </TouchableOpacity>
        </View>
      </View>

      {/* Scrollable Dates */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={tw`flex-row`}
      >
        {dates.map(({ day, date }: any) => (
          <TouchableOpacity
            key={date}
            onPress={() => setSelectedDate(date)}
            style={tw`px-3 py-2 mx-1 rounded-lg items-center ${
              selectedDate === date ? "bg-green-200" : "bg-gray-100"
            }`}
          >
            <Text style={tw`text-xs text-gray-500`}>{day}</Text>
            <Text
              style={tw`${
                selectedDate === date
                  ? "text-green-700 font-bold"
                  : "text-gray-700"
              }`}
            >
              {date}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

export default DateSelector;
