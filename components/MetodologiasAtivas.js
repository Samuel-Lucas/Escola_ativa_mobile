import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { Paragraph } from 'react-native-paper'

export default function MetodologiasAtivas() {

    const imagem = require('../assets/atividade.jpg')
    const piramide_aprendizado = require('../assets/piramide_aprendizado.png')

    return (
        <View>
            <Image source={imagem} style={styles.image} />
            <Text style={styles.title}>metodologias ativas</Text>

            <Paragraph style={styles.paragraph}>A Metodologia Ativa de Aprendizagem pode englobar diferentes
            práticas dentro e fora da sala de aula. Pois possui como principal característica a inserção do aluno
            como protagonista da própria aprendizagem, permitindo-os reconhecer os recursos que melhor funcionam
            para si, enxergar o professor como um companheiro de sua jornada e não uma figura detentora e repassador de conhecimento.
            Para auxiliar os alunos em sua descoberta dos recursos que melhor funcionam para si. Os professores
            precisam propor uma atividade que tenha um objetivo bem definido, aliado a uma proposta metodológica 
            adequada. Pensando nisso, iremos descrever alguns dos tipos de Metodologia Ativa de Apendizagem:</Paragraph>

            <Text style={styles.title}>{'\u2B24'} Aprendizagem baseada em projetos (ABP)</Text>

            <Paragraph style={styles.paragraph}>A aprendizagem baseada em projetos (ABP), (do inglês, project
            based learning (PBL)) – auxilia os alunos na construção de soluções colaborativas de desafios, a fim de
            desenvolver a criação e exploração de soluções, assim como um senso crítico e investigativo.
            Na ABP, os alunos devem buscar explorar as possíveis soluções por si mesmo, pois o professor não deve
            revelar todo o conteudo de ensino, para que os alunos possam alcançar os propósitos de aprendizado 
            propostos.</Paragraph>

            <View style={{width: "80%", alignSelf: "center"}}>
                <Paragraph style={{fontSize: 15}}>1.  O professor apresenta um problema</Paragraph>
                <Paragraph style={{fontSize: 15}}>2.  Os alunos investigam as causas</Paragraph>
                <Paragraph style={{fontSize: 15}}>3.  Com base em suas vivências, os alunos elaboram um plano</Paragraph>
                <Paragraph style={{fontSize: 15}}>4.  Apresentam o plano</Paragraph>
                <Paragraph style={{fontSize: 15}}>5.  O professor fornece feedbacks dos erros e acertos durante o processo</Paragraph>
            </View>

            <Text style={styles.title}>{'\u2B24'} Aprendizagem baseada em problemas (ABP)</Text>

            <Paragraph style={styles.paragraph}>  Na Aprendizagem baseada em problemas, os alunos devem ser capazes de construir um aprendizado
            conceitual, na qual os alunos se reúne em grupos e debatem sobre um problema para encontrar soluções.
            A diferença entre a Aprendizagem Baseada Em Projetos é que a ABP exige que os alunos coloquem a mão na
            massa, já na aprendizagem baseada em problemas, os alunos focam na resolução teórica dos casos.</Paragraph>

            <Text style={styles.title}>{'\u2B24'} Gamificação</Text>

            <Paragraph style={styles.paragraph}>  A gamificação é a utilização de mecânicas e dinâmicas de jogos para
            engajar pessoas, resolver problemas de modo criativo, melhorar o aprendizado e comportamentos em
            ambientes fora do contexto de jogos.
            Cabe ao professor gamificar aspectos normais da sala de aula, de forma, dinâmica, atrativa e 
            nteligente para conquistar um maior engajamento dos alunos, mantendo o aprofundamento didático.</Paragraph>

            <Text style={styles.title}>{'\u2B24'} Sala de aula invertida</Text>

            <Paragraph style={styles.paragraph}>  Se no modelo tradicional o professor em uma aula expositiva 
            explica a matéria no quadro para que depois os alunos façam, sozinhos, a lição de casa.
            A sala de aula invertida (do inglês, flipped classroom) significa a inversão desta lógica:
            Primeiro o aluno faz a internalização dos conceitos essenciais antes de aula e depois, junto à turma,
            discute os conhecimentos adquiridos e tira possíveis dúvidas de conteúdo com a ajuda e orientação do 
            professor.</Paragraph>

            <View style={{ alignSelf: "center", width: "80%", marginTop: 15, marginBottom: 15}}>
                <Text style={{fontSize: 15, paddingBottom: 10}}>1. Baseado no tema proposto os alunos fazem as pesquisas</Text>
                <Image source={require('../assets/pesquisa_alunos.png')} style={styles.alunos} />
            </View>

            <View style={{ alignSelf: "center", width: "80%", marginTop: 15, marginBottom: 15}}>
                <Text style={{fontSize: 15, paddingBottom: 10}}>2. Discutir em grupo sobre as informações encontradas</Text>
                <Image source={require('../assets/discursao_grupo.png')} style={styles.alunos} />
            </View>

            <View style={{ alignSelf: "center", width: "80%", marginTop: 15, marginBottom: 15}}>
                <Text style={{fontSize: 15, paddingBottom: 10}}>3. Desenvolvem apresentações sobre as discussões</Text>
                <Image source={require('../assets/apresentacao.png')} style={styles.alunos} />
            </View>

            <Text style={styles.title}>{'\u2B24'} Aprendizagem Entre Pares</Text>

            <Paragraph style={styles.paragraph}>A aprendizagem entre pares e times (do inglês, Peer Instruction (PI) ou team based learning (TBL)),
            se baseia no compartilhamento de ideias, por meio da formação de duplas ou equipes para resolver um projeto ou 
            estudo de caso. Na qual, tem se mostrado extremamente benéfica, pois com a ajuda mútua dos alunos é possível
            aprender e ensinar ao mesmo tempo, tornando mais simples a compreensão dos alunos, além de, promover a formação 
            do pensamento crítico e a capacidade de respeitarem opiniões divergentes.</Paragraph>

            <View style={{width: "85%", alignSelf: "center", justifyContent: "flex-start"}}>
                <Paragraph style={{fontSize: 14}}>Fonte:guiadocente.com.br/sala-de-aula-invertida-na-pratica</Paragraph>
                <Paragraph style={{fontSize: 14}}>Fonte:desafiosdaeducacao.grupoa.com.br/metodologias-ativas</Paragraph>
                <Paragraph style={{fontSize: 14}}>Fonte:blog.lyceum.com.br/metodologias-ativas-de-aprendizagem</Paragraph>
            </View>
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
    },
    alunos: {
        width: "100%",
        height: 200,
    }
})