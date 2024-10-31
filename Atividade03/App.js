import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, FlatList } from 'react-native';
import { createDrawerNavigator} from '@react-navigation/drawer'
import { NavigationContainer} from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MapView from 'react-native-maps'
import { Marker } from 'react-native-maps'
import styleItem from './estiloItem.js'

function IfBage({ navigation }){
  return(
    <View>
      <Text>IFSul Campus Bagé</Text>
      <MapView style={{width:"100%", height: "80%"}} initialRegion={{latitude:-31.331792, 
    longitude:-54.071812,
    latitudeDelta: 0.01,
    longitudeDelta:0.01}}>

      <Marker 
        coordinate={{latitude:-31.331792, longitude:-54.071812}}
        title="IFSul Campus Bagé"
        description='Campus do IFSul da cidade de Bagé'
        />
    </MapView>
    </View>
  )
}
function IfPel({ navigation }){
  return(
    <View>
      <Text>IFSul Campus Pelotas</Text>
      <MapView style={{width:"100%", height: "80%"}} initialRegion={{
    latitude:-31.766325, 
    longitude:-52.351992,
    latitudeDelta: 0.01,
    longitudeDelta:0.01}}>

        <Marker 
        coordinate={{latitude:-31.766325, longitude:-52.351992}}
        title="IFSul Pelotas"
        description='Campus do IFSul da cidade de Pelotas'
        />

    </MapView>

    </View>
  )
}

function IfSantana({ navigation }){
  return(
    <View>
      <Text>IFSul Campus Santana do Livramento</Text>
      <MapView style={{width:"100%", height: "80%"}} initialRegion={{
    latitude:-30.900849  , 
    longitude:-55.53291,
    latitudeDelta: 0.001,
    longitudeDelta:0.001}}>
      
      <Marker 
        coordinate={{latitude:-30.900849, longitude:-55.53291}}
        title="IFSul Santana do Livramento"
        description='Campus do IFSul da cidade de Santana do Livramento'
        />

    </MapView>
    </View>
  )
}
const DADOS = [
  {
    id: '1',
    foto: require('./assets/bage.jpg'),
    descricao: 'Campus Bagé: Fundado em 2010, o campus oferece cursos técnicos e superiores voltados para as necessidades da região, como Agropecuária e Informática, sendo um agente de desenvolvimento local.'
  },
  {
    id:'2',
    foto: require('./assets/pelotas.jpg'),
    descricao: 'Inaugurado em 1917 como Escola de Aprendizes e Artífices, é o campus mais antigo do IFSul. Hoje, destaca-se como um centro de excelência em formação técnica e tecnológica no sul do Brasil, com cursos variados e ampla estrutura.'
  },
  {
    id: '3',
    foto: require('./assets/santana.jpg'),
    descricao: 'Campus Santana do Livramento: Criado em 2010, o campus é estratégico para a fronteira Brasil-Uruguai, oferecendo cursos como Informática e Eletromecânica, e promove integração e desenvolvimento na região fronteiriça.'
  }
]
const criaItem = ({item}) => 
  <View style={styleItem.item}>
    <Image style={styleItem.imagem} source={item.foto}/>

    <Text style={styleItem.descricao}>{item.descricao}</Text>
    
  </View>

function CampusLista({}){
  return(
    <View>
      <Text style={styleItem.titulo}>Lista de Campus do IFSUL</Text>
      <FlatList
      data={DADOS}
      renderItem={criaItem}
      />
    </View>
  )
}

// const tab = createBottomNavigator();

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="IFSul Campus Bagé">
        <Drawer.Screen name="IFSul Campus Bagé" component={IfBage} />
        <Drawer.Screen name="IFSul Campus Pelotas" component={IfPel} />
        <Drawer.Screen name="IFSul Campus Santana do Livramento" component={IfSantana}/>
        <Drawer.Screen name="Lista dos Campus" component={CampusLista}></Drawer.Screen>
      </Drawer.Navigator>
    </NavigationContainer>
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
