import { StatusBar } from 'expo-status-bar';
import { StyleSheet,SafeAreaView, Text, View,FlatList } from 'react-native';

export default function App() {

  const DADOS = [
    {
      id: '1',
      marca: 'Chevrolet',
      vendas: '1.656.918',
      modelo: 'Onix',
      ano: '2019',
    },
    {
      id: '2',
      marca: 'Hyunday',
      vendas: '1.208.417',
      modelo: 'HB20',
      ano: '2013',
    },
    {
      id: '3',
      marca: 'Fiat',
      vendas: '1.155.816',
      modelo: 'Strada',
      ano: '2014',
    },
    {
      id: '4',
      marca: 'Volkswagen',
      vendas: '1.029.872',
      modelo: 'Gol',
      ano: '2013',
    },
    {
      id: '5',
      marca: 'Toyota',
      vendas: '626.906',
      modelo: 'Corolla',
      ano: '2015',
    }
  ];

  const criaItem = ({item}) => 
    <View style={styles.item}>
      <Text style={styles.itemTexto}>{ item.id }</Text>
      <Text style={styles.itemTexto}>{ item.marca }</Text>
      <Text style={styles.itemTexto}>{ item.modelo }</Text>
      <Text style={styles.itemTexto}>{ item.ano }</Text>
      <Text style={styles.itemTexto}>{ item.vendas }</Text>
    </View>

  return (
    <SafeAreaView style={styles.container}>
    <View style={styles.container}>
      <Text style={styles.titulo}>Carros mais vendidos no Brasil</Text>
      
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
    fontSize:20,
  }

});
