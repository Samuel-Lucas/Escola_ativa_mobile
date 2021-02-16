import React from 'react'
import {createAppContainer} from 'react-navigation'
import {createDrawerNavigator} from 'react-navigation-drawer'
import {Dimensions} from 'react-native'

import {Feather} from '@expo/vector-icons'

import {indexScreen, cadastroScreen, cardScreen} from './screens'

import Sidebar from './components/SideBar.js'

const DrawerNavigator = createDrawerNavigator({
  indexScreen: {
    screen: indexScreen,
    navigationOptions: {
      title: "Início",
      drawerIcon: ({ tintColor }) => <Feather name="home" size={16} color={tintColor} />
    }
  },
  cadastroScreen:  {
    screen: cadastroScreen,
    navigationOptions: {
      title: "Cadastrar atividade",
      drawerIcon: ({ tintColor }) => <Feather name="file-text" size={16} color={tintColor} />
    }
  },
  cardScreen: {
    screen: cardScreen,
    navigationOptions: {
      title: "Suas atividades",
      drawerIcon: ({ tintColor }) => <Feather name="columns" size={16} color={tintColor} />
    }
  }
},
{
  contentComponent: props => <Sidebar {...props} />,

  contentOptions: {
    activeBackgroundColor: "rgba(0, 230, 64, 0.2)",
    activeTintColor: "#531158",
    itemsContainerStyle: {
      marginTop: 16,
      marginHorizontal: 8
    },
    itemStyle: {
      borderRadius: 4
    }
  }
})

export default createAppContainer(DrawerNavigator)