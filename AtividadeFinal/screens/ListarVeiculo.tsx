import { VeiculoService } from '../services/VeiculoService';
import { StatusBar, SafeAreaView, Text, View, FlatList, Button, Image, Pressable } from 'react-native';
import React, { useEffect, useState } from 'react';
import styles from '../styles/listarVeiculo.styles.js';
import stylesOver from '../styles/overlayVeiculo.styles';
import { Container } from 'native-base';
import RNPickerSelect from 'react-native-picker-select';
import {Overlay } from 'react-native-elements';



const listarVeiculo = () => {
    const [veiculos, setVeiculos] = useState([])
    const [visible, setVisible] = useState(false);
    const [selectedVeiculo, setSelectedVeiculo] = useState(null);
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
            const deleted = await VeiculoService.delete(id)
            console.log('Veiculo deletado com sucesso')
            loadveiculo()
        }
        catch (error) {
            console.log("Erro ao deletar o veiculo " + error)
        }
    }
    const carroOverLay =  (veiculo) => {
        setSelectedVeiculo(veiculo);
        setVisible(!visible);
}
        useEffect(() => {
            loadveiculo()
        }, [])

        const list = ({ item }) =>

            <View style={styles.box}>

                <Image style={styles.image} source={{ uri: item.imageUrl }} />

                <View style={styles.box2}>
                    <Text style={styles.titulo}>{item.fabricante} {item.modelo} {item.anoFabricacao}</Text>
                    <View style={styles.info}>
                        <Text style={styles.preco}>R$ {item.preco}</Text>
                        <Text style={styles.kmRodados}>{item.kmRodados} km</Text>
                    </View>
                    {/* <Pressable style={styles.delet} onPress={() => deletar(item.id)}>
                    <Text style={styles.textbutton}>Deletar</Text>
                </Pressable> */}
                    <Pressable style={styles.details} onPress={() => carroOverLay(item)}>
                        <Text style={styles.textbutton}>Detalhes</Text>
                    </Pressable>

                    

                </View>
            </View>


        return (
            <View style={styles.exbox}>
                <FlatList
                    data={veiculos}
                    renderItem={list}
                    keyExtractor={(item) => item.id.toString()}
                />
                <Button title="Atualizar lista" onPress={loadveiculo} />
                {/* <Pressable style={styles.delet} onPress={() => deletar(item.id)}>
                <Text style={styles.textbutton}>Deletar</Text>
            </Pressable> */}
                <Overlay overlayStyle={{
                    borderRadius:20,
                    backgroundColor:'gray',
                    
                }} isVisible={visible} onBackdropPress={carroOverLay}>
                        {selectedVeiculo && (
                            <View style={stylesOver.boxExterna}>
                                <Image style={stylesOver.image} source={{ uri: selectedVeiculo.imageUrl }} />
                                <Text style={stylesOver.titulo}>{selectedVeiculo.fabricante} {selectedVeiculo.modelo} {selectedVeiculo.anoFabricacao}</Text>
                            <View style={stylesOver.info}>
                                <Text style={stylesOver.preco}>Preço: R${selectedVeiculo.preco}</Text>
                                <Text style={stylesOver.kmRodados}>Kilometragem: {selectedVeiculo.kmRodados} km</Text>
                            </View>
                            <Text style={stylesOver.tituloDescricao}>Descrição do veiculo</Text>
                                <Text style={stylesOver.descricao}>{selectedVeiculo.descricao}</Text>
                            <View>    
                                <Pressable style={stylesOver.delet} onPress={() => deletar(selectedVeiculo.id)}>
                                    <Text style={styles.textbutton}>Deletar</Text>
                                </Pressable>
                            </View>
                            <Pressable style={stylesOver.fechar} onPress={carroOverLay}>
                                    <Text style={styles.textbutton}>Fechar</Text>
                                </Pressable>
                            </View>
                        
                        )}
                    </Overlay>

            </View>

        )
    }
    export default listarVeiculo