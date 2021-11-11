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
  },
  methods: {
    getJson(url){
      return fetch(url)
          .then(result => result.json())
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
              this.products = data;
            });
      } else {
        this.products = this.products.filter( product => regExp.test(product.product_name))
        console.log(this.products)
        this.noData()
      }
    },
    noData() {
      if ( this.products.length === 0 ){
        return document.querySelector('.products').innerText = 'Нет данных'
      }
    },
  },
  beforeCreate() {

  },
  created() {
    this.getJson(`${API + this.catalogUrl}`)
        .then(data => {
          this.products = data;
          this.noData()
        });
    this.getJson(`${API + this.getBasket}`)
        .then(data => {
          this.cart = data.contents;
        });
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
