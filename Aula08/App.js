import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import MapView from 'react-native-maps'
import { Marker } from 'react-native-maps'
import React, {useState} from 'react'
import estilo from './estilo.js'

export default function App() {
  const [position, setPosition] = useState({
    latitude:-31.331792, 
    longitude:-54.071812,
    latitudeDelta: 0.01,
    longitudeDelta:0.01 })
  const [titulo, setTitulo] = useState('')
  const [descricao, setDescricao] = useState('')
  return (
    <View style={estilo.container}>
      <Text>Aula sobre mapas</Text>
      <MapView style={estilo.map} region={position}
      onPress={e => setPosition({ ...position, 
        latitude: e.nativeEvent.coordinate.latitude,
        longitude: e.nativeEvent.coordinate.longitude,
        latitudeDelta: e.nativeEvent.coordinate.latitudeDelta,
        longitudeDelta: e.nativeEvent.coordinate.longitudeDelta
      })}
      >
        {/* <Marker 
        coordinate={{latitude:-31.331792, longitude:-54.071812}}
        title="IFSul Campus Bagé"
        description='Aula de Desenvolvimento para Dispositivos Moveis'
        /> */}
        <Marker
        coordinate={position}
        title={titulo}
        descricao={descricao}
        />
      </MapView>

    <TextInput
      placeholder="Título do marcador"
      style={estilo.input}
      value={titulo}
      onChangeText={texto => setTitulo(texto)}
    />
    <TextInput
      placeholder="Descrição do marcador"
      style={estilo.input}
      value={descricao}
      onChangeText={texto => setDescricao(texto)}
    />
    </View>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
