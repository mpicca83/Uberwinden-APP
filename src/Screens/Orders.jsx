import { FlatList, StyleSheet } from 'react-native'
import {AllOrders} from '../Components'
import { colors } from '../Global/colors'
import { useGetOrdenesQuery } from '../App/services/shopServices'
import { useSelector } from 'react-redux'
import { useEffect, useState } from 'react'

export const Orders = ({navigation}) => {

  const [orders, setOrders] = useState([])

  const localId = useSelector(state => state.auth.value.localId)

  const {data, isLoading} = useGetOrdenesQuery(localId)

  useEffect(()=>{
    !isLoading && setOrders(data)
  },[data])

  return (
    <FlatList
        style={styles.container}
        data={orders}
        keyExtractor={item => item.id}
        renderItem={({item}) => <AllOrders item={item} navigation={navigation}/>}
    />
  )
}

const styles = StyleSheet.create({
    container:{
      backgroundColor: colors.celeste1
    }
})