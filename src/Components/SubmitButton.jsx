import { StyleSheet, Text, Pressable } from 'react-native'
import { colors } from '../Global/colors'

export const SubmitButton = ({title, onPress}) => {
   
  return (
        <Pressable style={styles.button} onPress={onPress}>
                <Text style={styles.text}>{title}</Text>
        </Pressable>
  )
}

const styles = StyleSheet.create({
    button:{
        width:"60%",
        backgroundColor:colors.lila3,
        padding:10,
        alignItems:"enter",
        borderRadius:10
    },
    text:{
        textAlign:"center",
        color:"#ffff",
        fontSize:18,
    }
})
