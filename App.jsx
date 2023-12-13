import { StyleSheet, View, StatusBar } from 'react-native';
import { useFonts } from "expo-font"
import { colors } from './src/Global/colors'
import { useEffect, useState } from 'react'
import { Home, ItemList, ItemDetail } from './src/Screens'

export default function App() {

  const [search, setSearch] = useState("")
  const [categorySelected, setCategorySelected] = useState('')
  const [productDetailId, setProductDetailId] = useState('')

  useEffect(()=>{
    setCategorySelected('')
  },[search])

  const [fontLoaded] = useFonts({
    Oswald:require("./assets/Fonts/Oswald-Bold.ttf")
  })

  if(!fontLoaded) return null

  return (
    <View style={styles.container}>
      <StatusBar
        backgroundColor={colors.aguamarino1}
      />
      {
        (categorySelected || search)
        ? productDetailId
          ? <ItemDetail 
              search={search}
              setSearch={setSearch}
              productDetailId={productDetailId}
              setProductDetailId={setProductDetailId}
            />
          : <ItemList 
              search={search}
              setSearch={setSearch}
              category = {categorySelected} 
              setCategorySelected={setCategorySelected} 
              setProductDetailId={setProductDetailId} 
            />
        : <Home 
            setSearch={setSearch} 
            category={setCategorySelected} 
            setProductDetailId={setProductDetailId} 

          />
      }
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
