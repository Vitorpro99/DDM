import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View,Image, Pressable,onPress } from 'react-native';
import * as Speech from 'expo-speech';

export default function App() {

  const [pastelTotal, setpastelTotal] = useState(0);  

  const somaCarne = () => {
    setpastelTotal(pastelTotal + 6);
  }
  const somaFrango = () => {
    setpastelTotal(pastelTotal + 5);
  }
  const somaPeixe = () => {
    setpastelTotal(pastelTotal + 8);
  }
  const somaPizza = () => {
    setpastelTotal(pastelTotal + 7);
  }
  const somaVento = () => {

    setpastelTotal(pastelTotal + 4);
  }
  const somaQueijo = () => {
    setpastelTotal(pastelTotal + 8);
  }

  const retornaPastel = () => {
    alert('O seu pedido deu um total de: ' + 'R$' + pastelTotal);
    Speech.speak("O seu pedido deu um total de: " + 'US$' + pastelTotal, {language: "pt-br", 
          pitch: 1, rate: 1, volume: 1, 
        });
  }
  const esvaziar = () => {
    setpastelTotal(0);
    Speech.speak("O seu carrinho está vazio", {language: "pt-br", pitch: 1, rate: 1, volume: 1})
  }
  return (
    <>
    <View style={styles.container1}>
      <Image source={require('./assets/pastel.png')} style={{width:75, height:75, marginTop:25}}/>
      <Text style={styles.nomePastelaria}>Pastelaria: Sim com certeza. LTDA</Text>
      <Text style={styles.endereco}>Rua da Paz, 123</Text>
       
    </View>
    <View style={styles.container}>
      
      <View style={styles.pastel1}>
      <Text style={styles.pasttitulo}>Pastel de Carne</Text>
      <Text style={styles.descricao}>Recheio suculento e escuro, clássico de carne.</Text>
      <Image
      source={require('./assets/pastel_carne.jpg')}
      style={{width:'85%',height:'50%', marginTop:'auto',marginBottom:'auto',borderRadius:30}}/>
      
      <Pressable onPress ={somaCarne}>
        <Image source={require('./assets/carrinho.png')} style={styles.carrinho}/>
      </Pressable>
    
      </View>

      <View style={styles.pastel2}>
      <Text style={styles.pasttitulo}>Pastel de frango</Text>
      <Text style={styles.descricao}>Recheio dourado e leve de frango desfiado.</Text>
      <Image
      source={require('./assets/pastel_frango.jpg')}
      style={{width:'70%',height:'50%',marginTop:'auto',borderRadius:30, marginBottom:'auto'}}/>
      <Pressable onPress ={somaFrango}>
      <Image source={require('./assets/carrinho.png')} style={styles.carrinho}/>
      </Pressable>

      </View>
      <View style={styles.pastel3}>
        <Text style={styles.pasttitulo}>Pastel de peixe</Text>
        <Text style={styles.descricao}>Recheio suave com toque de peixe fresco.</Text>
        <Image
      source={require('./assets/pastel_peixe.jpg')}
      style={{width:'85%',height:'50%', marginTop:'auto',borderRadius:30,marginBottom:'auto'}}/>
      <Pressable onPress ={somaPeixe}>
      <Image source={require('./assets/carrinho.png')} style={styles.carrinho}/>
      </Pressable>
      </View>

      <View style={styles.pastel4}>
        <Text style={styles.pasttitulo}>Pastel de Pizza</Text>
        <Text style={styles.descricao}>Recheio de queijo e molho, clássico sabor pizza.</Text>
        <Image
      source={require('./assets/pastel_pizza.jpg')}
      style={{width:'85%',height:'50%', marginTop:'auto',borderRadius:30,marginBottom:'auto'}}/>
      <Pressable onPress ={somaPizza}>
      <Image source={require('./assets/carrinho.png')} style={styles.carrinho}/>
      </Pressable>

      </View>
      {/* <View style={styles.pastel5}>
        <Text style={styles.pasttitulo}>Pastel de vento</Text>
        <Text style={styles.descricao}>Murcho e vazio, igual o coração dela.</Text>
        <Image
      source={require('./assets/pastel_vento.jpg')}
      style={{width:'85%',height:'50%', marginTop:'auto',borderRadius:30}}/>
      <Pressable onPress ={somaVento}>
        <Text style={styles.pasttitulo2}>Adicionar</Text>
      </Pressable>
      </View> */}

      {/* <View style={styles.pastel6}>
        <Text style={styles.pasttitulo}>Pastel de Queijo</Text>
        <Text style={styles.descricao}>Recheio cremoso de queijo derretido.</Text>
        <Image
      source={require('./assets/pastel_queijo.jpg')}
      style={{width:'85%',height:'50%', marginTop:'auto',borderRadius:30}}/>
      <Pressable onPress ={somaQueijo}>
        <Text style={styles.pasttitulo2}>Adicionar</Text>
      </Pressable>
      </View> */}
      <Pressable onPress ={retornaPastel}>
        <Text style={styles.finbutton}>Finalizar pedido</Text>
      </Pressable>
      <Pressable onPress ={esvaziar}>
        <Text style={styles.finbutton2}>Esvaziar carrinho</Text>
      </Pressable>
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 6,
    backgroundColor: '#fca503',
    alignItems: 'center',
    justifyContent: 'center',
    flexWrap:'wrap',
    rowGap: 30,
    columnGap: 20,
    alignContent: 'center',
    flexDirection: 'row'
  },
  container1:{
    flex:3,
    backgroundColor: '#fca503',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titulo: {
  },
  pastel1: {
    backgroundColor: '#4B3621',
    width: 200,
    height: 235,
    alignItems: 'center',
    borderRadius: 20,
  },
  pastel2: {
    backgroundColor: '#C19A6B',
    width: 200,
    height: 235,
    alignItems: 'center',
    justifyContent:'space-around',
    borderRadius: 20,

  },
  pastel3: {
    backgroundColor: '#8D8478',
    width: 200,
    height: 235,
    alignItems: 'center',
    borderRadius: 20,
  },
  pastel4: {
    backgroundColor: '#A0522D',
    width: 200,
    height: 235,
    alignItems: 'center',
    borderRadius: 20,
  },
  pastel5: {
    backgroundColor: '#827B60',
    width: 200,
    height: 235,
    alignItems: 'center',
    borderRadius: 20,
  },
  pastel6: {
    backgroundColor: '#D2B48C',
    width: 200,
    height: 235,
    alignItems: 'center',
    borderRadius: 20,
  },
  pasttitulo:{
    color:'#fff',
    fontSize: 15,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    
  },
  pasttitulo2:{
    color:'#000',
    fontSize: 15,
    textTransform: 'uppercase',
    marginTop: 10,
    backgroundColor: '#FFF',
    fontWeight:'bold',
    width: 90,
    textAlign: 'center',
    borderRadius: 5,
    marginBottom:10
  },
  descricao:{
    color:'#fff',
  },
  finbutton:{
    color:'#FFF',
    fontSize: 25,
    textTransform: 'uppercase',
    backgroundColor: '#000',
    fontWeight:'bold',
    width: 250,
    textAlign: 'center',
    borderRadius: 5,
    marginBottom:10,
  },
  finbutton2:{
    color:'#FFF',
    fontSize: 25,
    textTransform: 'uppercase',
    backgroundColor: '#000',
    fontWeight:'bold',
    width: 270,
    textAlign: 'center',
    borderRadius: 5,
    marginBottom:10,
  },
  nomePastelaria:{
    color:'#fff',
    fontSize: 22,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    marginTop:15,
    textAlign: 'center',
  },
  carrinho:{
    width: 45,
    height: 45,
    resizeMode: 'contain',
    marginBottom: 10,
    backgroundColor:'#FFF',
    borderRadius:10,
    marginTop:'auto',

  },
  endereco:{
    color:'#fff',
    fontSize: 18,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    marginTop:15,
    textAlign: 'center',
  }

});

