import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Header from "@/shared/header";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from '@react-navigation/native';

const Donate = () => {
    const navigation = useNavigation(); 
  const [selectedOptions, setSelectedOptions] = useState({
    option1: false,
    option2: false,
    option3: false,
    option4: false,
    option5: false,
    option6: false,
  });

  const toggleCheckbox = (key) => {
    setSelectedOptions((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };
  const handleSubmit = () => {
    navigation.navigate('Label'); // Navigate to the Label page after pressing the button
  };


  return (
    <View style={styles.container}>
      <Header />
      <Text style={styles.pageTitle}>Donate</Text>

      {/* Rectangle Container */}
      <View style={styles.rectangle}>
        <Text style={styles.rectangleTitle}>
          Here at Genesis, we focus on sustainability and giving back to our
          communities. To help achieve that, we have partnered with the
          following shelters and organizations to offer a second life to clothes
          for those who need it. Please indicate the following shelters you'd
          like to donate to:
        </Text>
        <View style={styles.checkboxContainer}>
          <TouchableOpacity
            style={styles.checkboxWrapper}
            onPress={() => toggleCheckbox("option1")}
          >
            <View
              style={[
                styles.checkbox,
                selectedOptions.option1 && styles.checkboxSelected,
              ]}
            />
            <Text style={styles.checkboxLabel}>SAFE Family Justice Center</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.checkboxWrapper}
            onPress={() => toggleCheckbox("option2")}
          >
            <View
              style={[
                styles.checkbox,
                selectedOptions.option2 && styles.checkboxSelected,
              ]}
            />
            <Text style={styles.checkboxLabel}>Clothing the Homeless</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.checkboxWrapper}
            onPress={() => toggleCheckbox("option3")}
          >
            <View
              style={[
                styles.checkbox,
                selectedOptions.option3 && styles.checkboxSelected,
              ]}
            />
            <Text style={styles.checkboxLabel}>University Homeless Women Center</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.checkboxWrapper}
            onPress={() => toggleCheckbox("option4")}
          >
            <View
              style={[
                styles.checkbox,
                selectedOptions.option4 && styles.checkboxSelected,
              ]}
            />
            <Text style={styles.checkboxLabel}>Downtown Women's Center</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.checkboxWrapper}
            onPress={() => toggleCheckbox("option5")}
          >
            <View
              style={[
                styles.checkbox,
                selectedOptions.option5 && styles.checkboxSelected,
              ]}
            />
            <Text style={styles.checkboxLabel}>Los Angeles Mission</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.checkboxWrapper}
            onPress={() => toggleCheckbox("option6")}
          >
            <View
              style={[
                styles.checkbox,
                selectedOptions.option6 && styles.checkboxSelected,
              ]}
            />
            <Text style={styles.checkboxLabel}>My Friend's Place</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.submitButton}
          onPress={() => navigation.navigate("Label")} // Replace with actual destination
        >
          <Text style={styles.submitButtonText}>
            <Ionicons name="arrow-forward" size={24} color="white" />
          </Text>
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
  rectangle: {
    marginTop: 20,
    padding: 20,
    width: "83%",
    height: "60%", // Let the height adjust dynamically based on content
    alignSelf: "center",
    backgroundColor: "#a7b59e",
    borderRadius: 10,
    elevation: 2,
  },
  rectangleTitle: {
    fontSize: 18,
    fontWeight: "bold",
    lineHeight: 24, // Add spacing between lines
    textAlign: "center",
    marginBottom: 10,
    color: "#FFFFFF",
  },
  checkboxContainer: {
    marginTop: 10,
  },
  checkboxWrapper: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
    color: "#FFFFFF",
  },
  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 1,
    borderColor: "#888",
    borderRadius: 5,
    marginRight: 10,
  },
  checkboxSelected: {
    backgroundColor: "#5b744b",
  },
  checkboxLabel: {
    fontSize: 16,
    color: "#fff",
  },
  buttonContainer: {
    position: "absolute",
    bottom: 80,
    left: 0,
    right: 0,
    alignItems: "center",
  },
  submitButton: {
    backgroundColor: "#5b744b",
    padding: 15,
    borderRadius: 30,
    width: 60,
    justifyContent: "center",
    alignItems: "center",
  },
  submitButtonText: {
    color: "#fff",
    fontSize: 18,
  },
});

export default Donate;
