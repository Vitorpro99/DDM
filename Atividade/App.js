import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image, Pressable } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.pastel1}>
      <Text style={styles.pasttitulo}>Pastel de Carne</Text>
      <Text style={styles.descricao}>Recheio suculento e escuro, clássico de carne.</Text>
      <Image
      source={require('./assets/pastel_carne.jpg')}
      style={{width:90,height:'25%', marginTop:'auto'}}/>
      <Pressable>
        <Text style={styles.pasttitulo2}>Adicionar</Text>
      </Pressable>
    
      </View>

      <View style={styles.pastel2}>
      <Text style={styles.pasttitulo}>Pastel de frango</Text>
      <Text style={styles.descricao}>Recheio dourado e leve de frango desfiado.</Text>
      <Image
      source={require('./assets/pastel_frango.jpg')}
      style={{width:90,height:'25%',marginTop:'auto'}}/>
      <Pressable>
        <Text style={styles.pasttitulo2}>Adicionar</Text>
      </Pressable>

      </View>
      <View style={styles.pastel3}>
        <Text style={styles.pasttitulo}>Pastel de peixe</Text>
        <Text style={styles.descricao}>Recheio suave com toque de peixe fresco.</Text>
        <Image
      source={require('./assets/pastel_peixe.jpg')}
      style={{width:90,height:'25%', marginTop:'auto'}}/>
      <Pressable>
        <Text style={styles.pasttitulo2}>Adicionar</Text>
      </Pressable>
      </View>

      <View style={styles.pastel4}>
        <Text style={styles.pasttitulo}>Pastel de Pizza</Text>
        <Text style={styles.descricao}>Recheio de queijo e molho, clássico sabor pizza.</Text>
        <Image
      source={require('./assets/pastel_pizza.jpg')}
      style={{width:90,height:'25%', marginTop:'auto'}}/>
      <Pressable>
        <Text style={styles.pasttitulo2}>Adicionar</Text>
      </Pressable>

      </View>
      <View style={styles.pastel5}>
        <Text style={styles.pasttitulo}>Pastel de vento</Text>
        <Text style={styles.descricao}>Murcho e vazio, igual o coração dela.</Text>
        <Image
      source={require('./assets/pastel_vento.jpg')}
      style={{width:90,height:'25%', marginTop:'auto'}}/>
      <Pressable>
        <Text style={styles.pasttitulo2}>Adicionar</Text>
      </Pressable>
      </View>

      <View style={styles.pastel6}>
        <Text style={styles.pasttitulo}>Pastel de Queijo</Text>
        <Text style={styles.descricao}>Recheio cremoso de queijo derretido.</Text>
        <Image
      source={require('./assets/pastel_queijo.jpg')}
      style={{width:90,height:'25%', marginTop:'auto'}}/>
      <Pressable>
        <Text style={styles.pasttitulo2}>Adicionar</Text>
      </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    flexWrap:'wrap',
    rowGap: 40,
    columnGap: 20,
    alignContent: 'center',
    flexDirection: 'row'
  },
  titulo: {
  },
  pastel1: {
    backgroundColor: '#4B3621',
    width: 150,
    height: 200,
    alignItems: 'center',
  },
  pastel2: {
    backgroundColor: '#C19A6B',
    width: 150,
    height: 200,
    alignItems: 'center',
    justifyContent:'space-around'

  },
  pastel3: {
    backgroundColor: '#8D8478',
    width: 150,
    height: 200,
    alignItems: 'center',
  },
  pastel4: {
    backgroundColor: '#A0522D',
    width: 150,
    height: 200,
    alignItems: 'center',
  },
  pastel5: {
    backgroundColor: '#827B60',
    width: 150,
    height: 200,
    alignItems: 'center',
  },
  pastel6: {
    backgroundColor: '#D2B48C',
    width: 150,
    height: 200,
    alignItems: 'center',
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
  }

});

