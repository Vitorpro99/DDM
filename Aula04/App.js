import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import * as Speech from 'expo-speech';

export default function App() {

  const falar = () =>{
  // Configurando a linguagem para o texto ser falado
    Speech.speak("Bom dia.", {language: "ru", 
      pitch: 1, rate: 1, volume: 1, 
    });
  }

  return (
    <View style={styles.container}>
      <Text>Aplicativo utilizando o Speech!</Text>

      <Button title="falar" onPress={falar}/>
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
});
