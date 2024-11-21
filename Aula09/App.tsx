import React, { useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useState } from 'react';
import { Cachorro } from './model/Cachorro';
import { Database } from './database/Database';
import ManterCachorro from './screens/ManterCachorro';
import ListarCachorro from './screens/ListarCachorro';

import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

const Drawer = createDrawerNavigator();

function ManterScreen ({}) {
  return(
    <ManterCachorro></ManterCachorro>
  )
}

function ListarScreen ({}) {
  return(
    <ListarCachorro></ListarCachorro>
  )
}


export default function App() {

  useEffect(() => {
    //Database.ReinitDb().then(() => console.log('Banco Reiniciado'));
    Database.initDb().then(() => 
      console.log('Banco Iniciado!')
    )
  }, []);
  
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName='Manter Cachorro'>
        <Drawer.Screen name="Manter Cachorro" component={ManterCachorro}/>
        <Drawer.Screen name="Listar Cachorros" component={ListarCachorro}/>
      </Drawer.Navigator>
    </NavigationContainer>
  );
  
}