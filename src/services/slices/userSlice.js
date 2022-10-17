import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getUser } from '../../utils/burger-api';

export const getUserMe = createAsyncThunk(
  'user/setUser',
  async () => {
    return await getUser()
      .then(data => data)
      .catch(err => Promise.reject(err))
  }
)

const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: {
      name: null,
      email: null,
    },
    isLoggedIn: false
  },
  reducers: {
    setLoggedIn(state) {
      state.isLoggedIn = true
    },
    setLogOut(state) {
      state.isLoggedIn = false
    }
  },
  extraReducers: {
    [getUserMe.fulfilled]: (state, action) => {
      state.isLoggedIn = true
      state.user = action.payload.user
    }
  }
})

const { actions, reducer } = userSlice

export const {
  setLoggedIn,
  setLogOut,
} = actions

export default reducer 