import React, { useState } from "react";
import { View, Text, TextInput, FlatList } from "react-native";
import tw from "twrnc";
import HospitalCard from "../reuseable/hospital_card";
import Tabbar from "../reuseable/tabbar";

const hospitals = [
  { id: "1", name: "The General Hospital, Oshodi", status: "Free" },
  { id: "2", name: "The General Hospital, Oshodi", status: "Upgrade" },
  { id: "3", name: "The General Hospital, Oshodi", status: "Free" },
  { id: "4", name: "The General Hospital, Oshodi", status: "Free" },
  { id: "5", name: "The General Hospital, Oshodi", status: "Free" },
];

const NearbyHospitalsScreen = () => {
  const [search, setSearch] = useState("");

  // Filter hospitals based on search query
  const filteredHospitals = hospitals.filter((hospital) =>
    hospital.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <View style={tw` bg-white p-4`}>
     
     <Tabbar
     screenText="Nearby Hospitals"
     />

      
      <View style={tw`flex-row items-center border border-gray-300 rounded-full px-4 py-2 mb-4`}>
        <TextInput
          style={tw`flex-1 text-base`}
          placeholder="Search"
          value={search}
          onChangeText={setSearch}
        />
      </View>

      
      <FlatList
        data={filteredHospitals}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <HospitalCard name={item.name} status={item.status} />
        )}
      />
    </View>
  );
};

export default NearbyHospitalsScreen;
