import { StyleSheet, Text, View, Image, Pressable, ScrollView } from 'react-native'
import { colors } from '../Global/colors'
import { useSelector } from 'react-redux'

export const ItemDetail = () => {

  const product = useSelector((state) => state.shop.value.productoSeleccionado)

  return (
    <View style={styles.container}>

      <ScrollView style={styles.content} >
        
        <Image
          style={styles.image}
          source={{uri:product.imagen}}
          resizeMode='contain'
        />

        <View style={styles.containerText}>
          <Text style={styles.title}>{product.titulo}</Text>
          <Text>{product.descripcion}</Text>
        </View>

        <View style={styles.containerData}>
          <Text style={styles.data}>Talle: {product.talle}</Text>
          <Text style={styles.data}>Color: {product.color}</Text>
        </View>
        
        <View style={styles.containerPrice}>
          <Text style={styles.price}>$ {product.precio}</Text>
          <Pressable style={styles.buyNow}>
            <Text style={styles.buyNowText}>Comprar</Text>
          </Pressable>
        </View>

      </ScrollView>

    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:colors.celeste1,
  },
  content:{
    height:"100%",
  },
  image:{
    width:"80%",
    height:180,
    borderRadius:20,
    alignSelf:'center'
  },
  containerText:{
    gap:5,
    paddingHorizontal:20,
    paddingTop:10
  },
  containerData:{
    flexDirection:'row',
    justifyContent:'space-evenly',
    paddingVertical:10
  },
  data:{
    fontWeight:'bold',
  },
  containerPrice:{
    width:"100%",
    flexDirection:"row",
    justifyContent:"space-around",
    alignItems:"center",
    marginVertical:10
  },
  title:{
    fontSize:20,
    fontWeight:"bold"
  },
  price:{
    fontSize:30
  },
  buyNow:{
    backgroundColor:colors.lila2,
    paddingVertical:10,
    paddingHorizontal:20,
    borderRadius:5,
  },
  buyNowText:{
    color:"white"
  }
})