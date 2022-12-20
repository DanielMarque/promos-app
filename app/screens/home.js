import {
    View,
    StyleSheet,
    StatusBar
   } from 'react-native'
import SearchBar from './search-bar'
import Ionicons from '@expo/vector-icons/Ionicons';

const Home = ({navigation}) => {
    return(
        <View>          
            <View style={styles.container}>
                <SearchBar/>                
                <Ionicons style={styles.hamburguer} name="md-menu" size={38} color="black"/>
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