import { createSlice } from '@reduxjs/toolkit'
import { toast } from 'react-toastify'
import { v4 as uuidv4 } from 'uuid'

const initialUsers = () => {
  if (typeof window !== 'undefined') {
    const item = window?.localStorage.getItem('users')
    return item
      ? JSON.parse(item)
      : [
          {
            id: uuidv4(),
            name: 'dashcode',
            email: 'dashcode@gmail.com',
            password: 'dashcode',
          },
        ]
  }
  return [
    {
      id: uuidv4(),
      name: 'dashcode',
      email: 'dashcode@gmail.com',
      password: 'dashcode',
    },
  ]
}
// save users in local storage

const initialIsAuth = () => {
  if (typeof window !== 'undefined') {
    const item = window?.localStorage.getItem('isAuth')
    return item ? JSON.parse(item) : false
  }
  return false
}

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    users: initialUsers(),
    isAuth: initialIsAuth(),
  },
  reducers: {
    handleRegister: (state, action) => {
      // eslint-disable-next-line unused-imports/no-unused-vars
      const { name, email, password } = action.payload
    },

    handleLogin: (state, action) => {
      state.isAuth = action.payload
      // save isAuth in local storage
      if (typeof window !== 'undefined') {
        window?.localStorage.setItem('isAuth', JSON.stringify(state.isAuth))
      }
      toast.success('User logged in successfully', {
        position: 'top-right',
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
      })
    },
    handleLogout: (state, action) => {
      state.isAuth = action.payload
      // remove isAuth from local storage
      if (typeof window !== 'undefined') {
        window?.localStorage.removeItem('isAuth')
      }
      toast.success('User logged out successfully', {
        position: 'top-right',
      })
    },
  },
})

export const { handleRegister, handleLogin, handleLogout } = authSlice.actions
export default authSlice.reducer
