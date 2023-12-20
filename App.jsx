import { StyleSheet, View, StatusBar } from 'react-native'
import { useFonts } from "expo-font"
import { colors } from './src/Global/colors'
import { Navigation } from './src/Navigation/Navigation'

export default function App() {

  const [fontLoaded] = useFonts({
    Oswald:require("./assets/Fonts/Oswald-Bold.ttf")
  })

  if(!fontLoaded) return null

  return (
    <View style={styles.container}>
      <StatusBar
        backgroundColor={colors.aguamarino1}
      />
      <Navigation/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
})
