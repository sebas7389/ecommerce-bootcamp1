const params = location.search;

const index = params.split('id=')[1];

const paramsURL = new URLSearchParams(params);

const paramsEntries = Object.fromEntries(paramsURL);

const products = JSON.parse(localStorage.getItem('products'));

const product = products[index];

const mainD = document.getElementById('main')

function renderizarDetail() {
  mainD.innerHTML = ``;

  const detial = `
                <div class = "card__detailr">
                <div class = "card__detail">
                  <!-- card left -->
                  <div class = "detail-imgs">
                    <div class = "detail-img-display">
                      <div class = "detail-img-showcase">
                        <img src = "${product.image}" alt="${product.name}">
                       
                      </div>
                    </div>
                    <div class = "detail-select">
                      <div class = "detail-img-item">
                      </div>
                    </div>
                  </div>
                  <!-- card right -->
                  <div class = "detail-product-content">
                    <h2 class = "detail-product-title">${product.name}</h2>
                    <a href = "#" class = "product-link">visita nuestra pagina Rsystem</a>
                    <div class = "detail-product-rating">
                      <i class = "fas fa-star"></i>
                      <i class = "fas fa-star"></i>
                      <i class = "fas fa-star"></i>
                      <i class = "fas fa-star"></i>
                      <i class = "fas fa-star-half-alt"></i>
                      <span>4.7(21)</span>
                    </div>

                    <div class = "detail-product-price">
                      <p ${product.price}</p>
                      <p ${product.price}</p>
                    </div>

                    <div class = "detail-product-detail">
                      <p>${product.description}</p>
                      <ul>
                        <li>Disponible: <span>En stock</span></li>
                        <li>Envio: <span>Gratis</span></li>
                      </ul>
                    </div>

                    <div class = "purchase-info">
                    <h2>Cantidad</h2>
                    <div class="product-quantity-container__increase quantity-product">
                      <button class="quantity-product__btn" onclick="decreaseInput()">
                          -
                      </button>
                      <input type="number" class="quantity-product__input" id="quantityInput" value=1>
                      <button class="quantity-product__btn" onclick="increaseInput()">
                          +
                      </button>
                  </div>
                    
                    <button class = "btn" onclick="addCart()">
                      Añadir al carrito <i class = "fas fa-shopping-cart"></i>
                    </button>
                    <button class = "btn" onclick="btnComprar()">Comprar</button>
                  </div>
                </div>
              </div>
            </div>`

  mainD.innerHTML = detial
} 
renderizarDetail()
    



let input = document.getElementById("quantityInput");
    let currentValue = parseInt(input.value);

    function increaseInput() {
        input.value = currentValue + 1;
        currentValue = parseInt(input.value);
    }

    function decreaseInput() {
        if (currentValue > 1) {
            input.value = currentValue - 1;
            currentValue = parseInt(input.value);
        }
    }
  

  function addCart() {
    const existingCartItems = JSON.parse(sessionStorage.getItem('order')) || [];
    const updatedProduct = { ...product, quantity: parseInt(document.querySelector('.quantity-product__input').value) };
    const existingProductIndex = existingCartItems.findIndex(item => item.name === updatedProduct.name);
    if (existingProductIndex !== -1) {
        existingCartItems[existingProductIndex].quantity += updatedProduct.quantity;
    } else {
        existingCartItems.push(updatedProduct);
    }
    sessionStorage.setItem('order', JSON.stringify(existingCartItems));
};
    
function btnComprar() {
  const existingCartItems = JSON.parse(sessionStorage.getItem('order')) || [];
  const updatedProduct = { ...product, quantity: parseInt(document.querySelector('.quantity-product__input').value) };
  const existingProductIndex = existingCartItems.findIndex(item => item.name === updatedProduct.name);
  if (existingProductIndex !== -1) {
      existingCartItems[existingProductIndex].quantity += updatedProduct.quantity;
  } else {
      existingCartItems.push(updatedProduct);
  }
  sessionStorage.setItem('order', JSON.stringify(existingCartItems));


  window.location.replace("/pages/order/order.html");
};