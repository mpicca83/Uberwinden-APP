import { FlatList, Pressable, StyleSheet, Text } from 'react-native'
import productos from "../Data/productos.json"
import { useEffect, useState } from 'react'
import { colors } from '../Global/colors'
import {Header, ProductItem} from '../Components'
import { Ionicons } from '@expo/vector-icons'

export const ItemList = ({ search, setSearch, category, setCategorySelected, setProductDetailId}) => {

  const [products, setProducts] = useState([])

  useEffect(()=>{

    if(search){

      const normalizedSearch = search.toUpperCase()

      const filtered = productos.filter((product) => {
        const productInfo = `${product.titulo.toUpperCase()} ${product.color} ${product.categoria.join(' ')}`
        return productInfo.includes(normalizedSearch)
      })

      setProducts(filtered)

    }else{
      const productsCategory = productos.filter(product => product.categoria.includes(category))
      setProducts(productsCategory)
    }
    
  },[search, category])
 
  return (
    <>
      <Header title={category ? `Categoría: ${category}` : `Búsqueda: ${search}`} setSearch={setSearch} setProductDetailId={setProductDetailId} />

      <Pressable style={styles.goBack} onPress={()=>{
        setCategorySelected('')
        setSearch('')
      }}>
        <Ionicons name="md-chevron-back-outline" size={24} color="black" /> 
        <Text>Volver</Text>
      </Pressable>
      {        
        products.length > 0
        ?<FlatList
          style={styles.container}
          data={products}
          keyExtractor={item => item.id}
          renderItem={({item})=> <ProductItem item={item} setProductDetailId={setProductDetailId}/>}
        />
        :<Text style={styles.text}>No existen productos para la búsqueda realizada</Text>
      }    
    </>
  )
}

const styles = StyleSheet.create({
  container:{
    backgroundColor:colors.celeste1,
  },
  goBack:{
    flexDirection:'row',
    alignItems:'center',
    backgroundColor:colors.celeste1,
    padding:10,
    paddingStart:30,
  },
  text:{
    color:'black',
    backgroundColor:colors.celeste1,
    height:'100%',
    textAlign:'center',
    fontSize:20,
    paddingHorizontal:70,
    paddingTop:20,
    color:colors.lila3
  }
})