import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useState } from 'react';
import { Cachorro } from '../model/Cachorro';
import { CachorroService } from '../service/CachorroService';
import styles from '../estilo';


const ListarCachorro = () => {

    const loadCachorros = async () => {
        try {
            const resultado = await CachorroService.findAll();
            console.log(resultado);
        } catch (error) {
            console.log(error);
        }
    };


    return (
        <View>
            <Button title="Carregar" onPress={loadCachorros} />
        </View>
    )
}

export default ListarCachorro;