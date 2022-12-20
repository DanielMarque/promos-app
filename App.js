import Login from './app/screens/login'
import Home from './app/screens/home'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DrawerMenu from './app/screens/drawer-menu';

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName='Login' 
        screenOptions={{headerShown:false}}>
        <Stack.Screen name="Login" component={Login}/>
        <Stack.Screen name="Home" component={Home}/>
        <Stack.Screen name="DrawerMenu" component={DrawerMenu}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
  // return <WelcomeScreen/>
}
