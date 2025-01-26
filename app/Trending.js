import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import Header from '@/shared/header';
import TrendCover from '@/components/trendCover';
import TrendFeed from '@/components/trendFeed';

const Trending = () => {
  return (
    <View style={styles.container}>
      <Header />
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <TrendCover />
        <TrendFeed />
      </ScrollView>
    </View>
  );
};

export default Trending;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  innerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});
