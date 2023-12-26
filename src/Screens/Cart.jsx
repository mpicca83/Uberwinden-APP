import {FlatList, StyleSheet, Text, View, Pressable} from 'react-native'
import cartProductos from "../Data/cart.json"
import {useEffect, useState} from 'react'
import {colors} from '../Global/colors'
import {CartItem} from '../Components'

export const Cart = () => {

    const [cart,setCart] = useState([])
    const [total ,setTotal] = useState(0)

    useEffect(()=>{
        setCart(cartProductos)
    },[])

    useEffect(()=>{
        const total = cart.reduce((acc,product)=> acc + (product.precio * product.quantity), 0)
        setTotal(total)
    },[cart])
 
  return (
    <View style={styles.container}>
      {        
        cart.length > 0
        ?<FlatList
          style={styles.list}
          data={cart}
          keyExtractor={item => item.id}
          renderItem={({item})=> <CartItem item={item} />}
        />
        :<Text style={styles.carritoVacio}>El Carrito esta vacío.</Text>
      }    
        <Pressable style={styles.confirmContainer}>
            <Text style={styles.text}>Total: {total.toLocaleString('es-AR', { style: 'currency', currency: 'ARS' })} </Text>
            <Text style={styles.text}>Confirmar</Text>
        </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    backgroundColor:colors.celeste1,
    flex:1,
  },
  carritoVacio:{
    backgroundColor:colors.celeste1,
    height:'100%',
    textAlign:'center',
    fontSize:20,
    paddingHorizontal:70,
    paddingTop:20,
    color:colors.lila1
  },
  confirmContainer:{
    backgroundColor:colors.lila2,
    paddingVertical:15,
    paddingHorizontal:20,
    flexDirection:"row",
    justifyContent:"space-between",

    elevation:6,
    position:"absolute",
    bottom:5,
    left:20,
    right:20,
    borderRadius:15,
},
text:{
  color:"white",
  fontSize:18,
},
list:{
  marginBottom:55
}
})