import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Orders, OrderItem } from '../Screens'
import { Header } from '../Components'

const Stack = createNativeStackNavigator()

export const OrderStack = () => {
  return (
    
    <Stack.Navigator
        initialRouteName='Orders'
        screenOptions={
            ({route})=>{
                return {
                    header : () => <Header 
                                        title={route.name === "Orders" ?'Historial de Compras': 'Detalle de compra'}
                                        search={false}
                                    />
                }
            }   
        }
    >
        <Stack.Screen name="Orders" component={Orders} />
        <Stack.Screen name="OrderItem" component={OrderItem} />

    </Stack.Navigator>
  )
}
