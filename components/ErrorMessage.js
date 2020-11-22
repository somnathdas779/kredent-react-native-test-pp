import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const ErrorMessage = errorValue => (
  <View style={styles.container}>
    <Text style={styles.errorText}>{errorValue}</Text>
  </View>
)

const styles = StyleSheet.create({
  container: {
    marginTop:0,
    marginLeft: 25
  },
  errorText: {
    color: 'red',
    fontWeight:'bold'
  }
})

export default ErrorMessage
