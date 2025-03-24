import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    image: {
         
        border: 1,
        borderRadius: 12,
        shadowColor:'black',
        shadowOffset:1,
        shadowOpacity:0.5,
        shadowRadius:5,
        elevation:5,
        marginBottom:10,
        height:150,
        width:220
        
        
    },
    titulo:{
        fontSize: 19,
        fontWeight: 'bold', 
        marginBottom: 10, 
        alignSelf:'left',
        marginLeft: 10,
        
    },
    seletor:{
        width: '90%',
        color:'red',
        width:'auto',
    },
    mainContainer:{
        flex:1,
        backgroundColor: '#f2f2f2',
        padding:10,
        alignContent:'center',
        justifyContent:'center',
        alignItems:'center',
        paddingTop:20,
        paddingBottom:20,
        width: '100%',
        borderRadius:10,
        marginBottom:20,
    },
    botao:{
        width: '50%',
        height: 'auto',
        backgroundColor: '#ff0000', 
        textAlign:'center',
        border: 1,
        borderRadius:10,
        justifyContent:'right',
        marginBottom:10
    },
    box:{
        justifyContent: 'center',
        marginTop:25,
        alignContent: 'center',
        alignItems: 'center',
        flex:1,
        flexDirection:'row',        
        backgroundColor: '#eb4034',
        padding:'10',
        border:1,
        borderRadius:10
        
        
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
        
    },
    info:{
        flex:1,

        flexDirection:'row',
        justifyContent:'center',
        // marginRight:0,
        margin:5,
        gap:'15%',
        width:'75%',
        

    },  
    exbox:{
        paddingHorizontal:10,
        // gap: '10px'
    },
    preco:{
        fontWeight:'bold',
        fontSize: 15,
    },
    kmRodados:{
        fontWeight:'semibold'
    },
    textInput:{
        width: '75%',
        height: 40,
        borderColor: '#000',
        borderWidth: 1,
        marginBottom:10,
        color:'black',
        border: 1,
        borderRadius:30
    }
    
});
export default styles