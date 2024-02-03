import { StyleSheet, Text, Pressable } from 'react-native'
import { colors } from '../Global/colors'

export const AddButton = ({title, onPress}) => {
  return (
    <Pressable style={styles.container} onPress={onPress}>
        <Text style={styles.text}>{title}</Text>
    </Pressable>
  ) 
}

const styles = StyleSheet.create({
  container:{
      backgroundColor:colors.lila3,
      width:"50%",
      paddingVertical:8,
      marginTop:8,
      borderRadius:20,
  },
  text:{
      color:"white",
      textAlign:"center",
      fontSize:18
  }
})
