const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

const app = new Vue({
  el: '#app',
  data: {
    catalogUrl: '/catalogData.json',
    getBasket: '/getBasket.json',
    products: [],
    cart: [],
    imgCatalog: 'https://via.placeholder.com/200x150',
    searchLine: '',
    show: false,
    error: false,
  },
  methods: {
    getJson(url){
      return fetch(url)
          .then(result => {
            this.error = false
            return result.json()})
          .catch(error => {
            console.log(error);
          })
    },
    addProduct(good) {
      console.dir(good);
    },
    filterGoods() {
      this.searchLine = document.querySelector('.search-field').value

      let regExp = new RegExp(this.searchLine, 'igm')

      if (this.searchLine === '') {
        this.getJson(`${API + this.catalogUrl}`)
            .then(data => {
              this.error = false
              this.products = data;
            })
            .catch(error => error = true)
      } else {
        this.products = this.products.filter( product => regExp.test(product.product_name))
        console.log(this.products)
      }
    },
  },
  beforeCreate() {

  },
  created() {
    this.getJson(`${API + this.catalogUrl}`)
        .then(data => {
          this.error = false
          this.products = data;
        })
        .catch(error => error = true)
    this.getJson(`${API + this.getBasket}`)
        .then(data => {
          this.error = false
          this.cart = data.contents;
        })
        .catch(error => error = true)
  },
  beforeMount() {

  },
  mounted() {

  },
  beforeUpdate() {

  },
  updated() {

  },
  beforeDestroy() {

  },
  destroyed() {

  },
});
