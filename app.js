const app = Vue.createApp({
  data() {
      return {
        url: "https://vuejs.org",
        showBooks: true,
        title: 'The Final Empire',
        auther: 'Brandon Sanderson',
        age: 45,   
        x: 0,
        y: 0,
        books: [
          { title: 'name of the wind', author: 'patrick rothfuss', isFav: true },
          { title: 'the way of kings', author: 'brandon sanderson', isFav: false},
          { title: 'the final empire', author: 'brandon sanderson', isFav: true }
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
    },
    toggleFav(book) {
      book.isFav = !book.isFav
    }
  },
  computed: {
    filteredBooks() {
      return this.books.filter(book => book.isFav)
    }
  }

});

app.mount('#app')