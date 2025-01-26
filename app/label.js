import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from "react-native";
import Header from "@/shared/header";

const Label = ({ navigation }) => {
  const [labelNumber, setLabelNumber] = useState("");

  return (
    <View style={styles.container}>
      <Header />
      <Text style={styles.pageTitle}>Donate</Text>

      {/* First larger rectangle */}
      <View style={styles.firstRectangle}>
        <Text style={styles.firstRectangleText}>
          Please send or drop off your donations to the following location, with the donation labeled “Genesis”.{'\n'}{' '}
          Genesis Donations{'\n'}
          123 Main Street #1234 RoseHack, CA 12345.
        </Text>
      </View>

      {/* Second smaller rectangle with a TextInput */}
      <View style={styles.secondRectangle}>
        <Text style={styles.secondRectangleText}>Insert your label number here:</Text>
        <TextInput
          style={styles.textInput}
          placeholder="Enter label number"
          value={labelNumber}
          onChangeText={setLabelNumber}
        />
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.submitButton}
          onPress={() => navigation.navigate("Label")}
        >
          <Text style={styles.submitButtonText}>Submit</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    
  },
  pageTitle: {
    fontSize: 28,
    marginLeft: 20,
    marginTop: 20,
  },
  firstRectangle: {
    backgroundColor: "#A8B69F", // Color for the first rectangle
    borderRadius: 20,
    padding: 60, // Adjust padding for a taller rectangle
    marginTop: 20,
    marginBottom: 15,
    marginLeft: 15,
    marginRight: 15,
    alignItems: "center",
    justifyContent: "center", // Centers the text vertically as well
  },
  firstRectangleText: {
    color: "#fff",
    fontSize: 18,
    textAlign: "center", // Ensures the text is centered horizontally
  },
  secondRectangle: {
    backgroundColor: "#7B9D6A", // Color for the second rectangle
    borderRadius: 20,
    paddingVertical: 60, // Adjust padding for a taller rectangle
    marginBottom: 30,
    marginLeft: 15,
    marginRight: 15,
    alignItems: "center",
    justifyContent: "center", // Centers the text and input vertically
  },
  secondRectangleText: {
    color: "#fff",
    fontSize: 20,
    textAlign: "center",
    marginBottom: 10,
  },
  textInput: {
    backgroundColor: "#fff",
    width: "80%", // Adjust width as necessary
    padding: 10,
    borderRadius: 10,
    fontSize: 15,
  },
  buttonContainer: {
    position: "absolute",
    bottom: 100,
    left: 0,
    right: 0,
    alignItems: "center",
  },
  submitButton: {
    backgroundColor: "#5b744b",
    padding: 15,
    borderRadius: 30,
    width: 200, // Increase the width of the button
    justifyContent: "center",
    alignItems: "center",
  },
  submitButtonText: {
    color: "#fff",
    fontSize: 18,
  },
});

export default Label;
