import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { errorHandler } from '../common/utils'
import { usersApi } from '../modules/users-list'

const initialState = {
  currentUserEmail: null as null | string,
  currentUserName: null as null | string,
  currentUserAddress: '' as undefined | string,
  currentUserId: 100 as number,
  isRegistered: false,
  error: null as null | string,
}

const slice = createSlice({
  name: 'app',
  initialState: initialState,
  reducers: {
    setUserInfo: (state, action: PayloadAction<{ name: string; email: string }>) => {
      state.currentUserEmail = action.payload.email
      state.currentUserName = action.payload.name
      state.isRegistered = true
    },
    setUserWallet: (state, action: PayloadAction<{ account: string | undefined }>) => {
      state.currentUserAddress = action.payload.account
    },
    setError: (state, action: PayloadAction<{ error: string | null }>) => {
      state.error = action.payload.error
    },
  },
  extraReducers: builder => {
    builder
      .addMatcher(usersApi.endpoints.getUsersList.matchRejected, (state, { payload }) => {
        state.error = errorHandler(payload)
      })
      .addMatcher(usersApi.endpoints.getUser.matchRejected, (state, { payload }) => {
        state.error = errorHandler(payload)
      })
  },
})

export const appReducer = slice.reducer
export const { setUserInfo, setUserWallet, setError } = slice.actions
