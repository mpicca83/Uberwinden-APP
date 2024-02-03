import { useEffect } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { AuthStack  } from './index'
import { TabNavigator } from './TabNavigator'
import { useDispatch, useSelector } from 'react-redux'
import { fechSession } from '../DataBase'
import { setUser } from '../Features/auth/authSlice'
import { addUser } from '../Features/Cart/cartSlice'

export const MainNavigator = () => {
    
    const dispatch = useDispatch()
    const idToken = useSelector(state => state.auth.value.idToken)

    useEffect(()=>{
      (async ()=>{
        try {
          const session = await fechSession()
          if(session.rows.length){
            const user = session.rows._array[0]
            dispatch(setUser(user))
            dispatch(addUser(user))
          }
        } catch (error) {
          console.log(error)
        }
      })()
    },[])
    
  return (
    <NavigationContainer>
       {idToken ? <TabNavigator/> : <AuthStack/>} 
    </NavigationContainer>
  )
}
