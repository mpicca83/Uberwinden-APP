import {createNativeStackNavigator} from '@react-navigation/native-stack'
import {MyProfile, ImageSelector} from '../Screens'
import {Header} from '../Components'

const Stack = createNativeStackNavigator()

export const UserStack = () => {
  return (
    <Stack.Navigator
        initialRouteName='MyProfile'
        screenOptions={
            ({route})=>{
                return {
                    header : () => <Header title='Mi Perfil' search={false}/>
                }
            }   
        }
    >
        <Stack.Screen name="MyProfile" component={MyProfile} />
        <Stack.Screen name="ImageSelector" component={ImageSelector} />

    </Stack.Navigator>
  )
}
