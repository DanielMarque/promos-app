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

  const getGoogleOAuthURL = async () => {

    const rootUrl = 'https://accounts.google.com/o/oauth2/v2/auth'
  
    const options = {
      redirect_uri: 'https://usat5wglha.execute-api.us-east-1.amazonaws.com/promos/oauth',
      client_id: '587819817274-49gecl139ieio848n1i1hh9m8ri3ulic.apps.googleusercontent.com',
      access_type: 'offline',
      response_type: 'code',
      prompt: 'consent',
      scope: [
        'https://www.googleapis.com/auth/userinfo.profile',
        'https://www.googleapis.com/auth/userinfo.email'
      ].join(" ")
    }

    // npx uri-scheme open "exp://127.0.0.1:19000" --android
    
    const qs = new URLSearchParams(options)    
    
    const url = `${rootUrl}?${qs.toString()}`

    await WebBrowser.openBrowserAsync(url)
    
    Linking.addEventListener('url', (data)=> {
      console.log('Data: ',data)
    })
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
            onPress={getGoogleOAuthURL}
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