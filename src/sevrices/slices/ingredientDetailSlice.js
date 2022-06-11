import { createSlice } from '@reduxjs/toolkit';

const ingredientDetailSlice = createSlice({
  name: 'ingredientDetail',
  initialState: {
    ingredient: {},
    ingredientDetails: false,
  },
  reducers: {
    setIngredient(state, action) {
      state.ingredient = action.payload
    },
    clearIngredient(state) {
      state.ingredient = {}
    },
    setIngredientDetails(state) {
      state.ingredientDetails = true
    },
    closeIngredientDetails(state) {
      state.ingredientDetails = false
    }
  }
})

const { actions, reducer } = ingredientDetailSlice

export const {
  setIngredient, 
  clearIngredient, 
  setIngredientDetails,
  closeIngredientDetails
} = actions

export default reducer 