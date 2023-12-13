import { StyleSheet, Text, View, Image, Pressable } from 'react-native'
import React, { useEffect, useState } from 'react'
import productos from "../Data/productos.json"
import { colors } from '../Global/colors'
import { Header } from '../Components'
import { Ionicons } from '@expo/vector-icons'

export const ItemDetail = ({ search, setSearch, productDetailId, setProductDetailId}) => {

  const [product, setProduct] = useState({})

  useEffect(()=>{
    const productFind = productos.find(product => product.id === productDetailId)
    setProduct(productFind)
  },[])

  useEffect(()=>{
    // setProductDetailId('')
  },[search])

  return (
    <View style={styles.container}>

      <Header title='Detalle' setSearch={setSearch} setProductDetailId={setProductDetailId}/>

      <Pressable style={styles.goBack} onPress={()=> setProductDetailId('')}>
        <Ionicons name="md-chevron-back-outline" size={24} color="black" /> 
        <Text>Volver</Text>
      </Pressable>

      <View style={styles.content} >
        
        <Image
          style={styles.image}
          source={{uri:product.imagen}}
          resizeMode='contain'
        />

        <View style={styles.containerText}>
          <Text style={styles.title}>{product.titulo}</Text>
          <Text>{product.descripcion}</Text>
        </View>

        <View style={styles.containerPrice}>
          <Text style={styles.price}>$ {product.precio}</Text>
          <Pressable style={styles.buyNow}>
            <Text style={styles.buyNowText}>Comprar</Text>
          </Pressable>
        </View>

      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:colors.celeste1,
  },
  content:{
    alignItems:"center",
    height:"100%",
  },
  image:{
    width:"80%",
    height:220,
    borderRadius:20,
  },
  goBack:{
    flexDirection:'row',
    alignItems:'center',
    padding:10,
    paddingStart:30
  },
  containerText:{
    gap:20,
    paddingHorizontal:20,
    paddingVertical:20
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