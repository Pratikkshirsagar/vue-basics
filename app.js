const app = Vue.createApp({
  data() {
      return {
        showBooks: true,
        title: 'The Final Empire',
        auther: 'Brandon Sanderson',
        age: 45,   
        x: 0,
        y: 0,
        books: [
          { title: 'name of the wind', author: 'patrick rothfuss' },
          { title: 'the way of kings', author: 'brandon sanderson' },
          { title: 'the final empire', author: 'brandon sanderson' }
        ]
      }
  },
  methods: {
    toggleShowBooks(title) {
        this.showBooks = !this.showBooks
    },
    handleEvent(e, data) {
      console.log('event', data);
    },
    handleMouseMove(e) {
      this.x = e.offsetX
      this.y = e.offsetY
    }

  }
});

app.mount('#app')