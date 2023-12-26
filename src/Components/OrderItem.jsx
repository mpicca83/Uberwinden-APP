import { StyleSheet, Text, View } from 'react-native'
import { Feather } from "@expo/vector-icons"
import { colors } from '../Global/colors'

export const OrderItem = ({order}) => {

    const total = order.items.reduce((acc, product)=> acc + (product.precio * product.quantity), 0)

    return (
        <View style={styles.container}>
        <View style={styles.textContainer}>
                <Text style={styles.text1}>{new Date(order.fecha).toLocaleString('es-ES')}</Text>
                <Text style={styles.text2}>Total: {total.toLocaleString('es-AR', { style: 'currency', currency: 'ARS' })}</Text>
        </View>
            <Feather name="search" size={30} color="black"/>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:colors.lila3,
        marginVertical:10,
        marginHorizontal: 20,
        padding:10,
        height:80,
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        borderRadius:10,
        borderWidth:2
    },
    textContainer:{
        gap:5
    },
    text1:{
        fontSize:19,
        fontWeight:"bold",
        color: "#ffff"
    },
    text2:{
        fontSize:17,
        color: "#ffff"
    }
})