import { FlatList, StyleSheet } from 'react-native'
import categorias from "../Data/categorias.json"
import { colors } from '../Global/colors'
import { CategoryItem } from './CategoryItem'
export const Categories = ({category}) => {

  return (
      <FlatList
          style={styles.container}
          data={categorias}
          keyExtractor={item => item}
          renderItem={({item}) => <CategoryItem setCategorySelected={category} item={item}/>}
      />
  )
}

const styles = StyleSheet.create({
    container:{
      backgroundColor:colors.celeste1,
      height:"100%"
    }
})