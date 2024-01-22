import {createNativeStackNavigator} from '@react-navigation/native-stack'
import {Home, ItemList, ItemDetail} from '../Screens'
import {Header} from '../Components'

const Stack = createNativeStackNavigator()

export const ShopStack = () => {
  return (
    <Stack.Navigator
        initialRouteName='Home'
        screenOptions={
            ({route})=>{
                return {
                    header : () => <Header 
                                        title={
                                        route.name === "Home" ? "Seleccione una categoría" :
                                        route.name === "Categorias" ? `Categoría: ${route.params.item}` :
                                        route.name === "Busqueda" ? `Busqueda: ${route.params.input}` :
                                        "Detalle"
                    }               />
                }
            }   
        }
    >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Categorias" component={ItemList} />
        <Stack.Screen name="Busqueda" component={ItemList} />
        <Stack.Screen name="Detalle" component={ItemDetail} />

    </Stack.Navigator>
  )
}
