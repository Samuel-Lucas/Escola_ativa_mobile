import React from 'react'
import { StyleSheet, View, TouchableOpacity, SafeAreaView, Image, ScrollView } from 'react-native'
import {FontAwesome} from '@expo/vector-icons'

export default class Screen extends React.Component {
    render() {

        return(
            <ScrollView>
                <View style={styles.container}>
                    <SafeAreaView style={{flex: 1, backgroundColor: '#f5f5f0'}}>
                        <TouchableOpacity 
                        style={{flexDirection: "row", justifyContent: "space-between", margin: 16}}
                        onPress={this.props.navigation.openDrawer}>
                            <Image source={require('../assets/logo.jpg')} style={styles.logo} />
                            <FontAwesome name="bars" size={24} color="161924"/>
                        </TouchableOpacity>
                    </SafeAreaView>
                </View>

                {this.props.children}
                
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    text: {
        color: "#161924",
        fontSize: 20,
        fontWeight: "500",
    },
    logo: {
        width: 100,
        height: 20,
    }
})