import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Header } from '../Components'
import { Signup, Login } from '../Screens'

const Stack = createNativeStackNavigator()

export const AuthStack = () => {
    
  return (
    <Stack.Navigator
        initialRouteName='Login'
        screenOptions={
            ({route})=>{
                return {
                    header : () => <Header title="Bienvenido" search={false} />
                }
            }
        }
    >
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Signup" component={Signup} />
    </Stack.Navigator>
  )
}