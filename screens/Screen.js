import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView, Image, ScrollView } from 'react-native'
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
                            <Image source={require('../assets/logo_icone.png')} style={styles.logo} />
                            <FontAwesome name="bars" size={24} color="161924"/>
                        </TouchableOpacity>
                    </SafeAreaView>
                </View>

                {this.props.children}

                <View style={styles.footer}>
                    <Text style={{fontSize: 18}}>Contato</Text>
                    <Text style={{fontSize: 15}}>contato@escolaativa.com.br</Text>
                    <Text style={{fontSize: 15}}>(xx) xxxx-xxxx</Text>
                    <Text style={{fontSize: 14, fontWeight: "bold"}}>&copy; Todos os direitos reservados</Text>
                </View>
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
        marginTop: 3,
        paddingTop: 1,
        width: 100,
        height: 20,
    },
    footer: {
        flex: 1,
        marginTop: 10,
        minHeight: 150,
        backgroundColor: '#f5f5f0', 
        alignItems: "center", 
        justifyContent: "space-around"
    }
})