const imgs = document.querySelectorAll('.img-select a');
const imgBtns = [...imgs];
let imgId = 1;

imgBtns.forEach((imgItem) => {
    imgItem.addEventListener('click', (event) => {
        event.preventDefault();
        imgId = imgItem.dataset.id;
        slideImage();
    });
});

function slideImage(){
    const displayWidth = document.querySelector('.img-showcase img:first-child').clientWidth;

    document.querySelector('.img-showcase').style.transform = `translateX(${- (imgId - 1) * displayWidth}px)`;
}

window.addEventListener('resize', slideImage);

// //Alerta de Producto agregado
// showAlert('Producto agregado a la Orden','exito');

// }

// function comprarOrden(){

//   const existe = Order.find((prod)=>{
//     if(product.name === product.name){
//           return prod;
//     }
//   })
//   if(!existe)
//      agregarOrden();
//   window.location.href = "/pages/order/order.html";

// }