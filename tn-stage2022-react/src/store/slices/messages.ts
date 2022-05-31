import { createSlice, Slice } from '@reduxjs/toolkit'
import { Message } from '../../interfaces/Message'

export const messagesSlice: Slice = createSlice({
  name: 'messages',
  initialState: {
    value: []
  },
  reducers: {
    update: (state, action) => {
      console.log('Updating messages')
      state.value = action.payload
    },
    remove: (state, action) => {
      console.log('Delete message ', action.payload)
      state.value = (state.value as Message[])
        .filter(x => x.id !== action.payload)
    }
  }
})

// Action creators are generated for each case reducer function
export const { update, remove } = messagesSlice.actions

export default messagesSlice.reducer