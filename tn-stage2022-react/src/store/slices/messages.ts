import { AnyAction, createSlice, Slice } from '@reduxjs/toolkit'

const API_URL = 'http://localhost:4000/'

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
      fetch(`http://localhost:4000/messages/${action.payload}`, { method: 'DELETE' })
        .then(x => {
          if (x.ok) {
            console.log('Deleted message ', action.payload)
          }
        })
    }
  }
})

// Action creators are generated for each case reducer function
export const { update, remove } = messagesSlice.actions

export const retrieveMessages = () => {
  return (dispatch: any) => {
    fetch (`${API_URL}messages`)
      .then(x => x.json())
      .then(x => {
        console.log('Setting Inbox messages')
        dispatch(update(x))
      })
  }
}
export const removeMessage = (id: number) => {
  return (dispatch: any) => {
    fetch (`${API_URL}messages/${id}`, { method: 'DELETE' })
      .finally(() => {
          console.log('Deleted message, renewing messages')
          dispatch(retrieveMessages())
      })
  }
}

export default messagesSlice.reducer