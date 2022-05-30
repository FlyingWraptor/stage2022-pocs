<template>
  <h1>{{ title }}</h1>
  <message-block v-for="message of store.messages" :message="message"
    :key="message.id"></message-block>
</template>

<script>
import { useStore } from '@/store'
import MessageBlock from './MessageBlock.vue'


export default {
  components: {
    MessageBlock
  },
  props: {
    title: {
      required: true,
      type: String
    }
  },
  setup () {
    const store = useStore()
    return { store }
  }
}
</script>

<style lang="css" scoped>
h1 {
  text-align: center;
}
</style>
