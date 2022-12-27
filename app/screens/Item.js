import {
    View,
    Text,
    Image,
    StyleSheet,
    ImageBackground
} from 'react-native'

const Item = (props) => {

    const { name } = props.item
    return (
        <View style={styles.imageContainer} >
            <Image style={styles.image}
                source={require('../assets/frutas.jpeg')} />
            <ImageBackground>
                <Text style={styles.text} >{name}</Text>
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    imageContainer: {
        flexDirection: 'column',
        width: '44%',
        margin: 12,
        marginBottom: 30,
        alignItems: 'center',
    },
    image: {
        width: 150,
        height: 150,
        borderRadius: 5,
    },
    text: {
        textAlign: 'center',
        fontSize: 20,
        marginTop: -85,
        fontWeight: '500',
        color: '#faf7f9',
    }
})

export default Item