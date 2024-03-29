import { useState, useEffect } from 'react'
import { View, Text ,StyleSheet, Pressable, ScrollView} from 'react-native'
import { colors } from '../Global/colors'
import { InputForm, AddButton } from '../Components'
import { useLoginMutation } from '../App/services/auth'
import { useDispatch } from 'react-redux'
import { setUser } from '../Features/Auth/authSlice'
import { formLogin } from '../Validations/formValidation'
import { addUser } from '../Features/Cart/cartSlice'
import { insertSession } from '../DataBase'
import Spinner from 'react-native-loading-spinner-overlay'

export const Login = ({navigation}) => {

  const dispatch = useDispatch()

  const [login, {data, isError, isSuccess, isLoading}] = useLoginMutation()

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [emailError, setEmailError] = useState("")
  const [passwordError, setPasswordError] = useState("")
  const [loginError, setLoginPasswordError] = useState("")

  useEffect(()=>{
    if(isSuccess) {
      dispatch(setUser(data))
      dispatch(addUser(data)) 
      insertSession(data)
      .catch(err => console.log(err))
    }
    if(isError) {
      setLoginPasswordError('Usuario o contraseña incorrecta')
      setTimeout(()=>{
        setLoginPasswordError('')
      },3000)
    }

  },[data, isError, isSuccess])

  const onSubmit = () => {
    try {
      setEmailError("")
      setPasswordError("")
      formLogin.validateSync({email, password})
      login({email, password})
    } catch (error) {
      switch(error.path){
        case "email":
          setEmailError(error.message)
          break
        case "password":
          setPasswordError(error.message)
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
            <Text style={styles.title} >Iniciar Sesión</Text>
            <InputForm
              label="Email"
              value={email}
              onChangeText={(t) => setEmail(t)}
              isSecure = {false}
              error={emailError}
            />
            <InputForm
              label="Contraseña"
              value={password}
              onChangeText={(t) => setPassword(t)}
              isSecure={true}
              error={passwordError}
            />
            <AddButton onPress={onSubmit} title="Ingresar"/>
            <Text style={styles.sub}>¿No estas registrado?</Text>
            <Pressable onPress={()=> navigation.navigate("Signup")} >
                <Text style={styles.subLink}>Registrate</Text>
            </Pressable>
        </View>
        <Text style={styles.error}>{loginError}</Text>
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
    error:{
      fontSize:18,
      color:"red",
      marginTop:10,
    },
    spinnerText: {
      color: colors.lila1,
    },  
})
