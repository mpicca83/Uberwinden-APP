import { StyleSheet, Text, View, Image, Pressable, ScrollView } from 'react-native'
import { useEffect, useState } from 'react'
import { colors } from '../Global/colors'
import { useDispatch } from 'react-redux'
import { addItem } from '../Features/Cart/cartSlice'
import { useGetProductoQuery } from '../App/services/shopServices'
import { showToast } from '../Global/toast'
import Spinner from 'react-native-loading-spinner-overlay'


export const ItemDetail = ({route}) => {

  const [isPressed, setIsPressed] = useState(false)
  const [product, setProduct] = useState([])

  const {id} = route.params

  const dispatch = useDispatch()

  const {data, isLoading} = useGetProductoQuery(id)

  useEffect(()=>{
    !isLoading && setProduct(data)
  },[data])

  const handlePressIn = () => setIsPressed(true)
  const handlePressOut = () => setIsPressed(false)

  const submit = () => {
    dispatch(addItem(product))
    showToast('success','Producto agregado al carrito','',1000)
  }

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
          <Pressable 
            style={[styles.buyNow, isPressed && styles.pressedButton]} 
            onPress={submit}
            onPressIn={handlePressIn}
            onPressOut={handlePressOut}
            >
            <Text style={styles.buyNowText}>Agregar al Carrito</Text>
          </Pressable>
        </View>

      </ScrollView>
      <Spinner
          visible={isLoading}
          textContent={'Cargando...'}
          textStyle={styles.spinnerText}
          color={colors.lila1}
        />
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
  },
  pressedButton: {
    backgroundColor: colors.azul,
    elevation: 5
  },
  spinnerText: {
    color: colors.lila1,
  },
})