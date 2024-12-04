import { VeiculoService } from '../services/VeiculoService';
import { StyleSheet, SafeAreaView, Text, View, FlatList, Button, Image, Pressable } from 'react-native';
import React, { useEffect, useState } from 'react';
import styles from '../styles/listarVeiculo.styles.js';
import { Container } from 'native-base';



const listarVeiculo = () => {
    const [veiculos, setVeiculos] = useState([])
    const loadveiculo = async () => {
        try {
            const resultado = await VeiculoService.findAll()
            setVeiculos(resultado)
            //            console.log(resultado)

        }
        catch (error) {
            console.error(error)
        }
    }
    const deletar = async (id) => {
            try {
                
                const veiculoDelete = await VeiculoService.findById(id) 
                console.log('ID recebido para exclusão:', id);

                if (veiculoDelete) {
                    const deleted = await VeiculoService.delete(veiculoDelete)
                    if (veiculoDelete) {
                        console.log('Veiculo deletado com sucesso')
                        loadveiculo()
                    }
                }
            }
            catch (error) {
                console.log("Erro ao deletar o veiculo " + error)
            }
    }
    useEffect(() => {
        loadveiculo()
    }, [])

    const list = ({ item }) =>

        <View style={styles.box}>

            <Image style={styles.image} source={require('../assets/404.jpg')} />

            <View style={styles.box2}>
                <Text style={styles.titulo}>{item.fabricante} {item.modelo} {item.anoFabricacao}</Text>
            <View style={styles.info}>    
                <Text style={styles.preco}>R${item.preco}</Text>
                <Text style={styles.preco}>Km{item.kmRodados}</Text>
                </View>
                <Pressable style={styles.delet} onPress={() => deletar(item.id)}>
                    <Text style={styles.textbutton}>Deletar</Text>
                </Pressable>
            </View>
        </View>


    return (
        <View style={styles.exbox}>
            <Text>Listando Veículos</Text>
            <FlatList
                data={veiculos}
                renderItem={list}
                keyExtractor={(item) => item.id.toString()}
            />
            <Button title="Atualizar lista" onPress={loadveiculo} />
            <Pressable style={styles.delet} onPress={() => deletar(item.id)}>
                <Text style={styles.textbutton}>Deletar</Text>
            </Pressable>
        </View>

    )
}
export default listarVeiculo