import {
    View,
    Button,
    StyleSheet,
    StatusBar
   } from 'react-native'
import SearchBar from './search-bar'


const Home = ({navigation}) => {
    return(
        <View>          
            <View style={styles.container}>
                <SearchBar/>
            </View>
            <View style={{
            flex:1,
            alignItems: 'center',
            justifyContent: 'center'}}>
                <Button onPress={() => navigation.navigate('Login')} title="Voltar"/>        
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: StatusBar.currentHeight + 10,
        paddingHorizontal: 10,
        marginRight: 50,       
    },
})

export default Home