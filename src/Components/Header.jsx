import { StyleSheet, Text, View, Image } from 'react-native'
import { colors } from '../Global/colors'
import { Search } from './Search'
import { useNavigation } from '@react-navigation/native'
import Logo from '../../assets/Images/logoUberwinden.png'

export const Header = ({title, search=true}) => {

  const navigation = useNavigation()

  return (
    <>
      <View style={styles.container1}>
        <Image 
          style={styles.image}
          resizeMode='center'
          source={Logo}
        />
      </View>

      <View style={styles.container2}>
        {search && <Search navigation={navigation}/>}
        <Text style={styles.text}>{title}</Text>
        
      </View>
    </>
  )
}

const styles = StyleSheet.create({
    container1:{
        backgroundColor:colors.aguamarino1,
        width:"100%",
        height:70,
        alignItems:"center",
    },
    container2:{
      backgroundColor:colors.celeste1,
      width:"100%",
      height:110,
      alignItems:"center",
      justifyContent:"center",
  },
    image:{
      height:45,
      marginTop: 15,
    },
    text:{
        fontSize:30,
        fontFamily:"Oswald",
    }
})
