import { StyleSheet } from 'react-native'

const stylesOver = StyleSheet.create({
    image: {
         
        border: 1,
        borderRadius: 12,
        shadowColor:'black',
        shadowOffset:1,
        shadowOpacity:0.5,
        shadowRadius:2,
        elevation:5,
        marginBottom:10,
        height:225,
        width:400  
    },
    titulo:{
        fontSize: 30,
        fontWeight: 'bold', 
        marginBottom: 10, 
        alignSelf:'center',
        color:'white'
        
    },
    tituloDescricao:{
        fontSize: 20,
        fontWeight: 'bold', 
        marginBottom: 10, 
        alignSelf:'center',
        color:'white'
    },
    overlay:{
        border:1,
        borderRadius:20,
    },
    seletor:{
        width: '90%',
        color:'red',
        width:'auto',
    },
boxExterna:{
    alignContent:'center',
    alignItems:'center',
    flexDirection:'column',        
    

},
    delet:{
        width: '50%',
        height: 'auto',
        backgroundColor: '#ff0000', 
        textAlign:'center',
        border: 1,
        borderRadius:10,
        justifyContent:'right',
        marginBottom:10
    },
    fechar:{
        width: '50%',
        height: 'auto',
        backgroundColor: '#34a600', 
        textAlign:'center',
        border: 1,
        borderRadius:10,
        justifyContent:'right',
        marginBottom:10
    },
    box2:{
        
        justifyContent:'top',
        alignItems:'center',
        flexDirection:'column',
        border:2,

        flex:2,
        height:'80%',
        borderRadius:25,
        backgroundColor:'white',
        marginLeft:10,
        shadowColor:'black',
        shadowOffset:1,
        shadowOpacity:0.5,
        shadowRadius:5,
        elevation:5,
        marginBottom:10,
    },
    details:{
        width: '50%',
        height: 'auto',
        backgroundColor: '#62c43f', 
        textAlign:'center',
        border: 1,
        borderRadius:10,
        justifyContent:'right',
        marginBottom:10
    },
    textbutton:{
        textAlign:'center',
        color:'white',
        marginBottom:10
    },
    info:{

        flexDirection:'row',
        justifyContent:'center',
        // marginRight:0,
        margin:5,
        gap:'15%',
        width:'75%',

    },
    descricao:{
        fontSize:20,
        marginBottom:20,
        color:'white'
    },
    exbox:{
        paddingHorizontal:10,
        // gap: '10px'
    },
    preco:{
        fontWeight:'bold',
        fontSize: 15,
        color:'white'
    },
    kmRodados:{
        fontWeight:'bold',
        color:'white'
    }
    
});
export default stylesOver