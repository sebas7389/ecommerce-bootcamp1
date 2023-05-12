function renderizarOrder(){

  let totalOrden = 0;
  const tableBody = document.getElementById('order-table_body');
  
  if (!tableBody) {
    console.error("No se encontró el elemento con id 'order-table_body'");
    return;
  }
  

    tableBody.innerHTML = ''//lo que hace esto o para lo que está es para que cada vez que se cargue la funcion, se borre toda la tabla
    if(Order.length === 0) {
        tableBody.innerHTML = '<tr class="disable"> <td coldspan = 6>NO SE ENCONTRARON PRODUCTOS </td></tr>';//colspan es para que ocupe hasta cierta cantidad de columnas
        return;
    }
    
     // Agrupar productos por nombre
     const groupedProducts = Order.reduce((acc, curr) => {
      if (!acc[curr.name]) {
        acc[curr.name] = {
          ...curr,
          quantity: 0,
          total: 0
        };
      }
      acc[curr.name].quantity += curr.quantity;
      acc[curr.name].total += curr.total;
      return acc;
    }, {});


const productArray = Object.values(groupedProducts);
let suma = 0

    productArray.forEach((producto,index)=>{
        let imageSrc = producto.image ? producto.image : '/assets/images/funciones-pagina/not-found.webp';

       const tableRow = `
       <tr class="order-product">
       <td class="order-product__img-cell">
           <img class= "order-product__img" src="${imageSrc}" width="120px" alt="${producto.name}">                    
       </td>
       <td class= "order-product__name">
           ${producto.name}
       </td>
       <td class="order-product__quantity quantity-product">
         <button class="quantity-order-product__btn" id="restar" data-index="${index}" onclick="decreaseQuantity(event, ${index})">
             -
         </button>
         <input type="number" class="quantity-product__input" value=${producto.quantity} data-index="${index}">    
         <button class="quantity-order-product__btn" id="sumar" data-index="${index}" onclick="increaseQuantity(event, ${index})">
             +
         </button>
       </td>
       <td class="product__price" id="total-pedido-${index}">
         $ ${producto.price * producto.quantity}
       </td>        
       <td class= "product__actions">
           <button class="product__action-btn" onclick="deleteProduct(${index})"> 
               <i class="fa-solid fa-trash-can"></i>
           </button>
       </td>
   </tr> `


       tableBody.innerHTML += tableRow; 
       suma += producto.price * producto.quantity;
       totalOrden = Math.round(suma *100) /100;
       console.log (totalOrden)
    })

    updateTotal();
    const tableRow = `
        <tr>
                <td class="order-import-total" colspan = '4'>
                TOTAL
                </td>
                <td class="order-import-total">
                 $ ${totalOrden}
                </td>
        </tr>
       ` 
       tableBody.innerHTML += tableRow; 
       
       renderizarTabla();
}



function deleteProduct(id){
    Products.splice(id,1)
    //Guardarlo en el local storage
    localStorage.setItem('order',JSON.stringify( Products));
    
    renderizarTabla();
    showAlert('Producto Eliminado de la Orden')
    contarProductos();

}

function finalizarCompra(){
  const currentUser = JSON.parse(localStorage.getItem('currentUser'));
  if(!currentUser){
    showAlert('Debe estar logueado para poder Finalizar la compra','advertencia')
  } 
  else{
    if(Order.length === 0){
      showAlert('Debe seleccionar un producto para poder Finalizar la compra','advertencia')
    }else{
      localStorage.removeItem('order')
      Order = []; //Vacia el carrito
      renderizarTabla(); //Renderizar la orden antes de eliminar el contenido del carrito
      showAlert('Compra Finalizada','exito')
      contarProductos();
    }
    
  } 
  
}

function increment(id) {
    var input = document.getElementById(`order-cant-input${id}`)
    var value = parseInt(input.value, 10);
    input.value = isNaN(value) ? 1 : value + 1;
    updateTotal(id);
  }
  
  function decrement(id) {
    var input = document.getElementById(`order-cant-input${id}`)
    var value = parseInt(input.value, 10);
    input.value = isNaN(value) ? 1 : value - 1;
    if (input.value < 1) {
      input.value = 1;
    }
    updateTotal(id)
  }

  function updateTotal(id){

    const cantProd = document.getElementById(`order-cant-input${id}`); 
            
    Products[id].cant =  parseInt(cantProd.value);
    Products[id].total = Products[id].cant * parseInt(Products[id].price);
      
//Guardarlo en el local storage
localStorage.setItem('order',JSON.stringify( Products));
renderizarTabla();

contarProductos();

  }