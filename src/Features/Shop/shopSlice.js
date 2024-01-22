// import { createSlice } from '@reduxjs/toolkit'
// import allProductos from "../../Data/productos.json"
// import allCategorias from "../../Data/categorias.json"

// const initialState = {
//     value:{
//         productos: allProductos,
//         categorias: allCategorias,
//         productoSeleccionado:{},
//         productosFiltrado:[]
//     }
// }

// export const shopSlice = createSlice({
//     name:"shop",
//     initialState,
//     reducers:{
//         setProductosFiltradoPorCategoria: (state,actions) => {
//             state.value.productosFiltrado = state.value.productos.filter(product => product.categoria.includes(actions.payload))
//         },
//         setProductoSeleccionado: (state,actions) =>{
//             state.value.productoSeleccionado = state.value.productos.find(product => product.id === actions.payload)
//         },
//         setProductosBuscado: (state,actions) => {
//             const normalizedSearch = actions.payload.toUpperCase()
//             state.value.productosFiltrado = state.value.productos.filter((product) => {
//                 const productInfo = `${product.titulo.toUpperCase()} ${product.color} ${product.categoria.join(' ')}`
//                 return productInfo.includes(normalizedSearch)
//             })
//         },
//     }
// })

// export const { setProductosFiltradoPorCategoria, setProductoSeleccionado, setProductosBuscado } = shopSlice.actions

// export default shopSlice.reducer