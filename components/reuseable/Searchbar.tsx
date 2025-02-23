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
      <Image source={require("../../assets/images/Vector (1).png")} />
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
    borderColor: "#4FC48B", // Light green border
    borderRadius: 24,
    paddingVertical: 6,
    paddingHorizontal: 12,
    width: "100%",
    backgroundColor: "white",
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: "#333",
    marginLeft: 5,
  },
});

export default SearchBar;
