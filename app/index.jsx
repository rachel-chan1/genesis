import React from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import Cover from "@/components/home/cover"
import Feed from "@/components/home/feed"

const App = () => {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Cover />
        <Feed />
        <View style={{ height: 20 }} />
      </ScrollView>
      <View style={styles.newButtonOut}>
        <View style={styles.newButtonIn}>
          <Text style={{ color: '#36522A', fontSize: 75, marginTop: -18 }}>+</Text>
        </View>
      </View>
    </View>
  )
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
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
})