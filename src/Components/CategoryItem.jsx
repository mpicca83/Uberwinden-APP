import { Pressable, StyleSheet, Text } from 'react-native'
import { colors } from '../Global/colors'

export const CategoryItem = ({item, setCategorySelected}) => {

  return (
    <Pressable style={styles.container} onPress={()=>setCategorySelected(item)}>
        <Text style={styles.text}>{item}</Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
    container:{
        width:"60%",
        marginHorizontal:"20%",
        backgroundColor:colors.lila3,
        margin:7,
        padding:10,
        justifyContent:"center",
        alignItems:"center",
        borderRadius:25,
        elevation:4,
    },
    text:{
      fontWeight:'bold',
      color:'#FFFFFF',
    }
})