import React from "react";
import { View, TextInput, StyleSheet, Image } from "react-native";
// import { Icon } from "react-native-elements";

interface SearchBarProps {
  placeholder?: string;
  value?: string;
  onChangeText?: (text: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({
  placeholder = "Search for services or ailment",
  value,
  onChangeText,
}) => {
  return (
    <View style={styles.container}>
      {/* <Icon name="search" type="feather" color="#ccc" size={20} style={styles.icon} /> */}
      <Image source={require("../../assets/images/Vector (1).png")}/>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        placeholderTextColor="#ccc"
        value={value}
        onChangeText={onChangeText}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#A1E1C0", // Light green border
    borderRadius: 24,
    paddingVertical: 4,
    paddingHorizontal: 12,
    width: "100%",
    backgroundColor: "white",
  },
  icon: {
    marginRight: 8,
  },
  input: {
    flex: 1,
    fontSize: 14,
    color: "#333",
  },
});

export default SearchBar;
