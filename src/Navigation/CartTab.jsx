import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Cart } from '../Screens'
import { Header } from '../Components'

const Stack = createNativeStackNavigator()

export const CartTab = () => {
  return (
    <Stack.Navigator
        initialRouteName="Cart"
        screenOptions={
            ({route})=>{
                return {
                    header : () => <Header title='Carrito' />
                }
            }   
        }
    >
        <Stack.Screen name="Cart" component={Cart} />

    </Stack.Navigator>
  )
}
