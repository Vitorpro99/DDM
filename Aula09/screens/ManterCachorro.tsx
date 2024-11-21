import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useState } from 'react';
import { Cachorro } from '../model/Cachorro';
import { CachorroService } from '../service/CachorroService';
import styles from '../estilo';

const ManterCachorro = () => {
  const [formCachorro, setFormCachorro] = useState<Partial<Cachorro>>({});

  const Limpar = () => {
    setFormCachorro({});
  }

  const Salvar = async () => {
    const cachorro = new Cachorro(formCachorro);
    const resultado = await CachorroService.create(cachorro);
    console.log(resultado);
    cachorro.latir();
    alert('Cachorro ' + cachorro.id + " - " + cachorro.nome + ' adicionado!');
    Limpar();
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>CADASTRO DE CACHORROS</Text>

      <TextInput
        style={styles.input}
        placeholder='Digite o ID'
        value={formCachorro.id?.toString()}
        onChangeText={
          (valor) => setFormCachorro({...
            formCachorro, id: valor 
          })
        }
      />

      <TextInput
        style={styles.input}
        placeholder='Digite o nome'
        value={formCachorro.nome}
        onChangeText={
          (valor) => setFormCachorro({...
            formCachorro, nome: valor 
          })
        }
      />

      <TextInput
        style={styles.input}
        placeholder='Digite o raca'
        value={formCachorro.raca}
        onChangeText={
          (valor) => setFormCachorro({...
            formCachorro, raca: valor 
          })
        }
      />

      <TextInput
        style={styles.input}
        placeholder='Digite a pelagem'
        value={formCachorro.pelagem}
        onChangeText={
          (valor) => setFormCachorro({...
            formCachorro, pelagem: valor 
          })
        }
      />

      <TextInput
        style={styles.input}
        placeholder='Digite a data de nascimento'
        value={formCachorro.datanasc}
        onChangeText={
          (valor) => setFormCachorro({...
            formCachorro, datanasc: valor 
          })
        }
      />
      
      <TouchableOpacity onPress={Limpar} style={styles.botaoSec}>
        <Text style={styles.botaoSecText}>Limpar</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={Salvar} style={styles.botao}>
        <Text style={styles.botaoText}>Salvar</Text>
      </TouchableOpacity>

      
    </View>
  );
}

export default ManterCachorro;