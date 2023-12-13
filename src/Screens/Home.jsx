import { StyleSheet, View } from 'react-native'
import { Header, Categories } from '../Components'

export const Home = ({setSearch, category, setProductDetailId}) => {

    return (
      <View style={styles.container}>
        <Header title='Seleccione una categoría' setSearch={setSearch} setProductDetailId={setProductDetailId} />
        <Categories category={category} />
      </View>
    )
}


const styles = StyleSheet.create({
})
