import {StyleSheet, StatusBar} from 'react-native'
export default StyleSheet.create({
    item:{
        borderWidth: 2,
    marginVertical: 10,
    borderRadius: 10,
    borderColor:'transparent',
    alignContent: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor:'white'
    },
    imagem:{
        width: 200,
        height: 100,
        marginBottom: 10,
        borderRadius: 10,
        marginHorizontal: 5, 
    },
    titulo:{
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
    }
})