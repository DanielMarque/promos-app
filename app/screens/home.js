import {
    View,
    Button,
    Text,
   } from 'react-native'

const Home = ({navigation}) => {
    return(
    <View style={{
        flex:1,
        alignItems: 'center',
        justifyContent: 'center'
        }}>
        <Button onPress={() => navigation.navigate('Login')} title="Voltar"/>
    </View>
    )
}

export default Home