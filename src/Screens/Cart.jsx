import { FlatList, StyleSheet, Text, View, Pressable } from 'react-native'
import { useState } from 'react'
import { colors } from '../Global/colors'
import { CartItem } from '../Components'
import { useSelector } from 'react-redux'
import { usePostOrdenMutation } from '../App/services/shopServices'
import { useDispatch } from 'react-redux'
import { removeAllItem } from '../Features/Cart/cartSlice'
import { showToast } from '../Global/toast'

export const Cart = () => {

  const [isPressed, setIsPressed] = useState(false)

  const dispatch = useDispatch()

  const cart = useSelector(state => state.cart.value)
  const [postOrder] = usePostOrdenMutation()
 
  const handlePressIn = () => setIsPressed(true)
  const handlePressOut = () => setIsPressed(false)

  const press = async () => {
    if(cart.items.length > 0){
      try {
        const result = await postOrder(cart)
        dispatch(removeAllItem())
  
        if (result.data) {
          showToast('success', 'El pedido fue confirmado', `Se registro bajo la orden n°: ${result.data.name}`,4000)
        }
      } catch (error) {
        console.log(error)
      }
    }
  }

  return (
    <View style={styles.container}>
      {        
        cart.items.length > 0
        ?<FlatList
          style={styles.list}
          data={cart.items}
          keyExtractor={item => item.id}
          renderItem={({item})=> <CartItem item={item} />}
        />
        :<Text style={styles.carritoVacio}>El Carrito esta vacío.</Text>
      }    
        <Pressable 
          style={[styles.confirmContainer, isPressed && styles.pressedButton]}
          onPress={()=> press()}
          onPressIn={handlePressIn}
          onPressOut={handlePressOut}
          >
            <Text style={styles.text}>Total: {cart.total.toLocaleString('es-AR', { style: 'currency', currency: 'ARS' })} </Text>
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
  },
  pressedButton: {
    backgroundColor: colors.lila3,
    backgroundColor: colors.azul,
    elevation: 5
  },
})