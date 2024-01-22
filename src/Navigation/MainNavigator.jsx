import { NavigationContainer } from '@react-navigation/native'
import { AuthStack  } from './index'
import { TabNavigator } from './TabNavigator'
import { useSelector } from 'react-redux'

export const MainNavigator = () => {
    
    const idToken = useSelector(state => state.auth.value.idToken)
    
  return (
    <NavigationContainer>
       {idToken ? <TabNavigator/> : <AuthStack/>} 
    </NavigationContainer>
  )
}
