import * as React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { auth } from '../firebase'



const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Welcome, {auth.currentUser?.email}</Text> 
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
   button: {
    backgroundColor: '#0782F9',
    width: '60%',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 40,
  },
  buttonText: {
    color: 'white',
    fontWeight: '700',
    fontSize: 16,
  },
})