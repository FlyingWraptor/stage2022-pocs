import messagesSlice from './slices/messages';
import { configureStore } from '@reduxjs/toolkit'

const store = configureStore({
  reducer: {
    messages: messagesSlice
  }
})

export default store