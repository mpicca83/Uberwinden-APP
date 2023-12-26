import { Pressable, StyleSheet, Text } from 'react-native'
import { colors } from '../Global/colors'
import { useDispatch } from 'react-redux'
import { setProductosFiltradoPorCategoria } from '../Features/Shop/shopSlice'

export const CategoryItem = ({item, navigation}) => {

  const dispatch = useDispatch()

  return (
    <Pressable style={styles.container} onPress={()=> {
      dispatch(setProductosFiltradoPorCategoria(item))
      navigation.navigate("Categorias",{item})
    }}>
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
        height:50
    },
    text:{
      fontWeight:'bold',
      color:'#FFFFFF',
    }
})