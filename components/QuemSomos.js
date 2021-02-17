import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { Paragraph } from 'react-native-paper'

export default function QuemSomos() {

    const imagem = require('../assets/quem_somos.jpeg')
    const imagem_dados = require('../assets/dados_aprendizagem.png')

    return(
        <View>
            <Image source={imagem} style={styles.image} />
            <Text style={styles.title}>Quem somos</Text>

            <Paragraph style={styles.paragraph}>Comunidade de educadores que compartilham metodologias ativas e boas práticas
            pedagógicas voltadas para escolas.</Paragraph>

            <Text style={styles.contentTitle}>Nossa Missão</Text>

            <Paragraph style={styles.paragraph}>Aumentar o alcance das metodologias ativas a serem aplicadas dentro e fora da sala de aula,
            utilizando matéria prima de fácil acesso e materiais reciclados, aliados a conteúdo aplicado dentro da
            BNCC. </Paragraph>

            <Text style={styles.contentTitle}>Vantagens</Text>

            <Paragraph style={styles.paragraph}>- O(A) professor(a) é nosso protagonista;</Paragraph>

            <Paragraph style={styles.paragraph}>- Compartilhando ensinamentos e boas páticas em metodologias
            ativas podemos aumentar os níveis de ensino e retenção do aprendizado dos nossos alunos.</Paragraph>

            <Paragraph style={styles.paragraph}>- Com o trabalho de educaçâo inclusiva, podemos minimizar as evasões escolares, aumentar o
            engajamento e a retenção do aprendizado ao longo da vida escolar.</Paragraph>

            <Paragraph style={styles.paragraph}>- O IDEB 2019 mostra com dados a necessidade de adotar medidas para avanços na aprendizagem ao
            longo da vida escolar, e as metodologias ativas podem gerar avanços na construção do conhecimento e retenção
            de conteúdos.</Paragraph>

            <Image source={imagem_dados} style={styles.image} />
        </View>
    )
}

const styles = StyleSheet.create({
    image: {
        width: "85%",
        height: 120,
        alignSelf: "center",
        marginTop: 30
    },
    title: {
        fontSize: 18,
        fontWeight: "bold",
        textDecorationLine: "underline",
        textAlign: "center",
        marginTop: 20
    },
    contentTitle: {
        fontSize: 16,
        fontWeight: "bold",
        marginLeft: 12
    },
    paragraph: {
        fontSize: 14,
        padding: 12,
        marginLeft: 10
    }
})