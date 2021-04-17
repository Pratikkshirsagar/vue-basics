const app = Vue.createApp({
  data() {
      return {
        showBooks: true,
        title: 'The Final Empire',
        auther: 'Brandon Sanderson',
        age: 45   
      }
  },
  methods: {
    toggleShowBooks(title) {
        this.showBooks = !this.showBooks
    }
  }
});

app.mount('#app')