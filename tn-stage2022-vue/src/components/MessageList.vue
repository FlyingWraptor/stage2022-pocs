<template>
  <h1>{{ title }}</h1>
  <message-block v-for="message of messages" :message="message"
    :key="message.id"
    @deleted="deleteMessage"></message-block>
</template>

<script>
import MessageBlock from './MessageBlock.vue'


export default {
  components: {
    MessageBlock
  },
  props: {
    title: {
      required: true,
      type: String
    },
    messages: {
      required: true,
      type: Array
    }
  },
  emits: {
    deleted: Number
  },
  methods: {
    deleteMessage (id) {
      console.log('Received delete for', id, 'emitting...')
      this.$emit('deleted', id)
    }
  }
}
</script>

<style lang="css" scoped>
h1 {
  text-align: center;
}
</style>