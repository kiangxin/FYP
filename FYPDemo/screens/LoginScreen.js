import { useNavigation } from '@react-navigation/core';
import React, { useEffect, useState } from 'react';
import {StyleSheet, Text, TextInput, TouchableOpacity, View, ScrollView} from 'react-native';
import firebase from 'firebase/app';
import LottieView from 'lottie-react-native';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading'


const LoginScreen = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigation = useNavigation()
  
  const handleLogin = async() => { 
    firebase.auth()
      .signInWithEmailAndPassword(email, password)
      .then(userCredentials => {
        const user = userCredentials.user;
        console.log('Logged in with:', user.email);
      })
      .catch(error => alert(error.message))
  }

  let [fontsLoaded] = useFonts({
    'Kufam-SemiBoldItalic': require('../assets/fonts/Kufam-SemiBoldItalic.ttf'),
    'Lato-Regular': require('../assets/fonts/Lato-Regular.ttf'),
    });
    if (!fontsLoaded) {
        return <AppLoading />;}
  
  return (
    <ScrollView
    contentContainerStyle={styles.container}>
  
    <LottieView source={require('../assets/logo.json')} autoPlay loop  style={styles.logo}/>
    
    <Text style={styles.text}>FYP Demo App</Text>
      
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Email"
          value={email}
          onChangeText={text => setEmail(text)}
          style={styles.input}
        />
        <TextInput
          placeholder="Password"
          value={password}
          onChangeText={text => setPassword(text)}
          style={styles.input}
          secureTextEntry
        />
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={handleLogin}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        
      </View>
      
  

      <View style={styles.textPrivate}>
            <Text style={styles.color_textPrivate}>
            Don't have an acount? &nbsp;
            </Text>
            <TouchableOpacity onPress={() => navigation.navigate('Register')}>
              <Text style={[styles.color_textPrivate, {color: '#FF0000'}]}>
                 Create Here
              </Text>
            </TouchableOpacity>
          </View>
    </ScrollView>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
  container: {
    paddingTop:100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputContainer: {
    width: '80%'
  },
  input: {
    backgroundColor: 'white',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 10,
  },
  buttonContainer: {
    width: '60%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
  },
  button: {
    backgroundColor: '#0782F9',
    width: '100%',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonOutline: {
    backgroundColor: 'white',
    marginTop: 5,
    borderColor: '#0782F9',
    borderWidth: 2,
  },
  buttonText: {
    color: 'white',
    fontWeight: '700',
    fontSize: 16,
  },
  buttonOutlineText: {
    color: '#0782F9',
    fontWeight: '700',
    fontSize: 16,
  },
  logo: {
    paddingTop:5,
    height: 200,
    width: 200,
    
  },
  text: {
    fontFamily: 'Kufam-SemiBoldItalic',
    fontSize: 28,    
    color: '#051d5f',
  },
  textPrivate: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    margin: 30,
    justifyContent: 'center',
    paddingTop:20
  },
  color_textPrivate: {
    fontSize: 15,
    fontWeight: '400',
    fontFamily: 'Lato-Regular',
    color: 'black',
  },
 
})
