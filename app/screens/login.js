import React, { useState } from "react"
import { SocialIcon } from 'react-native-elements'
import handleGoogleSignIn from "../services/handle-google-sign-in"
import {
  StyleSheet,
  TextInput,
  View,
  TouchableOpacity,
  Text,  
 } from 'react-native'

 import Loading from './loading'

const Login = ({ navigation }) => {

  const [visible, setVisible] = useState(false)
    
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const clearEmailAndPassword = (email, password) => {
    setEmail('')
    setPassword('')
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
        <TouchableOpacity style={styles.loginBtn} onPress={(email,password) => clearEmailAndPassword(email, password)}>
          <Text style={styles.loginText}>Login</Text>
        </TouchableOpacity>
          <Loading visible={visible}/>
          <SocialIcon
            onPress={async () => { 
              setVisible(true)
              const result = await handleGoogleSignIn()
              if(result){
                navigation.navigate('Home')
                setVisible(false)
              }
              console.log('Login Failed')
            }}
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

export default Login