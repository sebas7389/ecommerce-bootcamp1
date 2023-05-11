const params = window.location.search;

const index = params.split('id=')[1];

const paramsURL = new URLSearchParams(params);

const paramsEntries = Object.fromEntries(paramsURL);

const products = JSON.parse(localStorage.getItem('products'));

const product = products[index];

    
const imgProduct =  document.getElementById('product-detail-container-img-img');
const sitioProduct =  document.getElementById('product-detail-container-description__sitio');
imgProduct.src = product.image;
sitioProduct.href=product.image;
sitioProduct.innerHTML=product.image;

const catProduct =  document.getElementById('product-detail-container-order-head__category');

catProduct.innerText = product.category;

const nameProduct =  document.getElementById('product-detail-container-order-head__name');

nameProduct.innerText = product.name;

const descProduct =  document.getElementById('product-detail-container-order-main__desc'); 
const descriptionProduct =  document.getElementById('product-detail-container-description__desc'); 
 
descriptionProduct.innerText =product.description;
descProduct.innerText = product.description;

const priceProduct =  document.getElementById('product-detail-container-order-params__price');

priceProduct.innerText = '$ ' + product.price;


function increment(button) {
    var input = button.parentNode.querySelector('input[type="text"]');
    var value = parseInt(input.value, 10);
    input.value = isNaN(value) ? 1 : value + 1;
   // updateTotal();
  }
  
  function decrement(button) {
    var input = button.parentNode.querySelector('input[type="text"]');
    var value = parseInt(input.value, 10);
    input.value = isNaN(value) ? 1 : value - 1;
    if (input.value < 1) {
      input.value = 1;
    }
    
  }
  

function agregarOrden(){
    const cantProd = document.getElementById("product-detail-container-order-params__num")        
    const newOrder = {
        image: product.image,
        name: product.name,
        price: product.price,
        cant: parseInt(cantProd.value),
        total: parseInt(cantProd.value) * parseInt(product.price)
        
    }
    
    const prod = Order.find((prod)=>{
      if(prod.name === product.name){
        prod.cant = parseInt(prod.cant) + parseInt(cantProd.value);
        prod.total = prod.cant * parseInt(prod.price);
        return prod;
      }
    })

    if(!prod) {
      Order.push(newOrder);
    }

// //Guardarlo en el local storage
localStorage.setItem('order',JSON.stringify( Order));

contarProductos();

//Alerta de Producto agregado
showAlert('Producto agregado a la Orden','exito');

}

function comprarOrden(){

  const existe = Order.find((prod)=>{
    if(product.name === product.name){
          return prod;
    }
  })
  if(!existe)
     agregarOrden();
  window.location.href = "/pages/order/order.html";

}