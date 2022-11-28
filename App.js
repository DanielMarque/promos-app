import { StatusBar } from 'expo-status-bar';
import WelcomeScreen from './app/screens/welcome-screen'
import { Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import * as Linking from 'expo-linking';

const prefix = Linking.createURL('/');
const prefix1 = Linking.createURL('https://usat5wglha.execute-api.us-east-1.amazonaws.com/promos/oauth?');


export default function App() {

  const linking = {
    prefixes: [prefix, prefix1],
  };

  return (
    <NavigationContainer linking={linking}>
      <WelcomeScreen/>
    </NavigationContainer>
  )
}
