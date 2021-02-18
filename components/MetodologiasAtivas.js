import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { Paragraph } from 'react-native-paper'

export default function MetodologiasAtivas() {

    const imagem = require('../assets/quem_somos.jpeg')
    const piramide_aprendizado = require('../assets/piramide_aprendizado.png')

    return (
        <View>
            <Image source={imagem} style={styles.image} />
            <Text style={styles.title}>Por que aplicar metodologias ativas ?</Text>

            <Paragraph style={styles.paragraph}>  <Text style={styles.emphasis}>A metodologia ativa</Text> de 
            aprendizagem é uma ruptura brusca com as concepções de ensino mais comumente encontradas nas escolas.
             Nela, o lugar do aluno não é na plateia, assistindo passivamente à própria educação acontecer.
            Aqui a participação do estudante é protagonista, e o aprendizado não acontece sem ela. O aluno não fica
            sentado ouvindo e anotando, ele debate, critica, faz. Ele ajuda a construir o conhecimento junto com o
            professor e com os colegas.</Paragraph>

            <Paragraph style={styles.paragraph}>  A forma como o aprendizado é processado pelo cérebro se altera completamente dessa maneira.
            Conforme a pirâmide do aprendizado de Willian Glasser, aprendemos 80% a mais quando fazemos,
            e 95% quando ensinamos. Já quando temos papel passivo, o percentual é bem menor: 10% quando lemos,
            20% quando escutamos, 30% quando observamos e 50% quando vemos e ouvimos ao mesmo tempo.</Paragraph>

            <Image source={piramide_aprendizado} style={styles.image2} />

            <Paragraph style={styles.paragraph2}>  Aproveite nossa comunidade utilizando e se inspirando e compartilhando
            ferramentas gratuitas, materiais e conteúdos de fácil utilização, projetos com materiais domésticos e reciclados
            para tornar a sua aula mais efetiva em retenção de conteúdo, mais colaborativa e alavancar os índices
            de aprendizagem.</Paragraph>

            <Paragraph style={styles.paragraph2}>  Escolas públicas necessitam de métodos que gerem valor a um custo
            reduzido ou nulo, com aulas dentro da realidade dos nossos alunos considerando suas particularidades,
            demandas e atenção plena.</Paragraph>

            <Text style={styles.finalTitle}>Juntos podemos fazer essa transformação !</Text>
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
    image2: {
        width: "85%",
        height: 316,
        alignSelf: "center",
        marginTop: 15
    },
    title: {
        fontSize: 18,
        fontWeight: "bold",
        textAlign: "center",
        marginTop: 20
    },
    contentTitle: {
        fontSize: 16,
        fontWeight: "bold",
        marginLeft: 12
    },
    paragraph: {
        fontSize: 15,
        padding: 12,
        marginLeft: 10
    },
    paragraph2: {
        fontSize: 14,
        padding: 12,
        marginLeft: 10,
        fontWeight: "bold"
    },
    emphasis: {
        fontWeight: "bold"
    },
    finalTitle: {
        fontSize: 15,
        fontWeight: "bold",
        textAlign: "center",
        marginBottom: 5
    }
})