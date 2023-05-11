cardContainer = document.getElementById('card-container');
// const btnCloseCategory = document.getElementById("category-btn-close");

Products = JSON.parse(localStorage.getItem('products')) || [];

function renderizarProductos(products) {

    cardContainer.innerHTML = ``;

    if (products.length === 0) {
        cardContainer.innerHTML = `<h1 class="disabled">ERROR, NO SE ENCONTRARON PRODUCTOS</h1>`;
        return;
    }

    products.forEach((product,index )=> {
        
    const card = document.createElement('article');
    card.classList.add('card');

    card.innerHTML = `<div class="card__header">
        <img src="${imageSrc}" alt="${product.name}" class="card__img">
    </div>
    <div class="card__body">
        <div class="card__title">
        ${product.name}
        </div>
        <p class="card__description">
        ${product.description}    
        </p>
        <div class="card__date-price">
            <div class="card__date">
                ${product.date}
            </div>
            <div class="card__price">
               $ ${product.price}
            </div>
    </div>
    <div class="card__footer">
        <div class="card__btn-container">
            <a href="/pages/productDetail/productDetail.html?id=${index}" class="card__btn-detail" >
            Detalle
            </a>
        </div>  
        <div class="card__btn-container">
            <button onclick="agregarOrden(${index})" class="card__btn" >
                Comprar
            </button>
        </div>
    </div>`


    cardContainer.innerHTML+= card;

    });

}
renderizarProductos(products);

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



function addToCart(event, productId) {
    event.preventDefault();

    const product = Products[productId];

    // Buscar si el producto ya está en el carrito
    const index = Order.findIndex(item => item.name === product.name);

    if (index !== -1) { // Si el producto ya está en el carrito, aumentar su cantidad
        Order[index].quantity++;
    } else { // Si el producto no está en el carrito, agregarlo con cantidad 1
        const newProduct = {
            ...product,
            quantity: 1
        };
        Order.push(newProduct);
    }

    // Guardar el carrito actualizado en el localStorage
    sessionStorage.setItem("order", JSON.stringify(Order));
    console.log(Order);
    window.location.replace("/pages/order/order.html");
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



