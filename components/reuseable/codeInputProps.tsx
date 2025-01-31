import React, { useState, useEffect } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import tw from "twrnc";

interface CodeInputProps {
  phoneNumber: string; // Phone number to display
  onVerify: (code: string) => void; // Callback when the user clicks Verify
  onResend: () => void; // Callback when the user clicks Resend Code
  resendTimer?: number; // Optional: Time to wait before allowing resend (default is 60 seconds)
}

const CodeInput: React.FC<CodeInputProps> = ({
  phoneNumber,
  onVerify,
  onResend,
  resendTimer = 60, // Default timer value
}) => {
  // State to store the entered code as an array of strings (4 digits)
  const [code, setCode] = useState(["", "", "", ""]);

  // State to track the resend timer countdown
  const [timer, setTimer] = useState(resendTimer);

  // Reference array for all input fields
  const inputs: TextInput[] = [];

  // Handle input changes for each input box
  const handleInputChange = (text: string, index: number) => {
    const newCode = [...code];

    if (text === "") {
      // Clear the current input
      newCode[index] = "";

      // Automatically move focus to the previous input (if not the first input)
      if (index > 0) {
        (inputs[index - 1]?.focus as () => void)();
      }
    } else {
      // Set the new value for the current input
      newCode[index] = text;

      // Automatically move focus to the next input (if not the last input)
      if (index < code.length - 1) {
        (inputs[index + 1]?.focus as () => void)();
      }
    }

    // Update the state with the modified code array
    setCode(newCode);
  };

  // Called when the "Verify" button is pressed
  const handleVerify = () => {
    // Combine the code array into a single string and pass it to the callback
    onVerify(code.join(""));
  };

  // Called when the "Resend Code" button is pressed
  const handleResend = () => {
    // Reset the timer and trigger the resend callback
    setTimer(resendTimer);
    onResend();
  };

  // Timer countdown logic using `useEffect`
  useEffect(() => {
    const interval = setInterval(() => {
      // Decrease the timer every second until it reaches 0
      setTimer((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    // Cleanup the interval when the component unmounts
    return () => clearInterval(interval);
  }, []);

  return (
    <View style={tw`p-5 bg-white`}>
      {/* Display the message with the masked phone number */}
      <Text style={tw`text-center text-gray-700 text-lg mb-5`}>
        Enter the code sent to {phoneNumber}
      </Text>

      {/* Code input fields */}
      <View style={tw`flex-row justify-evenly mb-5`}>
        {code.map((value, index) => (
          <TextInput
            key={index} // Unique key for each input box
            ref={(ref) => (inputs[index] = ref!)} // Save reference for focus management
            style={tw`w-18 h-18 border border-gray-300 rounded-lg text-center text-2xl shadow-lg bg-white`}
            keyboardType="numeric" // Numeric keyboard for input
            maxLength={1} // Restrict input to a single digit
            value={value} // Controlled value from the state
            onChangeText={(text) => handleInputChange(text, index)} // Handle input changes
            onKeyPress={({ nativeEvent }) => {
              // Handle backspace explicitly
              if (nativeEvent.key === "Backspace" && value === "") {
                handleInputChange("", index - 1); // Clear the previous input
              }
            }}
          />
        ))}
      </View>

      {/* Countdown timer message */}
      <Text style={tw`text-center text-gray-500 mb-5`}>
        Resend code in{" "}
        <Text style={tw`text-red-500`}>{timer}s</Text>
      </Text>

      {/* Resend Code button */}
      <TouchableOpacity
        style={[
          tw`mb-5 self-center py-2 px-4`,
          timer > 0 && tw`opacity-50`, // Disable button while the timer is active
        ]}
        disabled={timer > 0} // Disable interaction if timer is greater than 0
        onPress={handleResend} // Trigger resend logic
      >
        <Text style={tw`text-blue-500 underline`}>Resend Code</Text>
      </TouchableOpacity>

      
    </View>
  );
};

export default CodeInput;
