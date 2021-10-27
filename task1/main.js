const products = [
    {id: 1, title: 'Notebook', price: 1000},
    {id: 2, title: 'Mouse', price: 100},
    {id: 3, title: 'Keyboard', price: 250},
    {id: 4, title: 'Gamepad', price: 150},
]

const renderProduct = (title = 'Item', price = 1000) => {
    return `<div class="product-item">
        <h3>${title}</h3>
        <p>${price}</p>
        <button class="by-btn">Добавить</button>
    </div>`
}

const renderProducts = (list) => {
    const productsList = list.map( (item) => renderProduct(item.title, item.price))

    let box = document.querySelector('.products')
    for(let i =0; i < productsList.length; i++){
        box.insertAdjacentHTML('beforeend', productsList[i])
    }
}

renderProducts(products)
