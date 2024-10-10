import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

function TelaInicial({ navigation }) {
    return(
      <View>
        <Text>Bem vindo a tela inicial</Text>
        <Button title="Ir para as configurações" onPress={() => navigation.navigate('configuracoes')}/>
      </View>
    )
}

function Configuracoes({ navigation }) {
  return(
    <View>
      <Text>Bem vindo a tela de configurações</Text>
    </View>
  )
}

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="telaInicial">
        <Drawer.Screen name="Tela inicial" component={TelaInicial}/>
        <Drawer.Screen name="Configuraçoes" component={Configuracoes}/>
        
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
