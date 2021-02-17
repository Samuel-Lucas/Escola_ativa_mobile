import React from 'react'
import Screen from './screen'
import Inicio from '../components/Inicio'
import Cadastro from '../components/Cadastro'
import SuasAtividades from '../components/SuasAtividades'
import Secao from '../components/Secao'

export const indexScreen = ({navigation}) => 
    <Screen navigation={navigation} name="index">
        <Inicio navigation={navigation} />
    </Screen>

export const cadastroScreen = ({navigation}) => 
    <Screen navigation={navigation} name="cadastro">
        <Cadastro />
    </Screen>

export const userPostScreen = ({navigation}) => 
    <Screen navigation={navigation} name="userPosts">
        <SuasAtividades />
    </Screen>

export const sectionScreen = ({navigation}) => 
    <Screen navigation={navigation} name="Section">
        <Secao />
    </Screen>

