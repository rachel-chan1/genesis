import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Header from "@/shared/header";

const Label = () => {
  return (
    <View style={styles.container}>
      <Header />
      <Text style={styles.pageTitle}>Donation Label</Text>

      <View style={styles.labelContainer}>
        <Text style={styles.labelText}>
          Thank you for choosing to donate! Your contribution helps provide a
          second life to clothing, books, and toys, and support various shelters
          and organizations. Below is your donation summary.
        </Text>
        <Text style={styles.labelText}>Items donated: Clothes, Books, Toys</Text>
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
    fontWeight: "bold",
  },
  labelContainer: {
    padding: 20,
    marginTop: 30,
    alignItems: "center",
  },
  labelText: {
    fontSize: 18,
    color: "#333",
    textAlign: "center",
    marginVertical: 10,
  },
});

export default Label;
