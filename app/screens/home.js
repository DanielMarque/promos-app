import {
    View,
    StyleSheet,
    StatusBar,
    TouchableOpacity,
} from 'react-native'
import SearchBar from './search-bar'
import Ionicons from '@expo/vector-icons/Ionicons';
import List from './list';

const Home = ({ navigation }) => {

    return (
        <View>
            <View style={styles.container}>
                <SearchBar />
                <TouchableOpacity onPress={() => navigation.openDrawer()}>
                    <Ionicons style={styles.hamburguer} name="md-menu" size={38} color="black" />
                </TouchableOpacity>
            </View>
            <View>
                <List />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        marginTop: StatusBar.currentHeight + 10,
        paddingHorizontal: 10,
        marginRight: 50,
        flexDirection: "row",
    },
    hamburguer: {
        flex: 1,
        marginLeft: 5,
        marginTop: 5,
        width: '100%',
    }
})

export default Home