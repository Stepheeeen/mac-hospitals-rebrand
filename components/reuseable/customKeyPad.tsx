import React, { useState } from "react";
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from "react-native";
import tw from "twrnc";

const CustomKeypad: React.FC = () => {
  const [otp, setOtp] = useState(["", "", "", ""]);
  const inputs = Array.from({ length: otp.length });

  const handleKeyPress = (value: string) => {
    // Add the pressed number to the next empty spot
    const newOtp = [...otp];
    const emptyIndex = newOtp.findIndex((digit) => digit === "");

    if (value === "delete") {
      // Handle delete: clear the last non-empty spot
      const lastFilledIndex = newOtp.map((digit) => digit !== "").lastIndexOf(true);
      if (lastFilledIndex !== -1) {
        newOtp[lastFilledIndex] = "";
      }
    } else if (emptyIndex !== -1) {
      // Add the number to the first empty spot
      newOtp[emptyIndex] = value;
    }

    setOtp(newOtp);
  };

  return (
    <View style={tw`p-5 bg-white`}>
      {/* OTP Display */}
      <Text style={tw`text-center text-gray-700 text-lg mb-5`}>
        Enter the code sent to 081***86
      </Text>

      {/* OTP Input Display */}
      <View style={tw`flex-row justify-evenly mb-5`}>
        {otp.map((digit, index) => (
          <TextInput
            key={index}
            style={styles.otpBox}
            value={digit}
            editable={false} // Prevent manual typing
          />
        ))}
      </View>

      {/* Custom Keypad */}
      <View style={styles.keypadContainer}>
        {[
          [1, 2, 3],
          [4, 5, 6],
          [7, 8, 9],
          ["", 0, "delete"],
        ].map((row, rowIndex) => (
          <View key={rowIndex} style={styles.keypadRow}>
            {row.map((key, keyIndex) => (
              <TouchableOpacity
                key={keyIndex}
                style={styles.keypadButton}
                onPress={() => key !== "" && handleKeyPress(key.toString())}
              >
                {key === "delete" ? (
                  <Text style={styles.keypadText}>⌫</Text>
                ) : (
                  <Text style={styles.keypadText}>{key}</Text>
                )}
              </TouchableOpacity>
            ))}
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  otpBox: {
    width: 50,
    height: 50,
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 5,
    textAlign: "center",
    fontSize: 24,
    backgroundColor: "white",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  keypadContainer: {
    marginTop: 20,
  },
  keypadRow: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 10,
  },
  keypadButton: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "#f0f0f0",
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3.84,
    elevation: 5,
  },
  keypadText: {
    fontSize: 24,
    color: "#333",
  },
});

export default CustomKeypad;
