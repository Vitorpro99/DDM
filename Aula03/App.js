import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      
    <View style={styles.view1}>
      <Text>Ciano</Text>
      <Button title='selecionar' />
    </View>
    <View style={styles.view2}>  
    <Text>Laranja</Text>
    </View>
    <View style={styles.view3}>
      <Text>Verde</Text>
    </View>
    <View style={styles.view1}>
      <Text>Ciano</Text>
    </View>
    <View style={styles.view2}>  
    <Text>Laranja</Text>
    </View>
    <View style={styles.view3}>
      <Text>Verde</Text>
    </View>
    

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection:'column',
    flexWrap:'wrap',
    rowGap:150,
    columnGap:100,
    alignContent: 'center'
  },
  view1:{
    backgroundColor: 'cyan',
    width:100,
    height:200,
  },
  view2:{
    backgroundColor:'orange',
    width:100,
    height:200,
  },
  view3:{
    backgroundColor: 'green', 
    width:100,
    height:200,
  }
});
