const btnCart = document.querySelector('.container-cart-icon')
const containerCartProducts = document.querySelector('.container-cart-products')

btnCart.addEventListener('click',() => {
    containerCartProducts.classList.toggle('hidden-cart')
})

const cartInfo = document.querySelector('.cart-product')
const rowProduct = document.querySelector('.row-product')

//Lista de todos los contenedores de productos

const productsList = document.querySelector('.cards-container')

//Variable de arreglos de productos

let allProdutcs = []

productsList.addEventListener('click', e => {

    console.log('hola mundo')
})