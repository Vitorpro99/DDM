import { StatusBar } from 'expo-status-bar';
import { StyleSheet,SafeAreaView, Text, View,FlatList } from 'react-native';

export default function App() {

  const DADOS = [
    {
      id: '1',
      raca: 'Rottweiler'
    },
    {
      id: '2',
      raca: 'Golden Retriever'
    },
    {
      id: '3',
      raca: 'Caramelo'
    },
    {
      id: '4',
      raca: 'Beagle'
    },
    {
      id: '5',
      raca: 'Chow-Chow'
    }
  ];

  const criaItem = ({item}) => 
    <View style={styles.item}>
      <Text style={styles.itemTexto}>{ item.id }</Text>
      <Text style={styles.itemTexto}>{ item.raca }</Text>
    </View>

  return (
    <SafeAreaView style={styles.container}>
    <View style={styles.container}>
      <Text style={styles.titulo}>Lista de raças</Text>
      
    <FlatList
      data={DADOS}
      renderItem={criaItem}
    />

    </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: StatusBar.currentHeight || 20
  },
  titulo:{
    fontSize:30,
    fontWeight:'bold',
    marginBottom: 30
  },
  item:{
    borderWidth: 2,
    borderColor: '#000',
    borderRadius: 2,
    padding: 4,
    flexDirection: 'row',
    rowGap: 5,
    columnGap: 10,
  },
  itemTexto:{
    fontSize:30,
  }

});
