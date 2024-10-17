import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import Icon2 from 'react-native-vector-icons/Feather';
import Icon3 from 'react-native-vector-icons/FontAwesome5'
function TelaInicial() {
  return (
    <View style={styles.container}>
      <Text>Bem vindo a tela inicial</Text>
    </View>
  )
}

function Configuracoes() {
  return (
    <View style={styles.container}>
    </View>
  )
}
function Usuario() {
  return (
    <View style={styles.container}>
      <Text>Bem vindo a tela inicial</Text>
    </View>
  )
}
function Carrinho() {
  return (
    <View style={styles.container}>
      <Text>Bem vindo a tela inicial</Text>
    </View>
  )
}
export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Tela Inicial" component={TelaInicial} 
        options={
          {
            tabBarIcon: () => (<Icon name="home" size={25} color="green"/>),
            tabBarActiveTintColor:"white",
            tabBarActiveBackgroundColor:"black",
            tabBarShowLabel: false
          }
        }/>
        <Tab.Screen name="Configurações" component={Configuracoes}options={
          {
            tabBarIcon: () => (<Icon name="settings" size={25} color="green"/>),
            tabBarActiveTintColor:"white",
            tabBarActiveBackgroundColor:"black",
            tabBarShowLabel: false
          }
        }/>
        <Tab.Screen name="Carrinho" component={Carrinho}options={
          {
            tabBarIcon: () => (<Icon3 name="shopping-cart" size={25} color="green"/>),
            tabBarActiveTintColor:"white",
            tabBarActiveBackgroundColor:"black",
          }
        }/>
        <Tab.Screen name="Usuário" component={Usuario}options={
          {
            tabBarIcon: () => (<Icon2 name="user" size={25} color="green"/>),
            tabBarActiveTintColor:"white",
            tabBarActiveBackgroundColor:"black",
          }
        }/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}
const Tab = createBottomTabNavigator();

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
