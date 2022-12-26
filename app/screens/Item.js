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
                source={require('../assets/bag-food.jpg')} />
            <ImageBackground>
                <Text style={styles.text} >{name}</Text>
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    imageContainer: {
        flexDirection: 'column',
        flex: 1,
        width: '44%',
        margin: 12,
        alignItems: 'center',
    },
    image: {
        width: 150,
        height: 150,
        borderRadius: 5,
        opacity: 0.8,
        shadowOpacity: 0.4
    },
    text: {
        textAlign: 'center',
        fontSize: 20,
        marginTop: -85,
        fontWeight: '500',
        color: 'white',
    }
})

export default Item