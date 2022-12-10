import React from 'react'
import { View, Modal, ActivityIndicator,StyleSheet } from 'react-native'

const Loading = ({ visible }) => {
    return (
        <Modal transparent visible={visible}>
            <View style={{flex:1, alignItems: 'center', justifyContent: 'center'}}>
                <ActivityIndicator 
                    size="large"
                    color={'blue'}
                    animating={true}
                    style={styles.background}
                    />
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    background: {
        backgroundColor: 'white',
        position: 'absolute',
        height: '100%',
        width: '100%'
    },
  })

export default Loading