cardContainer = document.getElementById('card-container');
function renderizarProductos(productsL) {

    cardContainer.innerHTML = ``;

    if (productsL.length === 0) {
        cardContainer.innerHTML = `<h1 class="disabled">ERROR, NO SE ENCONTRARON PRODUCTOS</h1>`;
        return;
    }

    productsL.forEach((producto,index )=> {

    let imageSrc = producto.image ? producto.image : '/assets/images/funciones-pagina/not-found.webp';
    
    // let index = Products.findIndex((p) => p.name === producto.name);

    const card = `
                <article class="card">
                <div class="card__header">
                    <img src="${imageSrc}" alt="${producto.name}" class="card__img">
                </div>
                <div class="card__body">
                    <div class="card__title">
                    ${producto.name}
                    </div>
                    <p class="card__description">
                    ${producto.description}    
                    </p>
                    <div class="card__date-price">
                        <div class="card__date">
                            ${producto.date}
                        </div>
                        <div class="card__price">
                        $ ${producto.price}
                        </div>
                </div>
                <div class="card__footer">
                    <div class="card__btn-container">
                        <a href="/pages/productDetail/productDetail.html?id=${index}" class="card__btn-detail" >
                        Detalle
                        </a>
                    </div>  
                    <div class="card__btn-container">
                    <a class="card__btn" href="/" onclick="addToCart(event, ${index})">
                    Comprar
                    </a>
                    </div>
                </div>
            </article>`

    cardContainer.innerHTML+= card;

    });

}
renderizarProductos(Products);

function searchProduct() {
    var searchTerm = document.getElementById('search-input').value;
    var products = JSON.parse(localStorage.getItem('Products'));
    var foundProducts = products.filter(function (product) {
        return product.name.toLowerCase().includes(searchTerm.toLowerCase());
    });

    var productCountElement = document.getElementById('product-count');
    productCountElement.textContent = 'Se encontraron ' + foundProducts.length + ' productos';

    renderizarCard(foundProducts)
}



function addToCart(id){
    const product = products[id];
        
    const newOrder = {
        image: product.image,
        name: product.name,
        price: product.price,
        cant: 1,
        total: product.price
        
    }
        
    const prod = Order.find((prod)=>{
        if(prod.name === product.name){
          prod.cant = parseInt(prod.cant) + 1 ;
          prod.total = prod.cant * parseInt(prod.price);
          return prod;
        }
      })
  
      if(!prod) {
        Order.push(newOrder);
      }

//Guardarlo en el local storage
localStorage.setItem('order',JSON.stringify( Order));

//Alerta de Producto agregado
showAlert('Producto agregado al carrito','exito')

contarProductos();

}



function deleteProduct(id) {
    const productName = Products[id].name;

    if (confirm(`¿Está seguro que desea borrar el producto ${productName}?`)) {
        Products.splice(id, 1);

        localStorage.setItem("Products", JSON.stringify(Products));

        // showAlert(`Elemento borrado correctamente.`);

        showAlert(`El elemento "${productName}" borrado correctamente`, 'success')

        renderizarTabla()
        return
    } else {
        showAlert(`Error al borrar el producto`, 'error');
        return; //es como poner return null, incluso se podria dejar sin el else, para que no haga nada
    }
}


function editProduct(id) {

    submitBtn.classList.add('edit-btn') //le agrega una clase al boton para que tome los estilos del css
    submitBtn.innerText = 'Modificar Producto' //va a cambiar lo que dice el boton

    let product = Products[id];
    console.table(product)
    const el = productForm.elements;
    el.name.value = product.name
    el.description.value = product.description
    el.price.value = product.price
    el.image.value = product.image

    editIndex = id; //esta declarado arriba de renderizarTabla y se hace para que podamos traernos el id del que estamos editando para mas tarde que se termine de modificar
} 



