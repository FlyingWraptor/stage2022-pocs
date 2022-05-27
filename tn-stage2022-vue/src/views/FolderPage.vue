<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button color="primary"></ion-menu-button>
        </ion-buttons>
        <ion-title>{{ $route.params.id }}</ion-title>
      </ion-toolbar>
    </ion-header>
    
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">{{ $route.params.id }}</ion-title>
        </ion-toolbar>
      </ion-header>
    
      <div id="container">
        <message-list :title="title" :messages="messages" @deleted="deleteMessage"></message-list>
      </div>
    </ion-content>
  </ion-page>
</template>

<script>
import { defineComponent, reactive } from 'vue';
import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/vue';
import MessageList from '@/components/MessageList.vue';

export default defineComponent({
  name: 'FolderPage',
  components: {
    IonButtons,
    IonContent,
    IonHeader,
    IonMenuButton,
    IonPage,
    IonTitle,
    IonToolbar,
    MessageList
  },
  setup () {
    const messages = reactive([])
    return {
      messages
    }
  },
  mounted () {
    if (this.title === 'Inbox') {
      this.messages.push(...[
        {
          id: 1,
          title: 'Your yearly bonus has arrived',
          from: 'support@thebestfridges.com',
          to: 'hubert.poccer@company.tld',
          description: 'Thank you for chosing us, we have added a yearly bonus to you balance!'
        },
        {
          id: 2,
          title: 'Meeting, today at 2PM',
          from: 'nancy.kricketeer@company.tld',
          to: 'hubert.poccer@company.tld',
          description: 'Will you be joining us at the salesmeeting at 2PM this afternoon?'
        },
        {
          id: 3,
          title: 'There are bagels in the cafeteria',
          from: 'gilles.bagel@company.tld',
          to: 'Sales department',
          description: 'My wife made some bagels, I don\'t like them, so I left them in the cafeteria. PLEASE be sure to take one.'
        }
      ]);
    } else {
      this.messages.length = 0
    }
  },
  methods: {
    deleteMessage (id) {
      console.log('Received message delete event, removing', id)
      const index = this.messages.findIndex(x => x.id === id)
      this.messages.splice(index, 1)
    }
  },
  computed: {
    title () {
      return this.$route.params.id
    }
  }
});
</script>
