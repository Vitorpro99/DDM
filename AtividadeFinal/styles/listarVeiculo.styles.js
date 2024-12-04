import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    image: {
        width: 200, 
        height: 200, 
        resizeMode: 'cover',
        justifyContent:'left',
        border: 1,
        borderRadius: 12
    },
    titulo:{
        fontSize: 20,
        fontWeight: 'bold', 
        marginBottom: 10, 
        alignSelf:'left',
        marginLeft:25
    },
    box:{
        justifyContent: 'left',
        marginTop:25,
        alignContent: 'center',
        alignItems: 'center',
        flex:1,
        flexDirection:'row',        
        backgroundColor: '#f1f1f1',
        
    },
    delet:{
        width: '50%',
        height: 'auto',
        backgroundColor: '#ff0000', 
        textAlign:'center',
        border: 1,
        borderRadius:10,
        justifyContent:'right'
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
        marginLeft:10
        
        
    },
    textbutton:{
        textAlign:'center',
        color:'white',
        
    },
    info:{
        flex:1,
        flexDirection:'row',
        justifyContent:'right',
        marginRight:1,
        padding:5,
        gap:'50%'

    },  
    exbox:{
        paddingHorizontal:10,
        // gap: '10px'
    },
    preco:{


        fontWeight:'semibold'
    }
    
});
export default styles