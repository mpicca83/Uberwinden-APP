import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: {
    user:null,
    items:[],
    total:0,
    date:""
  }
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem:(state, actions)=>{
        const itemFind = state.value.items.find(item => item.id === actions.payload.id)
        if(itemFind) itemFind.quantity ++
        else state.value.items.push({...actions.payload, quantity:1})
        state.value.total = state.value.items.reduce((acc, item) => acc + (item.precio * item.quantity),0)
        state.value.date = new Date().toLocaleString()
    },
    removeItem:(state, actions) =>{
      const itemFind = state.value.items.find(item => item.id === actions.payload.id)
      if(itemFind.quantity > 1) itemFind.quantity --
      else state.value.items = state.value.items.filter(item => item.id !== actions.payload.id)
      state.value.total = state.value.items.reduce((acc, item) => acc + (item.precio * item.quantity),0)
      state.value.date = new Date().toLocaleString()
    },
    removeAllItem:(state) =>{
      state.value.items = []
      state.value.total = 0
      state.value.date = ""
    },
    addUser:(state, actions) =>{
      state.value.user = actions.payload.localId
    },
  }
})

export const {addItem, removeItem, removeAllItem, addUser} = cartSlice.actions

export default cartSlice.reducer