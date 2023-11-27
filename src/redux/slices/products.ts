import { createSlice } from '@reduxjs/toolkit'

export const productsSlice = createSlice({
  name: 'products',
  initialState: {
    productsQuantity: {} as { [key: string]: number },
  },
  reducers: {
    addProduct: (state, action: { payload: { id: string } }) => {
      if (action.payload.id in state.productsQuantity) {
        state.productsQuantity[action.payload.id] =
          state.productsQuantity[action.payload.id] + 1
      } else {
        state.productsQuantity[action.payload.id] = 1
      }
    },
    removeProduct: (state, action: { payload: { id: string } }) => {
      if (action.payload.id in state.productsQuantity) {
        state.productsQuantity[action.payload.id] =
          state.productsQuantity[action.payload.id] - 1
      } else {
        state.productsQuantity[action.payload.id] = 0
      }
    },
  },
})

export const { addProduct, removeProduct } = productsSlice.actions

export default productsSlice.reducer
