import React, { useState } from "react";
import Tabbar from "../reuseable/tabbar";
import {
  View,
  Text,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from "react-native";
import tw from "twrnc"; // or the appropriate library for tw
import Inputs from "../reuseable/inputs";
import Button from "../reuseable/button";
import { router } from "expo-router";

const Registration = () => {
  const [fullName, setFullName] = useState("");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [nationality, setNationality] = useState("");
  const [state, setState] = useState("");
  const [address, setAddress] = useState("");
  const [diabetic, setDiabetic] = useState("");
  const [others, setOthers] = useState("");
  const [occupation, setOccupation] = useState("");

  return (
    <KeyboardAvoidingView
      style={tw`flex-1`}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <Tabbar screenText="Registration Form" />
      <ScrollView
        style={tw`flex-1 bg-white`}
        contentContainerStyle={tw`px-2 py-2`}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
      >
        <View style={tw`flex justify-between flex-col`}>
          <View style={tw`flex-col`}>
            <Inputs
              style={tw`text-gray-700 text-base mb-[-10px] ml-6 px-1 bg-white z-20 w-[18%]`}
              Label="Name"
              placeholder="First and last name"
              value={fullName}
              setValue={setFullName}
            />

            <View style={tw`flex-row justify-start w-full`}>
              <View style={tw`pr-3 w-1/2`}>
                <Inputs
                  style={tw`text-gray-700 w-50 text-base mb-[-10px] ml-6 px-1 bg-white z-20 w-[26%]`}
                  Label="Date"
                  placeholder="MM/DD/YYYY"
                />
              </View>
              <View style={tw`pl-3 w-1/2`}>
                <Inputs
                  style={tw`text-gray-700 flex-1 text-base mb-[-10px] ml-6 px-1 bg-white z-20 w-[40%]`}
                  Label="Height"
                  placeholder="in ft"
                  value={height}
                  setValue={setHeight}
                />
              </View>
            </View>

            <View style={tw`flex-row`}>
              <View style={tw`pr-3 w-1/2`}>
                <Inputs
                  style={tw`text-gray-700 flex-1 text-base mb-[-10px] ml-6 px-1 bg-white z-20 w-[37%]`}
                  Label="Weight"
                  placeholder="in kg"
                  value={weight}
                  setValue={setWeight}
                />
              </View>

              <View style={tw`pl-3 w-1/2`}>
                <Inputs
                  style={tw`text-gray-700 flex-1 text-base mb-[-10px] ml-6 px-1 bg-white z-20 w-[54%]`}
                  Label="Nationality"
                  placeholder="Country"
                  value={nationality}
                  setValue={setNationality}
                />
              </View>
            </View>

            <Inputs
              style={tw`text-gray-700 text-base mb-[-10px] ml-6 px-1 bg-white z-20 w-[47%]`}
              Label="State of Residence"
              placeholder="E.g Ogun State"
              value={state}
              setValue={setState}
            />
            <Inputs
              style={tw`text-gray-700 text-base mb-[-10px] ml-6 px-1 bg-white z-20 w-[34%] `}
              Label="Home Address"
              placeholder="Input your residence address"
              value={address}
              setValue={setAddress}
            />
            <Inputs
              style={tw`text-gray-700 text-base mb-[-10px] ml-6 px-1 bg-white z-20 w-[20%] `}
              Label="Diabetic"
              placeholder="Yes/No"
              value={diabetic}
              setValue={setDiabetic}
            />

            <Inputs
              style={tw`text-gray-700 text-base mb-[-10px] ml-6 px-1 bg-white z-20 w-[47%] `}
              Label="Other Health Issues?"
              placeholder="State the ailment if yes"
              value={others}
              setValue={setOthers}
            />

            <Inputs
              style={tw`text-gray-700 text-base mb-[-10px] ml-6 px-1 bg-white z-20 w-[28%] `}
              Label="Occupation"
              placeholder="E.g Doctor"
              value={occupation}
              setValue={setOccupation}
            />

            <Button
              text="Save and Continue"
              func={() => router.push("/tabs/Home")}
              colors={["#4FC48B", "#298582"]}
            />
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default Registration;
