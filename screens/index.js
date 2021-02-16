import React from 'react'
import Screen from './screen'
import Inicio from '../components/Inicio'
import Cadastro from '../components/Cadastro'

export const indexScreen = ({navigation}) => 
    <Screen navigation={navigation} name="index">
        <Inicio />
    </Screen>

export const cadastroScreen = ({navigation}) => 
    <Screen navigation={navigation} name="Cadastro">
        <Cadastro />
    </Screen>

export const cardScreen = ({navigation}) => <Screen navigation={navigation} name="Card" />

