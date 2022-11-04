import React, { useState } from "react"
import { SocialIcon } from 'react-native-elements'
import {
  StyleSheet,
  TextInput,
  View,
  TouchableOpacity,
  Text,
  Button
 } from 'react-native'

const WelcomeScreen = (props) => {
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
      <View 
      style={styles.background}>
        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder="E-mail"
            placeholderTextColor="#003f5c"
            onChangeText={(email) => setEmail(email)}
          />
        </View>        
        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder="Password"
            placeholderTextColor="#003f5c"
            secureTextEntry={true}
            onChangeText={(password) => setPassword(password)}
          />
        </View>
        <TouchableOpacity>
          <Text style={styles.forgot_button}>Forgot Password?</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.loginBtn}>
          <Text style={styles.loginText}>LOGIN</Text>
        </TouchableOpacity>
          <SocialIcon
            style={styles.loginBtnGoogle}
            title='Login com Google'
            button
            dark
            type='google'
          />
      </View>
  )
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  inputView: {
    backgroundColor: "#5dd4d0",
    borderRadius: 30,
    width: "80%",
    height: 45,
    marginBottom: 20,
  },  
  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
  },
  loginText: {
    flex: 1,
    padding: 10,
    textAlign:'center'
  },
  inputArea: {
    width: '80%',
    marginBottom: 30,
  },
  forgot_button: {
    height: 30,
    marginBottom: 30,
  },
  loginBtn: {
   width:"60%",
   borderRadius:25,
   height:50,
   alignItems:"center",
   justifyContent:"center",
   backgroundColor:"#FF1493",
   marginBottom: 20
 },
 loginBtnGoogle: {
  width:"60%",
  textAlign: "center",
},
 logoGoogle: {
  position: 'absolute',
 }
})

export default WelcomeScreen