import { StyleSheet, View, Pressable, TextInput } from 'react-native'
import { colors } from '../Global/colors'
import { AntDesign , Entypo} from "@expo/vector-icons"
import { useState } from 'react'
import { useGetAllProductsQuery } from '../App/services/shopServices'

export const Search = ({ navigation }) => {

    const [input, setInput] = useState("")

    const {data} = useGetAllProductsQuery()

    const buscar = () =>{
        const normalizedSearch = input.toUpperCase()
        const productosFiltrado = data.filter((product) => {
            const productInfo = `${product.titulo.toUpperCase()} ${product.color} ${product.categoria}`
            return productInfo.includes(normalizedSearch)
        })

        navigation.navigate("Busqueda",{productosFiltrado, input})
        setInput("")
    }

    const borrar = () => {
        setInput("")
    }

  return (
    <View style={styles.container}> 
        <TextInput style={styles.input} placeholder='Buscar producto' value={input} onChangeText={(t)=> setInput(t)}  />
        <Pressable onPress={buscar}>
            <AntDesign name='search1' color="black" size={25}/>
        </Pressable>
        <Pressable onPress={borrar}>
            <Entypo name='circle-with-cross' color="black" size={25}/>
        </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        width:"100%",
        flexDirection:"row",
        alignItems:"center",
        gap:10,
        justifyContent: 'center'
    },
    input:{
      backgroundColor:colors.aguamarino2,
      width:"70%",
      borderWidth:2,
      borderRadius:25,
      paddingHorizontal:15,
      paddingVertical:5,
      marginVertical:20,
    },
})