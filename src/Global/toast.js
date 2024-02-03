import Toast from "react-native-toast-message"

export const showToast = (type, text1, text2, time) => {
    Toast.show({
      type: type,
      text1: text1,
      text2: text2,
      visibilityTime: time,
    })
}