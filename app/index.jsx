import React from 'react';
import { View, TextInput, StyleSheet, ScrollView, Text } from 'react-native';
import Cover from '@/components/home/cover';
import Feed from '@/components/home/feed';
import Header from '../shared/header';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Header />
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <TextInput
          style={styles.searchBar}
          placeholder="Search..."
        />
        <Cover />
        <Feed />
      </ScrollView>
      <View style={styles.newButtonOut}>
        <View style={styles.newButtonIn}>
          <Text style={{ color: '#36522A', fontSize: 75, marginTop: -18 }}>+</Text>
        </View>
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  searchBar: {
    width: '80%',
    height: 40,
    borderRadius: 20,
    backgroundColor: '#fff',
    marginTop: 10,
    paddingLeft: 15,
    fontSize: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3.5,
    elevation: 3,
    alignSelf: 'center',
  },
  newButtonOut: {
    width: 72,
    height: 72,
    backgroundColor: '#36522A',
    position: 'absolute',
    bottom: 20,
    right: 20,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  newButtonIn: {
    width: 62,
    height: 62,
    backgroundColor: '#E6D2DB',
    position: 'absolute',
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
