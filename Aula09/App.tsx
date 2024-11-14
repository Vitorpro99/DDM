import { StatusBar } from 'expo-status-bar';
import { TextInput, StyleSheet, Text, View, Touchable, TouchableOpacity } from 'react-native';
import { Cachorro } from './model/Cachorro';
import { useState } from 'react';
import { CachorroService } from './service/CachorroService';
export default function App() {

  const [formCachorro, setFormCachorrro] = useState<Partial<Cachorro>>({})

  const Limpar = () => {
    setFormCachorrro({})  }
  const Salvar = async () => {
    // console.log(formCachorro)
    const cachorro = new Cachorro(formCachorro)
    const resultado = await CachorroService.create(cachorro)
    
    
    
    cachorro.latir() 
    alert('Cachorro adicionado')
    Limpar()
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Cadastro de cachorro</Text>

      <TextInput style={styles.input} placeholder="Digite o ID"
        value={formCachorro.id?.toString()}
        onChangeText={(valor) => setFormCachorrro({ ...formCachorro, id: valor })} />

      <TextInput style={styles.input} placeholder="Digite o nome do Cachorro"
        value={formCachorro.nome}
        onChangeText={(valor) => setFormCachorrro({ ...formCachorro, nome: valor })} />

      <TextInput style={styles.input} placeholder="Digite a raça do cachorro"
        value={formCachorro.raca}
        onChangeText={(valor) => setFormCachorrro({ ...formCachorro, raca: valor })} />

      <TextInput style={styles.input} placeholder="Digite a pelagem"
        value={formCachorro.pelagem}
        onChangeText={(valor) => setFormCachorrro({ ...formCachorro, pelagem: valor })} />

      <TextInput style={styles.input} placeholder="Digite a data de nascimento"
        value={formCachorro.datanasc?.toString()}
        onChangeText={(valor) => setFormCachorrro({ ...formCachorro, datanasc: valor })} />

      <TouchableOpacity onPress={Limpar} style={styles.botaoResetar}>
        <Text style={styles.textoBotao}>Limpar</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={Salvar} style={styles.botaoSalvar}>
        <Text  style={styles.textoBotao}>Salvar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    backgroundColor: '#d1d1d1',
    height:40,
    width:"80%",
    borderRadius: 10,
    marginTop: 20,
    fontSize: 15
  },
  botaoSalvar:{
    backgroundColor: '#001c99',
    width: 150,
    height: 50,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center', 
    marginTop: 10
  },
  botaoResetar:{
    backgroundColor: 'red',
    width: 150,
    height: 50,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center', 
    marginTop: 10
  },
  textoBotao:{
    color: '#fff',
    fontSize: 18
  },
  titulo:{
    fontSize: 24,
    fontWeight: 'bold'
  }
});
