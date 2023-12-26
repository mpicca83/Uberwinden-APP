import {StyleSheet, Text, View} from 'react-native'
import {Entypo} from "@expo/vector-icons"
import {colors} from '../Global/colors'

export const TabIcon = ({icon, label, focused}) => {
  return (
    <View style={styles.container}>
      <Entypo name={icon} size={30} color={focused ? "white" : colors.lila3}/>
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
    }
})