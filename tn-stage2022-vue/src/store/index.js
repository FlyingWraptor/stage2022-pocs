import { defineStore } from "pinia";
import { reactive } from "vue";

const API_URL = 'http://localhost:4000/'

export const useStore = defineStore('main', {
  state: () => ({
    messages: reactive([]),
    fetchInterceptors: []
  }),
  actions: {
    retrieveMessages() {
      console.log('Fetching messages from API')
      this.fetch(`${API_URL}messages`)
        .then(x => x.json())
        .then(x => {
          this.messages.length = 0
          this.messages.push(...x)
        })
        .catch(console.log)
    },
    deleteMessage(id) {
      console.log('Deleting message', id)
      this.fetch(`${API_URL}messages/${id}`, {
        method: 'DELETE'
      }).then(x => {
        if (x.ok) {
          this.retrieveMessages()
        }
      }).catch(console.log)
    },

    fetch (requestInput, requestInit) {
      if (this.fetchInterceptors.length > 0) {
        let result = this.fetchInterceptors[0](requestInput, requestInit)
        for (let i = 1; i < this.fetchInterceptors.length; i++) {
          result = this.fetchInterceptors[i](...result)
        }

        return fetch (...result)
      } else {
        return fetch(requestInput, requestInit)
      }
    }
  }
})