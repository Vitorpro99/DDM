import {StyleSheet, StatusBar} from 'react-native'
export default StyleSheet.create({
    item:{
        borderWidth: 2,
    marginVertical: 10,
    borderRadius: 10,
    borderColor:'transparent',
    alignContent: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor:'white'
    },
    imagem:{
        width: 400,
        height: 200,
        marginBottom: 10,
        borderRadius: 10,
        marginHorizontal: 5, 
    },
    titulo:{
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    descricao:{
        marginHorizontal:20
    },
    input: {
        backgroundColor: 'white',
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 10,
        marginTop: 2,
        alignSelf:'center',
        
      },
      informacoes:{
        alignSelf:'center',
      },
      container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical:20
    },

})