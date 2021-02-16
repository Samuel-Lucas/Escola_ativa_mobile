import React from 'react'
import { StyleSheet, Text, View, ScrollView, ImageBackground, Image} from 'react-native'
import {DrawerNavigatorItems} from 'react-navigation-drawer'
import {Ionicons} from '@expo/vector-icons'

export default function Sidebar (props) {

    return (
        <ScrollView>
            <View>
                <Image source={require('../assets/perfil.png')} style={styles.profile} />
                <Text style={styles.text}>Samuel Lucas</Text>
            </View>

            <View style={styles.container}>
                <DrawerNavigatorItems {...props} />
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    profile: {
        width: 80,
        height: 80,
        borderRadius: 40,
        borderWidth: "gray",
    },
    text: {
        color: "#333",
        fontSize: 20,
        fontWeight: "800",
        marginVertical: 8
    }
})