import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { url_realtime } from '../../Firebase/db'

export const shopApi = createApi({

    reducerPath: 'shopApi', //Como va a almacenar en redux lo que trae de la BD

    baseQuery: fetchBaseQuery({ baseUrl: url_realtime }), 

    tagTypes:['image','ordenes'],

    endpoints: (builder) => ({

        getCategorias : builder.query({
            query: () => "categorias.json"
        }),

        getAllProducts : builder.query({
            query: () => "productos.json"
        }),

        getProductos: builder.query({
            query: (categoria) => `productos.json?orderBy="categoria"&equalTo="${categoria}"`,
        }),

        getProducto: builder.query({
            query:(id)=> `productos/${id}.json`
        }),

        getProfileImage: builder.query({
            query: (localId) => `profileImage/${localId}.json`,
            providesTags:["image"]
        }),

        getOrdenes: builder.query({
            query: (localId) => `ordenes.json?orderBy="user"&equalTo="${localId}"`,
            transformResponse: (response) => {
                const data = Object.entries(response).map(item => ({id:item[0],...item[1]}))
                return data
            },
            providesTags:['ordenes']
        }),

        postOrden: builder.mutation({
            query: (order) => ({
                url: "ordenes.json",
                method: "POST",
                body: order
            }),
            invalidatesTags:['ordenes']
        }),

        postProfileImage: builder.mutation({
            query: ({localId,image}) => ({
              url:`profileImage/${localId}.json`,
              method:"PUT",
              body:{image}
            }),
            invalidatesTags:["image"]
        }),
      
    }),

})

export const { useGetCategoriasQuery, useGetAllProductsQuery, useGetProductosQuery, useGetProductoQuery, usePostOrdenMutation, usePostProfileImageMutation, useGetProfileImageQuery, useGetOrdenesQuery } = shopApi