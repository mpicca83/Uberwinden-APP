import { StyleSheet, Text, View, Image } from 'react-native'
import { colors } from '../Global/colors'
import Logo from '../../assets/Images/logoUberwinden.png'
import {Search} from './Search'

export const Header = ({title, setSearch, setProductDetailId}) => {

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
        <Search setSearch={setSearch} setProductDetailId={setProductDetailId} />
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
        alignItems:"center"
    },
    container2:{
      backgroundColor:colors.celeste1,
      width:"100%",
      height:150,
      alignItems:"center"
  },
    image:{
      height:45,
      marginTop: 10,
    },
    text:{
        fontSize:30,
        fontFamily:"Oswald",
    }
})
