import {
    View,
    StyleSheet,
    StatusBar,
    TouchableOpacity,
   } from 'react-native'
import SearchBar from './search-bar'
import Ionicons from '@expo/vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

const Home = () => {

    const nav = useNavigation()

    return(
        <View>          
            <View style={styles.container}>
                <SearchBar/>
                <TouchableOpacity onPress={() => {
                    console.log(nav)
                    nav.openDrawer()
                }}>
                    <Ionicons style={styles.hamburguer} name="md-menu" size={38} color="black"/>
                </TouchableOpacity>
            </View>
            {/* <View style={styles.hamburguer}>
            </View> */}
            {/* <View style={styles.menu}>
                <Button onPress={() => navigation.navigate('Login')} title="Voltar"/>        
            </View> */}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        // backgroundColor: 'black',
        width: '100%',
        marginTop: StatusBar.currentHeight + 10,
        paddingHorizontal: 10,
        marginRight: 50,
        flexDirection: "row",
    },
    hamburguer: {
        // backgroundColor: 'red',
        flex: 1,
        marginLeft: 5,
        marginTop: 5,
        width: '100%',
      }
})

export default Home