import { StyleSheet, View, StatusBar } from 'react-native'
import { useFonts } from "expo-font"
import { colors } from './src/Global/colors'
import { store } from './src/App/store'
import { Provider } from 'react-redux'
import { MainNavigator } from './src/Navigation/MainNavigator'

export default function App() {

  const [fontLoaded] = useFonts({
    Oswald:require("./assets/Fonts/Oswald-Bold.ttf")
  })

  if(!fontLoaded) return null

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={colors.aguamarino1} />
      <Provider store={store} >
        <MainNavigator/>
      </Provider>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
})
