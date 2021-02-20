import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { Card, Title, Paragraph } from 'react-native-paper'

export default function EnsinoFundamental() {

    return(
        <View>
            <Text style={styles.disciplina}>Matemática - 5º ano</Text>

            <View style={{width: "80%", alignSelf: "center", marginTop: 10}}>
                <Paragraph style={{textAlign: "center", fontSize: 15}}>Geometria - Figuras geométricas planas: reconhecimento do formato das faces de figuras
                geométricas espaciais{"\n"}
                (EF01MA14) Identificar e nomear figuras planas (círculo, quadrado, retângulo e triângulo) em desenhos apresentados em diferentes disposições ou em contornos de
                 faces de sólidos geométricos.</Paragraph>
            </View>

            <Card style={styles.card}>
                <Card.Cover source={require('../assets/torre_matematica.jpg')} style={styles.image} />
                    <Card.Content>
                        <Title style={styles.title}>Torre de espaguete</Title>
                        <Paragraph style={styles.paragraph}>Colaboração: Rosalice Parmegiani</Paragraph>
                    </Card.Content>
            </Card>

            <View style={styles.conteudo}>
                <Text style={styles.metodologia}>Mão na massa</Text>

                <View style={{borderBottomColor: 'gray', borderBottomWidth: 1}} />

                <Text style={styles.title}>Objetivos:</Text>

                <Paragraph style={styles.paragraph}>
                    - Explorar a capacidade de extrair solução a partir de problemas concretos;{"\n"}
                    - Despertar a construção do conhecimento através do trabalho em equipe;{"\n"}
                    - Explorar experimentos por tentativa e erro;{"\n"}
                    - Realizado em grupo.
                </Paragraph>

                <Text style={styles.title}>Desenvolvimento:</Text>

                <Paragraph style={styles.paragraph}>
                    Vocês terão que construir uma torre segundo os seguintes critérios:{"\n"}
                    - Com apenas papel e lápis, os alunos terão 10 minutos para pensar em como vão construir a sua torre;{"\n"}
                    - Cada grupo deverá escrever como pretende realizar a construção da torre e utilizar esboços se quiser;{"\n"}
                    - Cada grupo recebe 20 macarrões spaguetti, a fita durex, 1m de barbante e tesoura, com isso, os alunos terão 40 minutos para construir a torre;{"\n"}
                    - A torre tem que permanecer em pé durante 1 minuto.
                </Paragraph>

                <Text style={styles.title}>Recurso:</Text>

                <Paragraph style={styles.paragraph}>Papel, lápis, macarrões spaguetti, fita durex, barbante e tesoura.</Paragraph>

                <Text style={{marginTop: 10}}>
                    <Text style={{fontWeight: "bold", fontSize: 16}}>Avaliação:</Text> - Não Formal
                </Text>

                <Text style={styles.title}>Link da Aplicação (Referência):</Text>

                <Paragraph style={styles.paragraph}>
                    https://www.ensinandomatematica.com/matematica-mao-na-massa/#:~:text=A%20ideia%20de%20propor%20atividades,solu%C3%A7%C3%B5es%20para%20problemas%20de%20engenharia.
                </Paragraph>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    image: {
      flex: 1,
      resizeMode: "cover",
      justifyContent: "center",
      height: 600
    },
    card: {
        width: "80%",
        marginTop: 10,
        marginBottom: 10,
        alignSelf: "center"
    },
    title: {
        fontSize: 16,
        fontWeight: "bold",
        paddingTop: 10
    },
    paragraph: {
        fontSize: 16,
        paddingTop: 5
    },
    metodologia: {
        fontSize: 16,
        fontWeight: "bold",
        color: "orange",
        marginBottom: 10,
        marginTop: 10
    },
    conteudo: {
        width: "80%",
        alignSelf: "center"
    },
    disciplina: {
        fontSize: 17,
        fontWeight: "bold",
        color: "gray",
        marginLeft: 30,
        marginTop: 25
    }
  })