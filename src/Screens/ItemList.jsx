import { FlatList, StyleSheet, Text } from 'react-native'
import { useEffect, useState } from 'react'
import { colors } from '../Global/colors'
import { ProductItem } from '../Components'
import { useSelector } from 'react-redux'

export const ItemList = ({navigation}) => {

  const productosFiltrado = useSelector((state) => state.shop.value.productosFiltrado)

  const [products, setProducts] = useState(productosFiltrado)

  useEffect(()=>{
    setProducts(productosFiltrado)
  },[productosFiltrado])
 
  return (
    <>
      {        
        products.length > 0
        ?<FlatList
          style={styles.container}
          data={products}
          keyExtractor={item => item.id}
          renderItem={({item})=> <ProductItem item={item} navigation={navigation} />}
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
  text:{
    backgroundColor:colors.celeste1,
    height:'100%',
    textAlign:'center',
    fontSize:20,
    paddingHorizontal:70,
    paddingTop:20,
    color:colors.lila1
  }
})