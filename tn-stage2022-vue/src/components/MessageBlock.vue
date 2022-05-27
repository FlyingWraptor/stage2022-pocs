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
  emits: {
    deleted: Number
  },
  methods: {
    deleteMessage() {
      console.log('Emitting delte message for', this.message.id)
      this.$emit('deleted', this.message.id)
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