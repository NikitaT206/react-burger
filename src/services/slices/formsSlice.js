import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { login, recoveryPassword, register, setNewPassword } from '../../utils/burger-api'

export const sendEmail = createAsyncThunk(
  'forms/sendEmail',
  async (email) => {
    return await recoveryPassword(email)
      .then(data => data)
      .catch(err => Promise.reject(err))
  }
)

export const resetPassword = createAsyncThunk(
  'forms/resetPassword',
  async (form) => {
    return await setNewPassword(form)
      .then(data => data)
      .catch(err => Promise.reject(err))
  }
)

export const setLogin = createAsyncThunk(
  'forms/setLogin',
  async (form) => {
    return await login(form)
      .then(data => {
        if (data.success) {
          localStorage.setItem('refreshToken', data.refreshToken)
          document.cookie = `accessToken=${data.accessToken}; max-age=1200`
        }
      })
      .catch(err => Promise.reject(err))
  }
)

export const setRegister = createAsyncThunk(
  'forms/setRegister',
  async (form) => {
    return await register(form)
      .then(data => {
        if (data.success) {
          localStorage.setItem('refreshToken', data.refreshToken)
          document.cookie = `accessToken=${data.accessToken}; max-age=1200`
        }
      })
      .catch(err => Promise.reject(err))
  }
)

const formsSlice = createSlice({
  name: 'forms',
  initialState: {
    forgotPassword: {
      form: {
        email: '',
      },
      loading: false,
      success: false,
    },
    resetPassword: {
      form: {
        password: '',
        token: '',
      },
      loading: false,
      success: false,
    },
    login: {
      form: {
        email: '',
        password: ''
      },
      loading: false,
      success: false
    },
    register: {
      form: {
        email: '',
        name: '',
        password: '',
      },
      loading: false,
      success: false
    }
  },
  reducers: {
    setForgotPasswordForm(state, action) {
      state.forgotPassword.form.email = action.payload
    },
    setResetPasswordForm(state, action) {
      state.resetPassword.form = action.payload
    },
    setLoginForm(state, action) {
      state.login.form = action.payload
    },
    setRegisterForm(state, action) {
      state.register.form = action.payload
    }
  },
  extraReducers: {
    [sendEmail.rejected]: (state) => {
      state.forgotPassword.success = false
      state.forgotPassword.loading = false
    },
    [sendEmail.pending]: (state) => {
      state.forgotPassword.success = false
      state.forgotPassword.loading = true
    },
    [sendEmail.fulfilled]: (state) => {
      state.forgotPassword.success = true
      state.forgotPassword.loading = false
    },

    [resetPassword.fulfilled]: (state) => {
      state.resetPassword.success = true
      state.resetPassword.loading = false
    },
    [resetPassword.pending]: (state) => {
      state.resetPassword.success = false
      state.resetPassword.loading = true
    },
    [resetPassword.rejected]: (state) => {
      state.resetPassword.success = false
      state.resetPassword.loading = false
    },

    [setLogin.rejected]: (state) => {
      state.login.success = false
      state.login.loading = false
    },
    [setLogin.pending]: (state) => {
      state.login.success = false
      state.login.loading = true
    },
    [setLogin.fulfilled]: (state) => {
      state.login.success = true
      state.login.loading = false
    },

    [setRegister.rejected]: (state) => {
      state.register.success = false
      state.register.loading = false
    },
    [setRegister.pending]: (state) => {
      state.register.success = false
      state.register.loading = true
    },
    [setRegister.fulfilled]: (state) => {
      state.register.success = true
      state.register.loading = false
    },
  }
})

const { actions, reducer } = formsSlice

export const {
  setForgotPasswordForm,
  setResetPasswordForm,
  setLoginForm,
  setRegisterForm
} = actions

export default reducer 