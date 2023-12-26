import { FlatList, StyleSheet } from 'react-native'
import { colors } from '../Global/colors'
import { CategoryItem } from './CategoryItem'
import { useSelector} from 'react-redux'

export const Categories = ({navigation}) => {
  
  const categorias = useSelector((state) => state.shop.value.categorias)

  return (
      <FlatList
          style={styles.container}
          data={categorias}
          keyExtractor={item => item}
          renderItem={({item}) => <CategoryItem item={item} navigation={navigation}/>}
      />
  )
}

const styles = StyleSheet.create({
    container:{
      backgroundColor:colors.celeste1,
      height:"100%"
    }
})