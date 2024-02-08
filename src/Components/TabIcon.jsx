import {StyleSheet, Text, View} from 'react-native'
import {Entypo} from "@expo/vector-icons"
import {colors} from '../Global/colors'
import { useSelector } from 'react-redux'

export const TabIcon = ({icon, label, focused}) => {

  const cart = useSelector(state => state.cart.value)

  return (
    <View style={styles.container}>
      <Entypo name={icon} size={30} color={focused ? "white" : colors.lila3}/>
      {label === "Carrito" && cart.cantidad > 0 && (
        <View style={styles.badge}>
          <Text style={styles.badgeText}>{cart.cantidad}</Text>
        </View>
      )}
      <Text style={{...styles.text, ...{color: focused ? "white" : colors.lila3}}}>{label}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        alignItems:"center"
    },
    text:{
        color:"white",
        textAlign:"center"
    },
    badge: {
      position: 'absolute',
      top: 0,
      right: 0,
      backgroundColor: 'red',
      borderRadius: 10,
      minWidth: 20,
      height: 20,
      justifyContent: 'center',
      alignItems: 'center',
    },
    badgeText: {
      color: 'white',
      fontSize: 12,
    },
})