import React from 'react'
import Screen from './screen'
import Inicio from '../components/Inicio'

export const indexScreen = ({navigation}) => 
    <Screen navigation={navigation} name="index">
        <Inicio />
    </Screen>

export const cadastroScreen = ({navigation}) => <Screen navigation={navigation} name="Cadastro" />

export const cardScreen = ({navigation}) => <Screen navigation={navigation} name="Card" />

