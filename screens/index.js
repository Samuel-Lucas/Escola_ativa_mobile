import React from 'react'
import Screen from './screen'
import Inicio from '../components/Inicio'
import Cadastro from '../components/Cadastro'
import SuasAtividades from '../components/SuasAtividades'
import QuemSomos from '../components/QuemSomos'
import MetodologiasAtivas from '../components/MetodologiasAtivas'
import Secao from '../components/Secao'
import Secao2 from '../components/Secao2'
import Secao3 from '../components/Secao3'

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

export const quemSomosScreen = ({navigation}) => 
    <Screen navigation={navigation} name="info">
        <QuemSomos />
    </Screen>

export const metodologiasScreen = ({navigation}) => 
    <Screen navigation={navigation} name="info">
        <MetodologiasAtivas />
    </Screen>

export const sectionScreen = ({navigation}) => 
    <Screen navigation={navigation} name="section">
        <Secao />
    </Screen>

export const section2Screen = ({navigation}) => 
    <Screen navigation={navigation} name="section2">
        <Secao2 />
    </Screen>
    
export const section3Screen = ({navigation}) => 
    <Screen navigation={navigation} name="section3">
        <Secao3 />
    </Screen>