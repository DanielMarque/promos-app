import React, { useState } from "react"
import { SocialIcon } from 'react-native-elements'
import * as AuthSession from 'expo-auth-session'
import * as WebBrowser from 'expo-web-browser';
import {
  StyleSheet,
  TextInput,
  View,
  TouchableOpacity,
  Text,
  Linking
 } from 'react-native'

const WelcomeScreen = (props) => {
    
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const clearAndSubmit = (email, password) => {
    setEmail('')
    setPassword('')
  }

  const handleGoogleSignIn = async () => {
    try {
      const CLIENT_ID = "587819817274-49gecl139ieio848n1i1hh9m8ri3ulic.apps.googleusercontent.com"
      const REDIRECT_URI = "https://auth.expo.io/@daniel.cmarques/promos-app"
      const SCOPE = encodeURI("profile email")
      const RESPONSE_TYPE = "token"

      const authUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=${SCOPE}`

      WebBrowser.maybeCompleteAuthSession()

      const {  
        type,
        params
      } = await AuthSession.startAsync({
        authUrl
      })

      console.log(type, params)

    } catch (error) {
      
    }
  }

  return (
      <View 
      style={styles.background}>
        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder="E-mail"
            placeholderTextColor="#003f5c"
            value={email}
            onChangeText={setEmail}
          />
        </View>        
        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            clearButtonMode="always"
            placeholder="Senha"
            placeholderTextColor="#003f5c"
            secureTextEntry={true}
            value={password}
            onChangeText={setPassword}
          />
        </View>
        <TouchableOpacity>
          <Text style={styles.forgot_button}>Esqueci minha senha</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.loginBtn} onPress={(email,password) => clearAndSubmit(email, password)}>
          <Text style={styles.loginText}>Login</Text>
        </TouchableOpacity>
          <SocialIcon
            onPress={handleGoogleSignIn}
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
    padding: 15,
    fontWeight: 'bold',
    color: '#fff',
    fontSize: 15,
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
  marginBottom: 20
},
 logoGoogle: {
  position: 'absolute',
 }
})

export default WelcomeScreen