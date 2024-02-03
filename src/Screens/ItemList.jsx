import { FlatList, StyleSheet, Text } from 'react-native'
import { useEffect, useState } from 'react'
import { colors } from '../Global/colors'
import { ProductItem } from '../Components'
import { useGetProductosQuery } from '../App/services/shopServices'
import Spinner from 'react-native-loading-spinner-overlay'

export const ItemList = ({navigation, route}) => {

  const {item, productosFiltrado} = route.params
  
  const {data, isLoading} = useGetProductosQuery(item)

  const [products, setProducts] = useState([])

  useEffect(()=>{
    if (!isLoading && productosFiltrado === undefined) {
      setProducts(Object.values(data))
    }
   },[data])

  useEffect(()=>{
    productosFiltrado !== undefined && setProducts(Object.values(productosFiltrado))
  },[productosFiltrado])
 
  return (
    <>
      { 
        isLoading
        ?<Spinner
          visible={isLoading}
          textContent={'Cargando...'}
          textStyle={styles.spinnerText}
          color={colors.lila1}
          />
        :products.length > 0
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
  },
  spinnerText: {
    color: colors.lila1,
  },
})