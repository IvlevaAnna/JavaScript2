Vue.component('cart', {
    props: ['show', 'cart'],
    template: `
    <div v-show="show" class="cart-block">
        <p v-if="!cart.length">Cart is empty</p>
        <cart-item v-for="item of cart"
            :key="item.id_product"
            :item="item"></cart-item>
    </div>
    `
})

Vue.component('cart-item', {
    props: ['item'],
    template: `
    <div class="cart-item">
        <img src="https://via.placeholder.com/200x150" class="cart-img"/>
        <div class="cart-text">
            <h3>{{ item.product_name }}</h3>
            <p>{{ item.price }}₽</p>
            <p>товар {{ item.quantity }}</p>
        </div>
    </div>
    `
})
