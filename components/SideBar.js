import React from 'react'
import { StyleSheet, Text, View, ScrollView, ImageBackground, Image} from 'react-native'
import {DrawerNavigatorItems} from 'react-navigation-drawer'
import {Ionicons} from '@expo/vector-icons'

export default function Sidebar (props) {

    return (
        <ScrollView>
            <ImageBackground source={require("../assets/bg_profile.jpg")} style={styles.back}>
                <Image source={require('../assets/perfil.png')} style={styles.profile} />
                <Text style={styles.name}>Samuel Lucas</Text>

                <View stlye={{flexDirection: "row"}}>
                    <Text style={styles.perfil}>Coordenador pedagógico</Text>

                </View>
            </ImageBackground>

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
    back: {
        width: undefined,
        padding: 16,
        paddingTop: 40
    },
    profile: {
        width: 80,
        height: 80,
        borderRadius: 40,
        borderWidth: 3,
        borderColor: "gray"
    },
    name: {
        color: "#fff",
        fontSize: 20,
        fontWeight: "700",
        marginVertical: 8
    },
    perfil: {
        color: "rgba(255, 255, 255, 0.8)",
        fontSize: 14,
        marginRight: 4
    }
})