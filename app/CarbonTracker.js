import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import Header from '@/shared/header';
import { ProgressBar } from 'react-native-paper'; // Import ProgressBar

const CarbonTracker = () => {
  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <Header />
      <Text style={styles.carbonTrackerHeader}>Carbon Tracker</Text>

      {/* Circle container */}
      <View style={styles.circleContainer}>
        <View style={styles.circleOuter}>
          <View style={styles.circleMiddle}>
            <View style={styles.circleInner}></View>
          </View>
        </View>
      </View>

      {/* Progress Bars */}
      <View style={styles.progressContainer}>
        <Text style={styles.progressLabel}>Buying Secondhand</Text>
        <ProgressBar progress={0.6} color="#35522b" style={styles.progressBar} />
        
        <Text style={styles.progressLabel}>Donations</Text>
        <ProgressBar progress={0.3} color="#a7b59e" style={styles.progressBar} />

        <Text style={styles.progressLabel}>Personal Sales</Text>
        <ProgressBar progress={0.75} color="#799567" style={styles.progressBar} />
      </View>

      {/* Redeem Points Button */}
      <View style={styles.buttonContainer}> {/* Center container */}
        <TouchableOpacity style={styles.redeemButton}>
          <Text style={styles.redeemButtonText}>Redeem Points</Text>
        </TouchableOpacity>
      </View>

      {/* Extra space below the button */}
      <View style={styles.bottomSpace}></View> {/* This space ensures the button is not clipped */}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    backgroundColor: '#fff',
    paddingBottom: 20, // Add space at the bottom so button isn't stuck
  },
  carbonTrackerHeader: {
    fontSize: 32,
    fontWeight: 'regular',
    fontFamily: 'sans-serif',
    color: '#333',
    alignSelf: 'flex-start',
    marginLeft: 20, // Space from the left
    marginTop: 20,
  },
  circleContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50,
  },
  circleOuter: {
    width: 400,
    height: 400,
    borderRadius: 200,
    borderWidth: 30,
    borderColor: '#35522b',
    alignItems: 'center',
    justifyContent: 'center',
  },
  circleMiddle: {
    width: 275,
    height: 275,
    borderRadius: 175,
    borderWidth: 30,
    borderColor: '#a7b59e',
    alignItems: 'center',
    justifyContent: 'center',
  },
  circleInner: {
    width: 150,
    height: 150,
    borderRadius: 150,
    borderWidth: 30,
    borderColor: '#799567',
  },
  progressContainer: {
    width: '80%',
    marginTop: 50,
    marginLeft: '10%', // Move progress bars and text slightly to the right
  },
  progressBar: {
    marginVertical: 10,
    height: 20,
    borderRadius: 20,
  },
  progressLabel: {
    fontSize: 16,
    color: '#333',
    fontWeight: 'bold',
    marginBottom: 5,
  },
  redeemButton: {
    backgroundColor: '#5b744b',
    paddingVertical: 15,
    paddingHorizontal: 20,
    width: '70%',
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },
  redeemButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  buttonContainer: {
    alignItems: 'center', // This ensures the button is centered horizontally
    marginTop: 30,
  },
  bottomSpace: {
    height: 30,  // Extra space below the button
  },
});

export default CarbonTracker;
