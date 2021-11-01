class CartItem extends ProductItem {
  constructor(item, img='https://via.placeholder.com/200x150', count) {
    super(item, img='https://via.placeholder.com/200x150')
    this.count = count
  }

  addCount() {}

  removeCount() {}

  uploadPrice() {}
}

class Cart extends ProductsList {
  constructor(container = '.cart') {
    super(container = '.products')
  }

  addItem() {}

  deleteItem() {}

  clearCart() {}
}

class ProductsList {
  constructor(container = '.products') {
    this.container = container;
    this._goods = [];
    this._goodsObjects = [];

    this._fetchGoods();
    this._render();
  }

  _fetchGoods() {
    this._goods = [
      {id: 1, title: 'Notebook', price: 20000},
      {id: 2, title: 'Mouse', price: 1500},
      {id: 3, title: 'Keyboard', price: 5000},
      {id: 4, title: 'Gamepad', price: 4500},
    ];
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
    this.id = item.id;
    this.title = item.title;
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

const catalog = new ProductsList();

console.log(catalog.getTotalPrice())
