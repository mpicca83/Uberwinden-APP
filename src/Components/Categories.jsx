import { FlatList, StyleSheet } from 'react-native'
import { colors } from '../Global/colors'
import { CategoryItem } from './CategoryItem'
import categorias from "../Data/categorias.json"

export const Categories = ({navigation}) => {

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