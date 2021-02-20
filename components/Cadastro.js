import React, {useState} from 'react'
import { StyleSheet, TextInput, View, Picker, Text, Button } from 'react-native'
import { RadioButton } from 'react-native-paper'

export default function Cadastro() {

    const [selectedValue, setSelectedValue] = useState("Escolha uma disciplina")
    const [value, setValue] = useState('first')

    return (
        <View style={{margin: 20, paddingTop: 20}}>

            <Text style={styles.title}>Cadastrar Atividade</Text>

            <Text style={styles.label}>Disciplina: </Text>

            <Picker
                selectedValue={selectedValue}
                style={{ height: 30, width: 205, margin: 18 }}
                onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
            >
                <Picker.Item label="Selecione uma disciplina" value="" />
                <Picker.Item label="Matemática" value="matematica" />
                <Picker.Item label="Linguagens" value="linguagens" />
                <Picker.Item label="Ciências Humanas" value="ch" />
                <Picker.Item label="Ciências da Natureza" value="cn" />
            </Picker>

            <Text style={styles.label}>Metodologia ativa: </Text>

            <RadioButton.Group onValueChange={newValue => setValue(newValue)} value={value}>

                <View style={{flexDirection: "row"}}>
                    <RadioButton value="first" />
                    <Text style={{marginTop: 10}}>Mão na massa</Text>
                </View>

                <View style={{flexDirection: "row"}}>
                    <RadioButton value="second" />
                    <Text style={{marginTop: 10}}>Aprendizagem em dupla</Text>
                </View>

                <View style={{flexDirection: "row"}}>
                    <RadioButton value="third" />
                    <Text style={{marginTop: 10}}>Gameficação</Text>
                </View>

                <View style={{flexDirection: "row"}}>
                    <RadioButton value="fourth" />
                    <Text style={{marginTop: 10}}>Sala de aula invertida</Text>
                </View>

                <View style={{flexDirection: "row"}}>
                    <RadioButton value="fifth" />
                    <Text style={{marginTop: 10}}>Tecnologias criativas</Text>
                </View>
            </RadioButton.Group>

            <Text style={styles.label}>Título: </Text>

            <TextInput
                placeholder="Informe um título"
                style={{margin: 18, borderWidth: 0.5, padding: 8}} />

            <Text style={styles.label}>Descrição: </Text>

            <TextInput
                style={{borderWidth: 0.5, margin: 18, padding: 8}}
                multiline={true}
                numberOfLines={4}
                placeholder="Descreva a atividade" />

            <Text style={styles.label}>Links: </Text>

            <TextInput
                placeholder="Links de referência"
                style={{margin: 18, borderWidth: 0.5, padding: 8}} />

            <View style={{flexDirection: "column", height: 85, justifyContent: "space-between"}}>

                <Button title="Salvar" color="#33cc33" />

                <Button title="Cancelar" color="#ff1a1a" />
                
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 16,
        fontWeight: "bold",
        textDecorationLine: "underline",
        textAlign: "center",
        marginBottom: 20
    },
    label: {
        fontSize: 14,
        fontWeight: "bold",
        marginTop: 10,
        marginBottom: 5
    }
})