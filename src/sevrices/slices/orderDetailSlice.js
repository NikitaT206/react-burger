import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { makeOrder } from '../../utils/burger-api'

export const getOrderNumber = createAsyncThunk(
  'main/getOrderNumber',
  async (data) => {
    return await makeOrder(data)
      .then(data => data.order.number)
      .catch(err => Promise.reject(err))
  }
)

const orderDetailSlice = createSlice({
  name: 'orderDetail',
  initialState: {
    orderNumber: null,
    orderDetails: false,
  },
  reducers: {
    setOrderDetails(state) {
      state.orderDetails = true
    },
    closeOrderDetails(state) {
      state.orderDetails = false
      state.orderNumber = null
    }
  },
  extraReducers: {
    [getOrderNumber.pending]: (state) => {
      state.orderNumber = null
    },
    [getOrderNumber.rejected]: (state) => {
      state.orderNumber = null
      state.orderDetails = false
    },
    [getOrderNumber.fulfilled]: (state, action) => {
      state.orderNumber = action.payload
    }
  }
})

const { actions, reducer } = orderDetailSlice

export const {
  setOrderDetails,
  closeOrderDetails
} = actions

export default reducer 