import { StyleSheet } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { colors } from '../Global/colors'
import { ShopTab, CartTab, OrderTab } from './index'
import { TabIcon } from '../Components'

const Tab = createBottomTabNavigator()

export const TabNavigator = () => {
  return (
    <NavigationContainer>
        <Tab.Navigator
          screenOptions={{
            headerShown:false,
            tabBarShowLabel:false,
            tabBarStyle: styles.tabBar
          }}
        >
          <Tab.Screen
             name="ShopTab"
             component={ShopTab}
             options={{
              tabBarIcon:({focused}) => <TabIcon icon="shop" label="Productos" focused={focused}/>
             }}
          />
          <Tab.Screen 
            name="CartTab" 
            component={CartTab}
            options={{
              tabBarIcon:({focused}) =>  <TabIcon icon="shopping-cart" label="Carrito" focused={focused}/> 
             }}
             />
             <Tab.Screen 
            name="OrdersTab" 
            component={OrderTab}
            options={{
              tabBarIcon:({focused}) => <TabIcon icon="list" label="Ordenes" focused={focused}/> 
             }}
             />
      </Tab.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
    tabBar:{
      backgroundColor:colors.aguamarino1,
      height:65
    }
})