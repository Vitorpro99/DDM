import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View, Pressable } from 'react-native';
import { Veiculo } from '../model/Veiculo';
import{ VeiculoService }from '../services/VeiculoService';
import {useState} from 'react'
import styles from '../style'

const ManterVeiculo = () => {
    const [formVeiculo, setFormVeiculo] = useState<Partial<Veiculo>>({})
    
    const Limpar = () =>{
        setFormVeiculo({})
        
    }

    const Salvar = async () =>{
        const veiculo = new Veiculo(formVeiculo)
        const resultado = await VeiculoService.create(veiculo);
        console.log(resultado);
        alert('Veiculo' + veiculo.id + ' - ' + veiculo.modelo + ' adicionado!' );
        Limpar();
    }
  return (
    <View style={styles.container}>
        <TextInput style={styles.textInput} placeholder="Digite a fabricante" onChangeText={(valor) => 
        setFormVeiculo({ ...formVeiculo, fabricante: valor})}/>

        <TextInput style={styles.textInput} placeholder="Digite o modelo" onChangeText={(valor) => 
        setFormVeiculo({...formVeiculo, modelo: valor})}/>

        <TextInput style={styles.textInput} placeholder="Digite o ano" onChangeText={(valor) => 
        setFormVeiculo({...formVeiculo, anoFabricacao: valor})}/>

        <TextInput style={styles.textInput} placeholder="Digite a descrição" onChangeText={(valor) => 
        setFormVeiculo({...formVeiculo, descricao: valor})}/>

        <TextInput style={styles.textInput} placeholder="Digite o preço" onChangeText={(valor) => 
        setFormVeiculo({...formVeiculo, preco: parseFloat(valor)})}/>

        <TextInput style={styles.textInput} placeholder="Digite a imagem" onChangeText={(valor) => 
        setFormVeiculo({...formVeiculo, imageUrl: valor})}/>

        <TextInput style={styles.textInput} placeholder='Digite a kilometragem' onChangeText={(valor) => 
        setFormVeiculo({...formVeiculo, kmRodados: valor})}/>


        <TextInput style={styles.textInput} placeholder="Digite o chassi" onChangeText={(valor) => 
        setFormVeiculo({...formVeiculo, chassi: valor})}/>

        <Pressable onPress={Salvar} style={styles.botao}><Text style={styles.botaoTexto}>Enviar</Text></Pressable>
    </View>
  );
}
export default ManterVeiculo