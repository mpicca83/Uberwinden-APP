import { FlatList, StyleSheet } from 'react-native'
import { colors } from '../Global/colors'
import { CategoryItem } from './CategoryItem'
import { useGetCategoriasQuery } from '../App/services/shopServices'

export const Categories = ({navigation}) => {
  
  const {data} = useGetCategoriasQuery()

  return (
      <FlatList
          style={styles.container}
          data={data}
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