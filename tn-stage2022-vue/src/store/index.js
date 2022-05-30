import { defineStore } from "pinia";
import { reactive } from "vue";

const API_URL = 'http://localhost:4000/'

export const useStore = defineStore('main', {
  state: () => ({
    messages: reactive([])
  }),
  actions: {
    retrieveMessages() {
      console.log('Fetching messages from API')
      fetch(`${API_URL}messages`)
        .then(x => x.json())
        .then(x => {
          this.messages.length = 0
          this.messages.push(...x)
        })
        .catch(console.log)
    },
    deleteMessage(id) {
      console.log('Deleting message', id)
      fetch(`${API_URL}messages/${id}`, {
        method: 'DELETE'
      }).then(x => {
        if (x.ok) {
          this.retrieveMessages()
        }
      }).catch(console.log)
    }
  }
})