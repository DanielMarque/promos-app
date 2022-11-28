import { StatusBar } from 'expo-status-bar';
import WelcomeScreen from './app/screens/welcome-screen'
import { Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import * as Linking from 'expo-linking';

export default function App() {
  return <WelcomeScreen/>
}
