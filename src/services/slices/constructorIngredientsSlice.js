import { createSlice } from '@reduxjs/toolkit';

const constructorIngredientsSlice = createSlice({
  name: 'constructorIngredients',
  initialState: {
    constructorIngredients: [],
    constructorBun: null,
  },
  reducers: {
    setCostructorBun(state, action) {
      state.constructorBun = action.payload
    },
    setConstructorIngredients(state, action) {
      state.constructorIngredients = action.payload
    }
  }
})

const { actions, reducer } = constructorIngredientsSlice

export const {
  setCostructorBun,
  setConstructorIngredients
} = actions

export default reducer 