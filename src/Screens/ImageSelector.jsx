import { useEffect, useState } from 'react'
import { StyleSheet, Image, View, Text } from 'react-native'
import { AddButton } from '../Components'
import { colors } from '../Global/colors'
import * as ImagePicker from 'expo-image-picker'
import { useSelector } from 'react-redux'
import { useGetProfileImageQuery, usePostProfileImageMutation } from '../App/services/shopServices'

export const ImageSelector = ({navigation}) => {

    const [image, setImage] = useState("")
    const [profileImage] = usePostProfileImageMutation()
    const localId = useSelector(state => state.auth.value.localId)
    const {data, isSuccess} = useGetProfileImageQuery(localId)

    useEffect(()=>{
        if(isSuccess && data) setImage(data.image)
    },[isSuccess])

    const pickImage = async () => {

        const {granted} = await ImagePicker.requestCameraPermissionsAsync()

        if(granted){
            let result = await ImagePicker.launchCameraAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.Images,
                allowsEditing: true,
                aspect: [1, 1],
                quality: 0.5,
                base64:true,
            })
          
            if (!result.canceled) {
                setImage('data:image/jpeg;base64,' + result.assets[0].base64)
            }
        }
    }

    const libraryImage = async () => {

        const {granted} = await ImagePicker.requestCameraPermissionsAsync()

        if(granted){
            let result = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.Images,
                allowsEditing: true,
                aspect: [1, 1],
                quality: 0.5,
                base64:true,
            })
          
            if (!result.canceled) {
                setImage('data:image/jpeg;base64,' + result.assets[0].base64)
            }
        }
    }

    const confirmImage = () => {
        profileImage({localId, image})
        navigation.goBack()
    }


  return (
    <View style={styles.container}>
       <Image
            source={image ? { uri: image } : require("../../assets/user.png")}
            style={styles.image}
            resizeMode='cover'
        />
        <AddButton title="Tomar foto" onPress={pickImage} />
        <AddButton title="Buscar en libreria" onPress={libraryImage} />
        <AddButton title="Confirmar"  onPress={confirmImage}/>
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
        borderRadius:20,
    },
})
