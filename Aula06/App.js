import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';

import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

function TelaInicial({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Bem vindo a tela inicial</Text>
      <Button title="Ir para Configurações" onPress={() => navigation.navigate('Configurações')} />
    </View>
  )
}

function Configuracoes({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Configurações do Aplicativo</Text>
    </View>
  )
}

const Tab = createBottomNavigator();

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Tela Inicial">
        <Drawer.Screen name="Tela Inicial" component={TelaInicial} />
        <Drawer.Screen name="Configurações" component={Configuracoes} />
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