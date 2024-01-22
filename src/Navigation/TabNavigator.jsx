import { StyleSheet } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { colors } from '../Global/colors'
import { ShopStack, CartStack, OrderStack, UserStack } from './index'
import { TabIcon } from '../Components'

const Tab = createBottomTabNavigator()

export const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown:false,
        tabBarShowLabel:false,
        tabBarStyle: styles.tabBar
      }}
    >

      <Tab.Screen
          name="ShopStack"
          component={ShopStack}
          options={{
          tabBarIcon:({focused}) => <TabIcon icon="shop" label="Productos" focused={focused}/>
        }}
      />

      <Tab.Screen 
        name="CartStack" 
        component={CartStack}
        options={{
          tabBarIcon:({focused}) =>  <TabIcon icon="shopping-cart" label="Carrito" focused={focused}/> 
        }}
      />

      <Tab.Screen 
        name="OrderStack" 
        component={OrderStack}
        options={{
          tabBarIcon:({focused}) => <TabIcon icon="list" label="Ordenes" focused={focused}/> 
        }}
      />

      <Tab.Screen 
        name="UserStack" 
        component={UserStack}
        options={{
          tabBarIcon:({focused}) => <TabIcon icon="user" label="Perfil" focused={focused}/> 
        }}
      />

    </Tab.Navigator>
  )
}

const styles = StyleSheet.create({
    tabBar:{
      backgroundColor:colors.aguamarino1,
      height:65
    }
})