import React from 'react'
import { View, StyleSheet } from 'react-native'
import frog from "@/assets/images/download (41).jpeg"
import Cover from "@/components/home/cover"

const app = () => {
  return (
    <View style={styles.container}>
      <Cover />
    </View>
  )
}

export default app

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
})