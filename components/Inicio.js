import React from 'react'
import { StyleSheet, Text, View, ImageBackground } from 'react-native'
import { Button, Card, Title, Paragraph } from 'react-native-paper'
import BootstrapStyleSheet from 'react-native-bootstrap-styles'


const bootstrapStyleSheet = new BootstrapStyleSheet()
const { s } = bootstrapStyleSheet

export default function Inicio({navigation}) {

    return (
        <>
            <View style={styles.container}>
                
                <ImageBackground source={require('../assets/img_principal.jpg')} style={styles.image}>
                    <Text style={styles.text}>Por que aplicar metodologias ativas ?</Text>
                </ImageBackground>
            </View>

            <View style={{flex: 1, alignItems: "center"}}>
                <Text style={{fontSize: 18, fontWeight: "bold", marginTop: 10}}>Metodologias Ativas</Text>

                <Card style={styles.card}>
                    <Card.Cover source={require('../assets/img1.jpg')} />
                    <Card.Content>
                        <Title>Matemática</Title>
                        <Paragraph style={styles.content}>Confira metodologias ativas para matemática</Paragraph>
                    </Card.Content>
                    <Card.Actions>
                    <Button 
                    style={s.btnSuccess}
                    onPress={() => navigation.navigate('sectionScreen')}>Conferir</Button>
                    </Card.Actions>
                </Card>

                <Card style={styles.card}>
                    <Card.Cover source={require('../assets/img2.jpg')} />
                    <Card.Content>
                        <Title>Linguagens</Title>
                        <Paragraph style={styles.content}>Confira metodologias ativas para linguagens</Paragraph>
                    </Card.Content>
                    <Card.Actions>
                    <Button style={s.btnSuccess}>Conferir</Button>
                    </Card.Actions>
                </Card>

                <Card style={styles.card}>
                    <Card.Cover source={require('../assets/img3.jpg')} />
                    <Card.Content>
                        <Title>Ciências Humanas</Title>
                        <Paragraph style={styles.content}>Confira metodologias ativas para ciências humanas</Paragraph>
                    </Card.Content>
                    <Card.Actions>
                    <Button style={s.btnSuccess}>Conferir</Button>
                    </Card.Actions>
                </Card>

                <Text style={{fontSize: 18, fontWeight: "bold", textAlign: "center", marginTop: 10}}>
                    Comunidade escola ativa: Juntos somos mais Fortes !
                </Text>

                <Card style={styles.card}>
                    <Card.Cover source={require('../assets/ensinoFundamental.png')} />
                    <Card.Content>
                        <Paragraph style={styles.content}>Confira metodologias ativas para o ensino fundamental</Paragraph>
                    </Card.Content>
                </Card>

                <Card style={styles.card}>
                    <Card.Cover source={require('../assets/ensinoMedio.png')} />
                    <Card.Content>
                        <Paragraph style={styles.content}>Confira metodologias ativas para o ensino médio</Paragraph>
                    </Card.Content>
                </Card>

                <Card style={styles.card}>
                    <Card.Cover source={require('../assets/ensinoEAD.png')} />
                    <Card.Content>
                        <Paragraph style={styles.content}>Confira metodologias ativas para o ensino a distância</Paragraph>
                    </Card.Content>
                </Card>

                <Card style={styles.card}>
                    <Card.Cover source={require('../assets/boasPraticas.png')} />
                    <Card.Content>
                        <Paragraph style={styles.content}>Confira Boas práticas</Paragraph>
                    </Card.Content>
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
    }
  })