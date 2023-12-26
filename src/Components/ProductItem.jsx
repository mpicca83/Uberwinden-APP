import { StyleSheet, Text, Image, Pressable } from 'react-native'
import { colors } from '../Global/colors'
import { useDispatch } from 'react-redux'
import { setProductoSeleccionado } from '../Features/Shop/shopSlice'

export const ProductItem = ({item, navigation}) => {

  const dispatch = useDispatch()

  return (
    <Pressable style={styles.container} onPress={()=> {
      dispatch(setProductoSeleccionado(item.id))
      navigation.navigate('Detalle', {id:item.id})
    }}>
      <Text style={styles.text} >{item.titulo}</Text>
      <Image
            style={styles.image}
            resizeMode='cover'
            source={{uri:item.imagen}}
        />
    </Pressable>
  )
}

const styles = StyleSheet.create({
   container:{
        height:100,
        backgroundColor:colors.lila3,
        marginHorizontal:"10%",
        marginVertical:10,
        paddingHorizontal:10,
        paddingVertical:15,
        borderRadius:5,
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between",
        gap:30,

    },
    text:{
      textAlign:"center",
      fontSize:20,
      flex:3,
      color:'#fff'
    },
    image:{
        height:90,
        flex:2
    }
})