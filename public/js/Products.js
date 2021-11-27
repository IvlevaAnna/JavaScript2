Vue.component('products',{
    data () {
        return {
            catalogUrl: '',
            products: [],
            filtered: [],
            imgCatalog: 'https://images.unsplash.com/photo-1537498425277-c283d32ef9db?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2678&q=80'
        }
    },
    methods: {
        filter(value){
            let regexp = new RegExp(value, 'i');
            this.filtered = this.products.filter(el => regexp.test(el.product_name));
        }
    },
    mounted(){
        this.$parent.getJson('/api/getProducts')
            .then(data => {
                for(let el of data){
                    this.products.push(el);
                    this.filtered.push(el);
                }
            });
    },
    template: `
    <div class="products">
        <product v-for="item of filtered" 
            :key="item.id_product" 
            :img="imgCatalog" 
            :product="item"></product>
    </div>
    `
})

Vue.component('product',{
    props: ['product', 'img'],
    template: `
    <div class="product-item">
        <img :src="img" alt="Some img">
        <div class="desc">
            <h3>{{product.product_name}}</h3>
            <p>{{product.price}}₽</p>
            <button class="buy-btn" @click="$root.$refs.cart.addProduct(product)">Купить</button>
        </div>
    </div>
    `
})
