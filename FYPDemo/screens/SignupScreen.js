import React, { useState } from 'react';
import {StyleSheet, Text, TextInput, TouchableOpacity, View, ScrollView} from 'react-native';
import firebase from 'firebase/app';


const SignupScreen = ({navigation}) => {
    const [username, setUsername] = useState();
    const [fullname ,setFullName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [confirmPassword, setConfirmPassword] = useState();
      
    const registerUser = async() =>{
      if(email && password && confirmPassword)
        if(password === confirmPassword){ 
          firebase.auth()
          .createUserWithEmailAndPassword(email, password)
          .then(({user}) =>{
            user.updateProfile({displayName:username});
            firebase.app()
            .database('https://fypdemo-389f2-default-rtdb.asia-southeast1.firebasedatabase.app/')
            .ref()
            .child('users/')
            .child(user.uid)
            .set({username,fullname,password,email})
            .then(()=>{
              navigation.navigate('Login')
              console.log('Registered with:', user.email);
            })
          })
          .catch((error) =>{
            alert(error.message);
          });
        }else{
          alert('Password mismatch');
        }
      else alert('Please fill the form correctly');
    }
    return (
        <ScrollView
        contentContainerStyle={styles.container}>
        
        <Text style={styles.text}>Create an account</Text>
          
          <View style={styles.inputContainer}>
            <TextInput
              placeholder="Username"
              value={username}
              onChangeText={text => setUsername(text)}
              style={styles.input}
            />

            <TextInput
              placeholder="Full Name"
              value={fullname}
              onChangeText={text => setFullName(text)}
              style={styles.input}
            />
          
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
            <TextInput
              placeholder="Confirm Password"
              value={confirmPassword}
              onChangeText={text => setConfirmPassword(text)}
              style={styles.input}
              secureTextEntry
            />
          </View>
    
          <View style={styles.buttonContainer}>
           
            <TouchableOpacity
              onPress={registerUser}
              style={[styles.button, styles.buttonOutline]}
            >
              <Text style={styles.buttonOutlineText}>Register</Text>
            </TouchableOpacity>
          </View>
          
          <View style={styles.textPrivate}>
            <Text style={styles.color_textPrivate}>
              By registering, you confirm that you accept our
            </Text>
            <TouchableOpacity onPress={() => alert('Terms Clicked!')}>
              <Text style={[styles.color_textPrivate, {color: '#e88832'}]}>
                Terms of service
              </Text>
            </TouchableOpacity>
            <Text style={styles.color_textPrivate}> and </Text>
            <Text style={[styles.color_textPrivate, {color: '#e88832'}]}>
              Privacy Policy
            </Text>
          </View>

          <View style={styles.textPrivate}>
            <Text style={styles.text_SignIn}>
            Have an account? &nbsp;
            </Text>
            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
              <Text style={styles.text_ColorSignIn}>
                 Sign In
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
    )
}

export default SignupScreen

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
      fontSize: 13,
      fontWeight: '400',
      fontFamily: 'Lato-Regular',
      color: 'grey',
    },
    text_SignIn:{
      fontSize: 15,
      fontWeight: '400',
      fontFamily: 'Lato-Regular',
      color: 'black',
    },
    text_ColorSignIn:{
      fontSize: 15,
      fontWeight: '400',
      fontFamily: 'Lato-Regular',
      color: 'red',
    }

   
  })
