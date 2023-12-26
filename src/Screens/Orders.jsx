import { FlatList, StyleSheet } from 'react-native'
import orders from "../Data/orders.json"
import {OrderItem} from '../Components'
import { colors } from '../Global/colors'

export const Orders = () => {

  return (
    <FlatList
        style={styles.container}
        data={orders}
        keyExtractor={item => item.id}
        renderItem={({item}) => <OrderItem order={item}/>}
    />
  )
}

const styles = StyleSheet.create({
    container:{
      backgroundColor: colors.celeste1
    }
})