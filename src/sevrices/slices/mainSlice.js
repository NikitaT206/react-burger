import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { getIngregients, makeOrder } from '../../utils/burger-api'

export const setIngredients = createAsyncThunk(
  'main/setIngredients',
  async () => {
    return await getIngregients()
      .then(data => data.data)
      .catch(err => Promise.reject(err))
  }
)

export const getOrderNumber = createAsyncThunk(
  'main/getOrderNumber',
  async (data) => {
    return await makeOrder(data)
      .then(data => data.order.number)
      .catch(err => Promise.reject(err))
  }
)

const mainSlice = createSlice({
  name: 'main',
  initialState: {
    ingredients: [],
    ingredient: {},
    buns: [],
    sauces: [],
    mains: [],
    constructorIngredients: [],
    constructorBun: null,
    orderNumber: null,
    totalPrice: 0,
    orderDetails: false,
    ingredientDetails: false,
    currentTab: 'buns'
  },
  reducers: {
    setIngredient(state, action) {
      state.ingredient = action.payload
    },
    clearIngredient(state) {
      state.ingredient = {}
    },
    setTotalPrice(state) {
      state.totalPrice = state.constructorIngredients.reduce((a, b) => {
        return a + b.price
      }, 0)
    },
    setIngredientDetails(state) {
      state.ingredientDetails = true
    },
    setOrderDetails(state) {
      state.orderDetails = true
    },
    closeModal(state) {
      state.ingredientDetails = false
      state.orderDetails = false
    },
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
    setCostructorBun(state, action) {
      state.constructorBun = action.payload
    },
    setConstructorIngredients(state, action) {
      state.constructorIngredients = action.payload
    }
  },
  extraReducers: {
    [setIngredients.fulfilled]: (state, action) => {
      state.ingredients = action.payload
    },
    [getOrderNumber.fulfilled]: (state, action) => {
      state.orderNumber = action.payload
    }
  }
})

const { actions, reducer } = mainSlice

export const {
  setIngredient, 
  clearIngredient, 
  setTotalPrice,
  setIngredientDetails,
  setOrderDetails,
  closeModal,
  setIngredientsList,
  setCurrentTab,
  setCostructorBun,
  setConstructorIngredients
} = actions

export default reducer 