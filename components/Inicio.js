import React from 'react'
import { StyleSheet, Text, View, ImageBackground } from 'react-native'
import { Button, Card, Title, Paragraph } from 'react-native-paper'
import BootstrapStyleSheet from 'react-native-bootstrap-styles'

const bootstrapStyleSheet = new BootstrapStyleSheet()
const { s } = bootstrapStyleSheet

export default function Inicio() {

    return (
        <>
            <View style={styles.container}>
                
                <ImageBackground source={require('../assets/img_principal.jpg')} style={styles.image}>
                    <Text style={styles.text}>Por que aplicar metodologias ativas ?</Text>
                </ImageBackground>
            </View>

            <View style={{flex: 1, alignItems: "center"}}>
                <Text style={{fontSize: 18, marginTop: 10}}>Metodologias Ativas</Text>

                <Card style={styles.card}>
                    <Card.Cover source={require('../assets/img1.jpg')} />
                    <Card.Content>
                        <Title>Matemática</Title>
                        <Paragraph>Confira metodologias ativas para matemática</Paragraph>
                    </Card.Content>
                    <Card.Actions>
                    <Button style={s.btnSuccess}>Conferir</Button>
                    </Card.Actions>
                </Card>

                <Card style={styles.card}>
                    <Card.Cover source={require('../assets/img2.jpg')} />
                    <Card.Content>
                        <Title>Linguagens</Title>
                        <Paragraph>Confira metodologias ativas para linguagens</Paragraph>
                    </Card.Content>
                    <Card.Actions>
                    <Button style={s.btnSuccess}>Conferir</Button>
                    </Card.Actions>
                </Card>

                <Card style={styles.card}>
                    <Card.Cover source={require('../assets/img3.jpg')} />
                    <Card.Content>
                        <Title>Ciências Humanas</Title>
                        <Paragraph>Confira metodologias ativas para ciências humanas</Paragraph>
                    </Card.Content>
                    <Card.Actions>
                    <Button style={s.btnSuccess}>Conferir</Button>
                    </Card.Actions>
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
    white: {
        color: "#fff"
    }
  });