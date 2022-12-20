import { createDrawerNavigator } from '@react-navigation/drawer';
import Settings from './settings'

const Drawer = createDrawerNavigator();

const DrawerMenu = ({navigation}) => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Settings" component={Settings} />
    </Drawer.Navigator>
  );
}

export default DrawerMenu