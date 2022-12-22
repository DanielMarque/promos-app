import React from 'react'
import {View, TextInput, StyleSheet} from 'react-native'

const Settings = () => {
    return(
        <View style={styles.container}>
            <TextInput placeholder='Config' />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        height: 50,
        backgroundColor: 'black',
    },
})

export default Settings