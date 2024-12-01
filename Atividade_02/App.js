import { StatusBar } from 'expo-status-bar';
import { StyleSheet,SafeAreaView, Text, View,FlatList, Image,Pressable } from 'react-native';
import * as Speech from 'expo-speech';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function App() {


  const DADOS = [
    {
      id: '1',
      marca: 'Chevrolet',
      vendas: '1.656.918',
      modelo: 'Onix',
      ano: '2019',
      foto: require('./assets/onix.jpg'),
      descricao: 'O Onix foi o carro mais vendido no Brasil em 2019, famoso por seu design moderno, economia de combustível e conectividade, com destaque para a central multimídia MyLink, que atraiu um público jovem.'
    },
    {
      id: '2',
      marca: 'Hyunday',
      vendas: '1.208.417',
      modelo: 'HB20',
      ano: '2013',
      foto: require('./assets/hb20.jpg'),
      descricao: 'O HB20 conquistou muitos compradores pela sua boa relação custo-benefício, design inovador e confiabilidade, além de ser um dos primeiros modelos a desafiar os carros populares das montadoras tradicionais.'
    },
    {
      id: '3',
      marca: 'Fiat',
      vendas: '1.155.816',
      modelo: 'Strada',
      ano: '2014',
      foto: require('./assets/strada.jpg'),
      descricao: 'A Strada dominou as vendas no segmento de picapes pequenas, especialmente por sua robustez e versatilidade para trabalho e uso urbano. O lançamento da versão cabine dupla ampliou seu apelo.'
    },
    {
      id: '4',
      marca: 'Volkswagen',
      vendas: '1.029.872',
      modelo: 'Gol',
      ano: '2013',
      foto: require('./assets/gol.jpg'),
      descricao: 'O Gol, por muitos anos, foi o carro mais vendido do Brasil devido à sua durabilidade, simplicidade mecânica e manutenção barata, além de ser amplamente utilizado como carro de frota.'
    },
    {
      id: '5',
      marca: 'Toyota',
      vendas: '626.906',
      modelo: 'Corolla',
      ano: '2015',
      foto: require('./assets/corolla.jpg'),
      descricao: 'O Corolla sempre foi sinônimo de confiabilidade, conforto e baixa desvalorização, o que fez dele um favorito entre os sedãs médios. A versão com motor flex de 2015 também impulsionou suas vendas.'
    }
  ];
  

  const criaItem = ({item}) => 
    <View style={styles.item}>
      {/* <Text style={styles.itemTexto}>{ item.id }</Text> */}
      <Text style={styles.itemTexto}>{ item.marca } {item.modelo}</Text>
      <Text style={styles.itemTexto}>Ano de auge: { item.ano }</Text>
      <Text style={styles.itemTexto}>Vendas: { item.vendas }</Text>
      <Image source={item.foto} style={styles.foto} />
      <Pressable style={styles.botao} onPress={() => {alert(item.descricao); Speech.speak(`${item.descricao}`, {language:"pt-br", rate: 1.5
      }) }}><Text style={styles.botaoTexto}>Saiba mais</Text></Pressable>
    </View>

  return (
    <SafeAreaView style={styles.container}>
       <StatusBar style="light" backgroundColor='red' translucent={true}/>
    <View style={styles.view2}>
    <Text style={styles.titulo}>Carros mais vendidos no Brasil</Text>
    </View>
    <View style={styles.container}>
      
     
      
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
    justifyContent: 'center',alignContent: 'center',
    justifyContent: 'center',
    paddingTop: StatusBar.currentHeight || 30,
    width: '100%',
    backgroundColor: 'gray',
    borderRadius:5,
  },

  titulo:{
    fontSize:25,
    fontWeight:'bold',
    marginBottom: 30,
    backgroundColor: 'red',
    color: '#fff',
    padding: 10,
    textTransform: 'uppercase',
    textAlign: 'center',
  },
  item:{
    borderWidth: 2,
    marginVertical: 10,
    borderRadius: 10,
    borderColor:'transparent',
    alignContent: 'center',
    justifyContent: 'center',
    alignContent:'center',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor:'white'
  },
  itemTexto:{
    alignContent:"center",
    alignSelf:"center",
    fontSize:20,
  
  },
  view2:{
    backgroundColor:'red',
    width: '100%',
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    
  },
  foto:{
    width: 400,
    height: 200,
    marginBottom: 10,
    borderRadius: 10,
    marginHorizontal: 10,
  },
  botao:{
    backgroundColor:'red',
    borderRadius: 25,
    width: '50%',
    marginVertical: 10,
  },
  botaoTexto:{
    fontSize:20,
    color: '#fff',
    alignSelf: 'center',
    alignContent: 'center',
    justifyContent: 'center',
  }
});
