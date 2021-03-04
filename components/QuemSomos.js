import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { Paragraph } from 'react-native-paper'

export default function QuemSomos() {

    const imagem = require('../assets/equipe.jpg')
    const imagem_dados = require('../assets/quemsomos.jpg')

    return(
        <View>
            <Image source={imagem} style={styles.image} />
            <Text style={styles.title}>Quem somos</Text>

            <Paragraph style={styles.paragraph}>  Somos uma equipe de estudante da Recode Pro que acreditamos na
            equidade de aprendizado em relação às escolas públicas, privadas ou filantrópicas. E como base nessa
            crença, utilizamos nossas habilidades e conhecimentos adquiridos no curso de desenvolvimento Full Stack
            para contribuir através desta plataforma, com ferramentas facilitadoras de aprendizagem, por meio de
            materiais reciclados ou de baixo custo para auxiliar os professores que são o elo principal para uma
            aprendizagem de qualidade.</Paragraph>

            <Paragraph style={styles.frase}>"Ensinar não é transferir conhecimento,</Paragraph>
            <Paragraph style={styles.frase}> mas criar as possibilidades para sua própria</Paragraph>
            <Paragraph style={styles.frase}> produção ou sua construção"</Paragraph>
            <Paragraph style={styles.frase}> Paulo Freire</Paragraph>

            <Image source={imagem_dados} style={styles.image} />

            <Text style={styles.equipeParceiros}>Equipe</Text>

            <View style={styles.containerEquipe}>
                <Image source={require('../assets/sonia.png')} style={styles.profile} />
                <Text>Dev Fullstack - Gerente de Projetos</Text>
                <Text style={{fontWeight: "bold", fontSize: 15}}>Sonia Borges</Text>
            </View>

            <View style={styles.containerEquipe}>
                <Image source={require('../assets/william.png')} style={styles.profile} />
                <Text>Dev Fullstack - Coord. de Projetos</Text>
                <Text style={{fontWeight: "bold", fontSize: 15}}>William Malaquias</Text>
            </View>

            <View style={styles.containerEquipe}>
                <Image source={require('../assets/mario.png')} style={styles.profile} />
                <Text>Dev Fullstack - Designer</Text>
                <Text style={{fontWeight: "bold", fontSize: 15}}>Mário Menezes</Text>
            </View>

            <View style={styles.containerEquipe}>
                <Image source={require('../assets/ingrid.png')} style={styles.profile} />
                <Text>Dev Fullstack - Frontend/Backend</Text>
                <Text style={{fontWeight: "bold", fontSize: 15}}>Ingrid Xavier</Text>
            </View>

            <View style={styles.containerEquipe}>
                <Image source={require('../assets/samuel.png')} style={styles.profile} />
                <Text>Dev Fullstack - Frontend/Backend</Text>
                <Text style={{fontWeight: "bold", fontSize: 15}}>Samuel Lucas</Text>
            </View>

            <Text style={styles.equipeParceiros}>Parceiros</Text>

            <Image source={require('../assets/logo_cae.png')} style={styles.imgParceiros} />
            <Text style={{fontWeight: "bold", fontSize: 15, alignSelf: "center", padding: 15}}>Startup de tecnologia e educação</Text>

            <Image source={require('../assets/logos_sipeb.png')} style={styles.imgParceiros} />
            <Text style={{fontWeight: "bold", fontSize: 15, alignSelf: "center", padding: 15}}>Escola Filantrópica Tabor Sipeb</Text>            
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
    frase: {
        textAlign: "center",
        fontSize: 14,
    },
    equipeParceiros: {
        textAlign: "center",
        fontWeight: "bolder",
        marginBottom: 25,
        marginTop: 25,
        fontSize: 16,
    },
    profile: {
        width: 90,
        height: 90,
        borderRadius: 40,
    },
    containerEquipe: {
        width: "80%",
        alignSelf: "center",
        alignItems: "center",
        marginTop: 15,
        marginBottom: 15,
    },
    imgParceiros: {
        width: 110,
        height: 70,
        alignSelf: "center",
    }
})