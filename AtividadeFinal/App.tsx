import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native';
import { Veiculo } from './model/Veiculo';
// import VeiculoService from './services/VeiculoService';
import { Database } from './database/Database'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import ManterVeiculo from './screens/ManterVeiculo';
import Catalogo from './screens/ListarVeiculo';

export default function App() {
  const Drawer = createDrawerNavigator();

  function ManterScreen({ }) {
    return (
      <ManterVeiculo></ManterVeiculo>
    )
  }
  function ListScreen({ }) {
    return (
      <Catalogo></Catalogo>
    )
  }
  useEffect(() => {
    // Database.ReinitDb().then(()=>
    //   console.log('Banco Reiniciado')
    // )
    Database.initDb().then(() =>
      console.log('Banco Iniciado')
    )
  }, [])
  return (

    <NavigationContainer >
      <StatusBar style="light" backgroundColor='#ad1d1d' translucent={false} />
      <Drawer.Navigator
        initialRouteName="Catálogo"
        screenOptions={{
          drawerStyle: {
            backgroundColor: '#f0f0f0', // Cor do fundo do Drawer
            width: 200, // Largura do Drawer
          },
          drawerLabelStyle: {
            fontSize: 18, // Tamanho da fonte do texto
            color: '#333', // Cor do texto
          },
          drawerActiveTintColor: '#ad1d1d', // Cor do item ativo
          drawerInactiveTintColor: '#999', // Cor do item inativo
          headerStyle: {
            backgroundColor: '#ad1d1d', // Cor do cabeçalho
          },
          headerTintColor: '#fff', // Cor do texto no cabeçalho
        }}
      >
        <Drawer.Screen name="Manter Veiculo" component={ManterScreen} />
        <Drawer.Screen name="Catálogo" component={ListScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  menuBar: {
    backgroundColor: '#ad1d1d',
    height: 60,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: 0,
  }
});
