import { StyleSheet, View, Image } from 'react-native'
import { AddButton } from '../Components'
import { colors } from '../Global/colors'
import { useDispatch } from 'react-redux'
import { clearUser } from '../Features/Auth/authSlice'
import { useSelector } from 'react-redux'
import { useGetProfileImageQuery } from '../App/services/shopServices'

export const MyProfile = ({navigation}) => {

    const localId = useSelector(state => state.auth.value.localId)

    const {data} = useGetProfileImageQuery(localId)
    const dispatch = useDispatch()

    return (
        <View style={styles.container}>
            <Image
                source={data ? {uri: data.image} : require("../../assets/user.png")}
                style={styles.image}
                resizeMode='cover'
            />
            <AddButton title="Cambiar Foto" onPress={()=> navigation.navigate("ImageSelector")}/>
            <AddButton title="Cerrar Sesión" onPress={()=> dispatch(clearUser())}/>

        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:"center",
        backgroundColor: colors.celeste1,
    },
    image:{
        width:200,
        height:200,
        marginBottom:20,
        borderRadius:20
    }
})