import React from 'react'
import { Text, View, StyleSheet, TextInput} from 'react-native'
import { Card, Title, Paragraph } from 'react-native-paper'

export default function Secao3() {

    return(
        <View style={{minHeight: 480}}>
            <Text style={styles.title}>Metodologias para Ciências humanas</Text>

            <Card style={styles.card}>
                <Card.Actions style={{flexDirection: "row-reverse", backgroundColor: "#f5f5f0"}}>
                    <Text>
                        Publicado por: <Text style={styles.author}>Samuel Lucas</Text>
                    </Text>
                </Card.Actions>

                <View>
                    <View style={{alignItems: "center", width: "100%"}}>
                        <View style={{backgroundColor: "#00b300", width: "100%"}}>
                            <Text style={styles.label}>Disciplina: Ciências humanas</Text>
                        </View>

                        <View style={{backgroundColor: "#00cc00", width: "100%"}}>
                            <Text style={styles.label}>Metodologia: Mão na massa</Text>
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

            <Card style={styles.card}>
                <Card.Actions style={{flexDirection: "row-reverse", backgroundColor: "#f5f5f0"}}>
                    <Text>
                        Publicado por: <Text style={styles.author}>Sonia Borges</Text>
                    </Text>
                </Card.Actions>

                <View>
                    <View style={{alignItems: "center", width: "100%"}}>
                        <View style={{backgroundColor: "#00b300", width: "100%"}}>
                            <Text style={styles.label}>Disciplina: Ciências humanas</Text>
                        </View>

                        <View style={{backgroundColor: "#00cc00", width: "100%"}}>
                            <Text style={styles.label}>Metodologia: Tecnologias criativas</Text>
                        </View>
                    </View>

                    <Title>  Lorem Ipsum</Title>
                    <Paragraph>  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sagittis,
                        quam eget gravida ornare, tortor purus pharetra nunc, nec sodales erat mi sit amet justo.
                        Duis eu felis pretium, faucibus magna quis, molestie odio. Morbi lectus sem, rutrum ultricies nisl in,
                        tincidunt lacinia est.</Paragraph>
                    <TextInput
                    style={{borderWidth: 1, marginTop: 5}}
                    value = "Ex: www.todamateria.com.br"
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
    },
    author: {
        color: "#3366ff",
    },
    card: {
        width: "85%",
        alignSelf: "center",
        marginBottom: 20,
    }
})