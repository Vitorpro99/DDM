import { VeiculoService } from '../services/VeiculoService';
import { StyleSheet,SafeAreaView, Text, View,FlatList,Button, Image, Pressable } from 'react-native';
import React, { useEffect, useState } from 'react';
import styles from '../styles/listarVeiculo.styles.js';


const listarVeiculo = () => {
    const [veiculos,setVeiculos] = useState([])
    const loadveiculo = async () => {
        try{
            const resultado = await VeiculoService.findAll()
            setVeiculos(resultado)  
//            console.log(resultado)
            
        }
        catch(error){
            console.error(error)
        }
    }
useEffect(()=>{
    loadveiculo()
},[])

const list = ({item}) =>
    
    <View style={styles.box}>
            
        <Text style={styles.titulo}>{item.fabricante} {item.modelo} {item.anoFabricacao}</Text>
        
        <Text>{item.ano}</Text>
        <Image style={styles.image} source={require('../assets/404.jpg')}
        />

    </View>


return(
        <View>
            <Text>Listando Veículos</Text>
            <FlatList
                data={veiculos}
                renderItem={list}
            />
            <Button title="Atualizar lista" onPress={loadveiculo}/>
            <Pressable style={styles.delet}>
                <Text>Deletar</Text>
            </Pressable>
        </View>

    )
}
export default listarVeiculo