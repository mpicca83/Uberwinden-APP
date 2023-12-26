import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Orders } from '../Screens'
import { Header } from '../Components'

const Stack = createNativeStackNavigator()

export const OrderTab = () => {
  return (
    <Stack.Navigator
        initialRouteName='Orders'
        screenOptions={
            ({route})=>{
                return {
                    header : () => <Header title='Historial de Compras'/>
                }
            }   
        }
    >
        <Stack.Screen name="Orders" component={Orders} />

    </Stack.Navigator>
  )
}
