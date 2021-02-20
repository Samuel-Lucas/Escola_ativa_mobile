import React from 'react'
import { StyleSheet, Text, View, ImageBackground, Button, TouchableHighlight, TouchableOpacity} from 'react-native'
import { Card, Title, Paragraph } from 'react-native-paper'

export default function Inicio({navigation}) {

    return (
        <>
            <TouchableHighlight style={styles.container} onPress={() => navigation.navigate('metodologiasScreen')}>
                <ImageBackground 
                source={require('../assets/img_principal.jpg')} style={styles.image}>
                    <Text style={styles.text}>Por que aplicar metodologias ativas ?</Text>
                </ImageBackground>
            </TouchableHighlight>

            <View style={{flex: 1, alignItems: "center"}}>
                <Text style={{fontSize: 18, fontWeight: "bold", marginTop: 20, marginBottom: 15}}>
                    Metodologias Ativas
                </Text>

                <Card style={styles.card}>
                    <Card.Cover source={require('../assets/img1.jpg')} />
                    <Card.Content>
                        <Title>Matemática</Title>
                        <Paragraph style={styles.content}>Confira metodologias ativas para matemática</Paragraph>
                    </Card.Content>
                    <Card.Actions>
                    <Button 
                    title="Conferir"
                    color="#00cc00"
                    onPress={() => navigation.navigate('sectionScreen')} />
                    </Card.Actions>
                </Card>

                <Card style={styles.card}>
                    <Card.Cover source={require('../assets/img2.jpg')} />
                    <Card.Content>
                        <Title>Linguagens</Title>
                        <Paragraph style={styles.content}>Confira metodologias ativas para linguagens</Paragraph>
                    </Card.Content>
                    <Card.Actions>
                    <Button 
                    title="Conferir"
                    color="#00cc00"
                    onPress={() => navigation.navigate('section2Screen')} />
                    </Card.Actions>
                </Card>

                <Card style={styles.card}>
                    <Card.Cover source={require('../assets/img3.jpg')} />
                    <Card.Content>
                        <Title>Ciências Humanas</Title>
                        <Paragraph style={styles.content}>Confira metodologias ativas para ciências humanas</Paragraph>
                    </Card.Content>
                    <Card.Actions>
                    <Button 
                    title="Conferir"
                    color="#00cc00"
                    onPress={() => navigation.navigate('section3Screen')} />
                    </Card.Actions>
                </Card>

                <Card style={styles.card}>
                    <Card.Cover source={require('../assets/img4.jpg')} />
                    <Card.Content>
                        <Title>Ciências da natureza</Title>
                        <Paragraph style={styles.content}>Confira metodologias ativas para ciências da natureza</Paragraph>
                    </Card.Content>
                    <Card.Actions>
                    <Button 
                    title="Conferir"
                    color="#00cc00"
                    onPress={() => navigation.navigate('section4Screen')} />
                    </Card.Actions>
                </Card>

                <Text style={{fontSize: 18, fontWeight: "bold", textAlign: "center", marginTop: 25, marginBottom: 15}}>
                    Grau de Escolaridade
                </Text>

                <TouchableOpacity style={{paddingLeft: 15, width: "80%"}} onPress={() => navigation.navigate('ensinoScreen')}>
                    <View>
                        <View>
                            <Title style={styles.title}>Ensino fundamental</Title>
                        </View>
                        <Card.Cover source={require('../assets/ensinoFundamental.png')} />
                    </View>
                </TouchableOpacity>

                <Card style={styles.card}>
                    <Card.Content>
                        <Title style={styles.title}>Ensino médio</Title>
                    </Card.Content>
                    <Card.Cover source={require('../assets/ensinoMedio.png')} />
                </Card>

                <Card style={styles.card}>
                    <Card.Content>
                        <Title style={styles.title}>EJA</Title>
                    </Card.Content>
                    <Card.Cover source={require('../assets/ensinoEAD.png')} />
                </Card>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: "column",
      paddingTop: 60,
      height: 250,
    },
    image: {
      flex: 1,
      resizeMode: "cover",
      justifyContent: "center"
    },
    text: {
      color: "white",
      fontSize: 20,
      fontWeight: "bold",
      textAlign: "center",
    },
    card: {
        width: "80%",
        marginTop: 10,
        marginBottom: 10
    },
    content: {
        fontSize: 16
    },
    title: {
        fontSize: 16,
        fontWeight: "bold"
    }
  })