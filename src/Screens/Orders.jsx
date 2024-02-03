import { FlatList, StyleSheet, Text } from 'react-native'
import {AllOrders} from '../Components'
import { colors } from '../Global/colors'
import { useGetOrdenesQuery } from '../App/services/shopServices'
import { useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import Spinner from 'react-native-loading-spinner-overlay'

export const Orders = ({navigation}) => {

  const [orders, setOrders] = useState([])

  const localId = useSelector(state => state.auth.value.localId)

  const {data, isLoading} = useGetOrdenesQuery(localId)

  useEffect(()=>{
    !isLoading && setOrders(data)
  },[data])

  return (
    <>
      {
        isLoading
        ?<Spinner
            visible={isLoading}
            textContent={'Cargando...'}
            textStyle={styles.spinnerText}
            color={colors.lila1}
          />
        :orders.length > 0
          ?<FlatList
            style={styles.container}
            data={orders}
            keyExtractor={item => item.id}
            renderItem={({item}) => <AllOrders item={item} navigation={navigation}/>}
            />
          :<Text style={styles.text}>No hay registros de ordenes de compras realizadas</Text>
      }
    </>
  )
}

const styles = StyleSheet.create({
    container:{
      backgroundColor: colors.celeste1
    },
    spinnerText: {
      color: colors.lila1,
    },
    text:{
      backgroundColor:colors.celeste1,
      height:'100%',
      textAlign:'center',
      fontSize:20,
      paddingHorizontal:70,
      paddingTop:20,
      color:colors.lila1
    },
})