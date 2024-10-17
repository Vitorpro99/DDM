import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import MapView from 'react-native-maps'
import { Marker } from 'react-native-maps'

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <MapView style={{width:"100%", height: "80%"}} initialRegion={{latitude:-31.331792, longitude:-54.071812,latitudeDelta: 0.01,longitudeDelta:0.01 }}>
        <Marker 
        coordinate={{latitude:-31.331792, longitude:-54.071812}}
        title="IFSul Campus Bagé"
        description='Aula de Desenvolvimento para Dispositivos Moveis'
        />
      </MapView>
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
