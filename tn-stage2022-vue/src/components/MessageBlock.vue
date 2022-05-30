<template>
  <ion-item lines="full">
    <ion-label>
      <div>
        <h2>{{ message.title }}</h2>
        <span>From: </span>
        <span class="email">{{ message.from }}</span>
        <span> to: </span>
        <span class="email">{{ message.to }}</span>
        <p>{{ message.description }}</p>
      </div>
    </ion-label>
    <ion-button size="large" @click="deleteMessage()">
      <span>Delete</span>
    </ion-button>
  </ion-item>
</template>

<script>
import { useStore } from '@/store';
import { IonButton, IonItem, IonLabel } from '@ionic/vue';

export default {
  components: {
    IonItem,
    IonLabel,
    IonButton
  },
  props: {
    message: {
      required: true,
      type: Object
    }
  },
  setup() {
    const store = useStore()

    return { store }
  },
  methods: {
    deleteMessage() {
      console.log('Deleting message for', this.message.id)
      const id = this.message.id

      this.store.deleteMessage(id)
    }
  }
}
</script>

<style lang="css" scoped>
.email {
  font-family: Helvetica, sans-serif;
  font-style: italic;
  color: #444;
}
</style>
