import { configureStore } from '@reduxjs/toolkit'
import shopReducer from "../Features/Shop/shopSlice"

export const store = configureStore({
  reducer: {
    shop:shopReducer
  },
})