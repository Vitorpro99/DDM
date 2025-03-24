import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Image, TextInput, Button } from 'react-native';

export default function App() {
  const [nome,setNome] = useState(' FUlano ')
  const [endereco,setEndereco] = useState(' ')
  const [email,setEmail] = useState(' ')
  const [ano,setAno] = useState(0)
  let resultado = 0;

  const enviar  = () => {
    resultado = 2024 - ano;
    alert("Você tem " + resultado + " anos de idade")
  }

  return (
    <View style={meuestilo.container}>
      <Text style={meuestilo.titulo}>Bem vindo 6 INFO</Text>
      <Text style={meuestilo.subtitulo}>Esse é o nosso primeiro projeto</Text>      
      <Image 
        source={require('./assets/pato.gif')}
        style={{ width: 150, height: 150 }}
      />
      <Text style={meuestilo.label}>Nome</Text>
      <TextInput style={meuestilo.input} placeholder='Nome' defaultValue={ nome } onChangeText={texto => setNome(texto)}/>
      <Text style={meuestilo.label}>Ano de nascimento</Text>
      <TextInput style={meuestilo.input} onChangeText={numero => setAno(numero)} keyboardType='numeric'/>
      <Text style={meuestilo.label}>Endereço</Text>
      <TextInput style={meuestilo.input} placeholder='Endereço' onChangeText={texto => setEndereco(texto)}/>
      <Text style={meuestilo.label}>Email</Text>
      <TextInput style={meuestilo.input} placeholder='Email' onChangeText={texto => setEmail(texto)} keyboardType='email-address'/>

      <Button title='Enviar'onPress={enviar}/>
    </View>
  );
}

const meuestilo = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFCD00',
  },
  titulo:{
    fontSize: 30,
    fontWeight: 'bold',
    color: '#000',
    fontStyle: 'italic',
    textTransform: 'uppercase',
    textDecorationLine: 'underline',
    textShadowColor: '#FFCD00',
    textShadowOffset: {width: 2, height: -2},
    textShadowRadius: 10
  },
  subtitulo:{
    fontSize: 20
  },
  input:{
    width: "80%",
    height: 35,
    padding: 5,
    marginBottom:10,
    backgroundColor: '#FFF',
    borderRadius: 10,
    borderWidth: 2,
    fontSize: 15,
    borderColor: '#1e877d'
  },
  label:{
    width: "80%"
  }

});
