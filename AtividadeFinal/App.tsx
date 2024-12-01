import { StatusBar } from 'expo-status-bar';
import React, {useEffect} from 'react'
import { StyleSheet, Text, View } from 'react-native';
import { Veiculo } from './model/Veiculo';
// import VeiculoService from './services/VeiculoService';
import {Database} from './database/Database'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import ManterVeiculo from './screens/ManterVeiculo';
import ListarVeiculo from './screens/ListarVeiculo'; 

export default function App() {
    const Drawer = createDrawerNavigator();

    function ManterScreen({}) {
      return(
        <ManterVeiculo></ManterVeiculo>
      )
    }
    function ListScreen({}){
      return(
        <ListarVeiculo></ListarVeiculo>
      )
    }
    useEffect(()=>{
      // Database.ReinitDb().then(()=>
      //   console.log('Banco Reiniciado')
      // )
      Database.initDb().then(()=>
        console.log('Banco Iniciado')
      )
    },[])
  return (
      <NavigationContainer>
        <Drawer.Navigator initialRouteName="Listar Veiculo">
          <Drawer.Screen name="Manter Veiculo" component={ManterScreen}/>
          <Drawer.Screen name="Listar Veiculo" component={ListScreen}/>
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
});
