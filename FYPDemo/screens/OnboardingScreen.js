import React from 'react'
import { SafeAreaView, Text, TouchableOpacity ,StyleSheet} from 'react-native';
import LottieView from 'lottie-react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const OnboardingScreen  = ({navigation}) => {
 
  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
      }}>
        <LottieView 
        source={require('../assets/lottie_onboarding.json')} autoPlay loop
        style={styles.lottie}/>

      <TouchableOpacity
        style={{
          backgroundColor: '#0782F9',
          padding: 20,
          width: '90%',
          borderRadius: 10,
          marginBottom: 50,
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}
        onPress={() => navigation.navigate('Login')}>
        <Text
          style={{
            color: 'white',
            fontSize: 18,
            textAlign: 'center',
            fontWeight: 'bold',
            
          }}>
          Get Started
        </Text>
        <MaterialIcons name="arrow-forward-ios" size={22} color="#fff" />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
    lottie: {
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center', 
    width:100, 
    height:100,
    marginTop:50
}
    })


export default OnboardingScreen;