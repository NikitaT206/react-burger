import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { getIngregients } from '../../utils/burger-api'

export const setIngredients = createAsyncThunk(
  'ingredients/setIngredients',
  async () => {
    return await getIngregients()
      .then(data => data.data)
      .catch(err => Promise.reject(err))
  }
)

const ingredientsSlice = createSlice({
  name: 'ingredients',
  initialState: {
    ingredients: [],
    buns: [],
    sauces: [],
    mains: [],
    currentTab: 'buns'
  },
  reducers: {
    setIngredientsList(state) {
      state.ingredients.map(item => {
        return (
          item.type === 'bun' ? state.buns.push(item) : 
          item.type === 'sauce' ? state.sauces.push(item) : 
          item.type === 'main' ? state.mains.push(item) : null
        )
      })
    },
    setCurrentTab(state, action) {
      state.currentTab = action.payload
    },
  },
  extraReducers: {
    [setIngredients.fulfilled]: (state, action) => {
      state.ingredients = action.payload
    },
  }
  
})

const { actions, reducer } = ingredientsSlice

export const {
  setIngredientsList,
  setCurrentTab
} = actions

export default reducer 