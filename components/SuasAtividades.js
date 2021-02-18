import React from 'react'
import { StyleSheet, TextInput, View, Text, Button } from 'react-native'
import { Card, Title, Paragraph  } from 'react-native-paper'

export default function SuasAtividades() {

    return (
        <View style={{minHeight: 480}}>
            <Text style={styles.title}>Suas Atividades</Text>

            <Card style={{width: "85%", alignSelf: "center"}}>
                <Card.Actions style={{flexDirection: "row-reverse", backgroundColor: "#f5f5f0"}}>
                    <View style={{flexDirection: "row-reverse", width: "50%", justifyContent: "space-around"}}>
                        <Button title="Excluir" color="#ff1a1a"/>
                        <Button title="Editar" color="#4da6ff" />
                    </View>
                </Card.Actions>

                <View>
                    <View style={{alignItems: "center", width: "100%"}}>
                        <View style={{backgroundColor: "#00b300", width: "100%"}}>
                            <Text style={styles.label}>Disciplina: Ciências da natureza</Text>
                        </View>

                        <View style={{backgroundColor: "#00cc00", width: "100%"}}>
                            <Text style={styles.label}>Metodologia: Sala de aula invertida</Text>
                        </View>
                    </View>

                    <Title>  Lorem Ipsum</Title>
                    <Paragraph>  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sagittis,
                        quam eget gravida ornare, tortor purus pharetra nunc, nec sodales erat mi sit amet justo.
                        Duis eu felis pretium, faucibus magna quis, molestie odio. Morbi lectus sem, rutrum ultricies nisl in,
                        tincidunt lacinia est.</Paragraph>
                    <TextInput
                    style={{borderWidth: 1, marginTop: 5}}
                    value = "Ex: www.brasilescola.com.br"
                    editable = {false}
                    />
                </View>
            </Card>
        </View>
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 16,
        fontWeight: "bold",
        textDecorationLine: "underline",
        textAlign: "center",
        marginTop: 30,
        marginBottom: 20
    },
    label: {
        fontSize: 16,
        fontWeight: "bold",
        marginTop: 10,
        marginBottom: 10,
        color: "#fff",
        textAlign: "center"
    }
})