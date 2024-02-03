import {useEffect, useState } from 'react'
import { View, Text, StyleSheet, Pressable, ScrollView} from 'react-native'
import { InputForm, AddButton } from '../Components'
import { colors } from '../Global/colors'
import { useSignupMutation } from '../App/services/auth'
import { useDispatch } from 'react-redux'
import { setUser } from '../Features/auth/authSlice'
import { formValidation } from '../Validations/formValidation'
import { addUser } from '../Features/Cart/cartSlice'
import Spinner from 'react-native-loading-spinner-overlay'

export const Signup = ({navigation}) => {

  const dispatch = useDispatch()

  const [registro, {data, isError, isSuccess, error, isLoading}] = useSignupMutation()
  
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
  const [confirmPassword,setConfirmPassword] = useState("")
  const [emailError,setEmailError] = useState("")
  const [passwordError,setPasswordError] = useState("")
  const [confirmPasswordError,setConfirmPasswordError] = useState("")

  useEffect(()=>{
    if(isSuccess) {
      dispatch(setUser(data))
      dispatch(addUser(data))
      insertSession(data)
      .catch(err => console.log(err))
    }
    if(isError) console.log(error)
  },[data, isError, isSuccess])

  const onSubmit = () => {
    try {
      setEmailError("")
      setPasswordError("")
      setConfirmPasswordError("")
      formValidation.validateSync({email, password, confirmPassword})
      registro({email, password})
    } catch (error) {
      switch(error.path){
        case "email":
          setEmailError(error.message)
          break
        case "password":
          setPasswordError(error.message)
          break
        case "confirmPassword":
          setConfirmPasswordError(error.message)
          break
        default:
          break
      }
    }
  }

  return (
    <ScrollView style={styles.main}>
      <View style={styles.cont}>
        <View style={styles.container}>
            <Text style={styles.title} >Registrate</Text>
            <InputForm
              label="Email"
              value={email}
              onChangeText={(t) => setEmail(t)}
              isSecure={false}
              error={emailError}
            />
            <InputForm
              label="Contraseña"
              value={password}
              onChangeText={(t) => setPassword(t)}
              isSecure={true}
              error={passwordError}
            />
            <InputForm
              label="Confirmar contraseña"
              value={confirmPassword}
              onChangeText={(t) => setConfirmPassword(t)}
              isSecure={true}
              error={confirmPasswordError}

            />
            <AddButton title="Enviar" onPress={onSubmit}  
            />
            <Text style={styles.sub}>¿Ya estas registrado?</Text>
            <Pressable onPress={()=> navigation.navigate("Login")}>
                <Text style={styles.subLink}>Iniciar Sesión</Text>
            </Pressable>
        </View>
      </View>
      <Spinner
        visible={isLoading}
        textContent={'Cargando...'}
        textStyle={styles.spinnerText}
        color={colors.lila1}
      />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
    main:{
      flex:1,
      backgroundColor:colors.celeste1,
    },
    cont:{
      alignItems:"center",
    },
    container:{
      width:"90%",
      backgroundColor:colors.aguamarino1,
      gap:10,
      borderRadius:10,
      justifyContent:"center",
      alignItems:"center",
      paddingVertical:20
    },
    title:{
      fontSize:25,
    },
    sub:{
      fontSize:14,
    },
    subLink:{
      fontSize:14,
      color:"#ffff"
    },
    spinnerText: {
      color: colors.lila1,
    },
})
