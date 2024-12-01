import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    image: {
        width: 200, // Largura da imagem
        height: 200, // Altura da imagem
        resizeMode: 'cover', // Ajusta como a imagem será exibida
    },
    titulo:{
        fontSize: 50, // Tamanho do texto
        fontWeight: 'bold', // Estilo do texto
        marginBottom: 10, // Margem inferior do texto
        textAlign: 'center',
    
    },
    box:{
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        
        backgroundColor: '#f1f1f1', // Cor do fundo da caixa
        
    },
    delet:{
        width: 200,
        height: 50,
        backgroundColor: '#ff0000', // Cor do botão deletar
    }
});
export default styles