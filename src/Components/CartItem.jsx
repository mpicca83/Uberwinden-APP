import { Text, StyleSheet, View } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../Global/colors'

export const CartItem = ({item}) => {

    return(
        <View style={styles.container}>
            <View style={styles.textContainer}>
                <Text style={styles.text1}>{item.titulo}</Text>
                
                <View style={styles.section}>
                    <Text style={styles.text2}>Color: {item.color}</Text>
                    <Text style={styles.text2}>Talle: {item.talle}</Text>
                </View>

                <View style={styles.section}>
                    <Text style={styles.text2}>Cantidad: {item.quantity}</Text>
                    <Text style={styles.text2}>Precio: ${item.precio}</Text>
                </View>

            </View>
            <Ionicons name="trash-outline" size={30} color='black' />
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:colors.lila3,
        marginVertical:10,
        marginHorizontal: 20,
        paddingVertical:10,
        paddingHorizontal:20,
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        borderRadius:10,
        borderWidth:2
    },
    textContainer:{
        gap:5
    },
    section:{
        flexDirection:"row",
        gap:20,
        justifyContent:"space-between",
    },
    text1:{
        fontSize:20,
        color:'#ffff',
        fontWeight:'bold',
        marginBottom:10
    },
    text2:{
        fontSize:17,
        color: '#ffff',
    }
})