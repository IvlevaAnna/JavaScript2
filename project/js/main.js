const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses'

// let makeGetRequest = (url) => {
//
//   return new Promise((resolve, reject) => {
//     let xhr;
//
//     if (window.XMLHttpRequest) {
//       xhr = new XMLHttpRequest();
//     } else if (window.ActiveXObject) {
//       xhr = new ActiveXObject("Microsoft.XMLHTTP");
//     }
//
//     setTimeout(() =>  {
//       if (xhr.readyState === 4) resolve(xhr.responseText)
//       else reject('Error')
//       xhr.open('GET', url, true);
//       xhr.send();
//     }, 1500)
//   }
// )}


class ProductsList {
  constructor(container = '.products') {
    this.container = container;
    this._goods = [];
    this._goodsObjects = [];

    this._getProducts().then(data => {
      this._goods = data
      this._render();
    });
  }

  _getProducts(){
    return fetch(`${API}/catalogData.json`)
        .then(data => data.json())
        .catch(error => console.log('Error'))
  }

  _render() {
    const block = document.querySelector(this.container);

    for (const product of this._goods) {
      const productObject = new ProductItem(product);
      this._goodsObjects.push(productObject);

      block.insertAdjacentHTML('beforeend', productObject.getHTMLString())
    }
  }

  getTotalPrice() {
    let total = null

    for(let i = 0; i < this._goods.length; i++ ){
      total += this._goods[i].price
    }

    return total
  }
}

class ProductItem {
  constructor(item, img='https://via.placeholder.com/200x150') {
    this.id = item.id_product;
    this.title = item.product_name;
    this.price = item.price;
    this.img = img;
  }

  getHTMLString() {
    return `<div class="product-item" data-id="${this.id}">
              <img src="${this.img}" alt="Some img">
              <div class="desc">
                  <h3>${this.title}</h3>
                  <p>${this.price} \u20bd</p>
                  <button class="buy-btn">Купить</button>
              </div>
          </div>`;
  }
}

class CartItem extends ProductItem {
  constructor(item, img='https://via.placeholder.com/200x150') {
    super(item, img='https://via.placeholder.com/200x150')
    this.quantity = item.quantity
  }

  getHTMLStringCart() {
    return `<div class="cart-item" id="${this.id}">
                <img src="${this.img}" class="cart-img"/>
                <div class="cart-text">
                    <h3>${this.title}</h3>
                    <p>${this.price} \u20bd</p>
                    <p>товар ${this.quantity}</p>
                </div>
            </div>`
  }
}

class Cart {
  constructor(container = '.cart') {
    this.container = container
    this.itemObjects = []
    this.getCart().then(data => {
      this.items = data.contents
      this.render()
    })
  }

  getCart() {
    return fetch(`${API}/getBasket.json`)
        .then(data => data.json())
        .catch(error => console.log(error))
  }

  render() {
    const cart = document.querySelector(this.container)

    for(const item of this.items) {
      const itemObject = new CartItem(item)
      this.itemObjects.push(itemObject)

      cart.insertAdjacentHTML('beforeend', itemObject.getHTMLStringCart())
    }
  }

}

const catalog = new ProductsList();

let show = true
const btn_cart = document.querySelector('.btn-cart')

btn_cart.addEventListener('click', () => {
  if (show){
    show = !show

    let cart = new Cart()
    document.querySelector('.cart').classList.toggle("hidden")

    return document.querySelector('.cart')
  } else {
    show = !show

    document.querySelector('.cart').classList.toggle("hidden")
    document.querySelector('.cart').innerHTML = ''

    return document.querySelector('.cart')
  }
})

console.log(catalog.getTotalPrice())
