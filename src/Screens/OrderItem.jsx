import { FlatList, StyleSheet, Text, View } from 'react-native'
import { colors } from '../Global/colors'
import { CartItem } from '../Components'

export const OrderItem = ({route}) => {

  const {item} = route.params

  return (
    <View style={styles.container}>
        <Text style={styles.date} >Fecha de Orden: {item.date}</Text>
        <FlatList
          style={styles.list}
          data={item.items}
          keyExtractor={item => item.id}
          renderItem={({item})=> <CartItem item={item} icon={false} />}
        />
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    backgroundColor:colors.celeste1,
    flex:1,
  },
  date:{
    color:colors.lila1,
    fontSize:16,
    marginBottom:10,
    alignSelf:'center'
  },
})