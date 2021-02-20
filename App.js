import React from 'react'
import {createAppContainer} from 'react-navigation'
import {createDrawerNavigator} from 'react-navigation-drawer'
import {Feather} from '@expo/vector-icons'

import {
  indexScreen,
  cadastroScreen,
  userPostScreen,
  quemSomosScreen,
  metodologiasScreen,
  sectionScreen,
  section2Screen,
  section3Screen,
  section4Screen,
  ensinoScreen,
  sairScreen
} from './screens'

import Sidebar from './components/SideBar.js'

const DrawerNavigator = createDrawerNavigator({
  indexScreen: {
    screen: indexScreen,
    navigationOptions: {
      title: "Início",
      drawerIcon: ({ tintColor }) => <Feather name="home" size={16} color={tintColor} />
    }
  },
  quemSomosScreen: {
    screen: quemSomosScreen,
    navigationOptions: {
      title: "Quem somos",
      drawerIcon: ({ tintColor }) => <Feather name="info" size={16} color={tintColor} />
    }
  },
  metodologiasScreen: {
    screen: metodologiasScreen,
    navigationOptions: {
      title: "Por que aplicar metodologias ativas ?",
      drawerIcon: ({ tintColor }) => <Feather name="info" size={16} color={tintColor} />
    }
  },
  cadastroScreen:  {
    screen: cadastroScreen,
    navigationOptions: {
      title: "Cadastrar atividade",
      drawerIcon: ({ tintColor }) => <Feather name="file-text" size={16} color={tintColor} />
    }
  },
  userPostScreen: {
    screen: userPostScreen,
    navigationOptions: {
      title: "Suas atividades",
      drawerIcon: ({ tintColor }) => <Feather name="file-text" size={16} color={tintColor} />
    }
  },
  sairScreen: {
    screen: sairScreen,
    navigationOptions: {
      title: "Sair",
      drawerIcon: ({ tintColor }) => <Feather name="log-out" size={16} color={tintColor} />
    }
  },
  sectionScreen: {
    screen: sectionScreen,
    navigationOptions: {
      title: ""
    }
  },
  section2Screen: {
    screen: section2Screen,
    navigationOptions: {
      title: ""
    }
  },
  section3Screen: {
    screen: section3Screen,
    navigationOptions: {
      title: ""
    }
  },
  section4Screen: {
    screen: section4Screen,
    navigationOptions: {
      title: ""
    }
  },
  ensinoScreen: {
    screen: ensinoScreen,
    navigationOptions: {
      title: ""
    }
  }
},
{
  contentComponent: props => <Sidebar {...props} />,

  contentOptions: {
    //activeBackgroundColor: "rgba(0, 230, 64, 0.2)",
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