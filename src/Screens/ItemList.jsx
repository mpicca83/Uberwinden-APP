import { FlatList, StyleSheet, Text } from 'react-native'
import productos from "../Data/productos.json"
import { useEffect, useState } from 'react'
import { colors } from '../Global/colors'
import { ProductItem} from '../Components'

export const ItemList = ({navigation, route}) => {

  const [products, setProducts] = useState([])

  const {item, input} = route.params

  useEffect(()=>{

    if(input){

      const normalizedSearch = input.toUpperCase()

      const filtered = productos.filter((product) => {
        const productInfo = `${product.titulo.toUpperCase()} ${product.color} ${product.categoria.join(' ')}`
        return productInfo.includes(normalizedSearch)
      })

      setProducts(filtered)

    }else{
      const productsCategory = productos.filter(product => product.categoria.includes(item))
      setProducts(productsCategory)
    }
    
  },[item, input])
 
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
  goBack:{
    flexDirection:'row',
    alignItems:'center',
    backgroundColor:colors.celeste1,
    padding:10,
    paddingStart:30,
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