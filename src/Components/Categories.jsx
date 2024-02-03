import { FlatList, StyleSheet } from 'react-native'
import { colors } from '../Global/colors'
import { CategoryItem } from './CategoryItem'
import { useGetCategoriasQuery } from '../App/services/shopServices'
import Spinner from 'react-native-loading-spinner-overlay'

export const Categories = ({navigation}) => {
  
  const {data, isLoading} = useGetCategoriasQuery()

  return (
    <>
      <FlatList
        style={styles.container}
        data={data}
        keyExtractor={item => item}
        renderItem={({item}) => <CategoryItem item={item} navigation={navigation}/>}
      />
      <Spinner
        visible={isLoading}
        textContent={'Cargando...'}
        textStyle={styles.spinnerText}
        color={colors.lila1}
      />
    </>
  )
}

const styles = StyleSheet.create({
    container:{
      backgroundColor:colors.celeste1,
      height:"100%"
    },
    spinnerText: {
      color: colors.lila1,
    },
})