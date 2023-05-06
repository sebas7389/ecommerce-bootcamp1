const cardContainer = document.getElementById('card-container');
// const btnCloseCategory = document.getElementById("category-btn-close");

// const productsLS = JSON.parse(localStorage.getItem('products')) || [];

if(!usersList || usersList.length===0) {
    window.localStorage.setItem('users',JSON.stringify([{
        name:'Admin',
        email:'admin@admin.com',
        password:'Alfabeta1.',
        role:'ADMIN_ROLE',
        bornDate:new Date().toLocaleDateString().slice(0,10),
        creationDate:new Date().toLocaleDateString().slice(0,10)
    }]))
    window.location.reload()

}

if(!productsR ||products.length===0) {
    let ProductsA = 
        [{category:"MO",
        date:"2023-05-02",
        description:" - Monitor Curvo Gamer TUF Gaming VG24VQ, 23.6 pulgadas Full HD (1920 x 1080), 144Hz, Extreme Low Motion Blur™, FreeSync™, 1ms (MPRT), Monitor de juegos 1500R Full HD de 23.6 pulgadas",
        image:"https://fullh4rd.com.ar/img/productos/Pics_Prod/monitor-24-asus-vg24vq-curvo-gaming-144hz-audio-0.jpg",
        name:"MONITOR 24 ASUS VG24VQ CURVO GAMING 144HZ AUDIO",
        price:24900},
        {category:"AU",
        date:"2023-05-02",
        description:" - - Producto de audio: auriculares Micrófono Desmontable Sí , Respuesta de frecuencia de auriculares: 20Hz - 20 kHz, Sensibilidad de auriculares: 113dB (+/- 3dB), Impedancia: 32 ohmios a 1 kHz",
        image:"https://benchmarkhardware.com/wp-content/uploads/2019/06/Corsair_Corsair-HS35-Stereo_Stereo_BH_2-1280x720.jpg",
        name:"AURICULARES CORSAIR GAMING HS35 GREEN",
        price:13738},
        {category:"ME",
        date:"2023-05-02",
        description:" - Capacidad 16 gb Velocidad 3000 mhz, Tipo DDR4 Cantidad De Memorias 1, Latencia 16 cl Voltaje 1.35 v, Aplicación: Computadoras de escritorio",
        image:"https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_17125_Memoria_GeiL_DDR4_16GB_3000MHz_Super_Luce_RGB_Black_981aafa9-grn.jpg",
        name:"MEMORIA GEIL DDDR4 16GB 3000MHZ SUPER LUCE RGB BLACK",
        price:29899},
        {category:"FU",
        date:"2023-05-02",
        description:" - Watts Nominal 850 w, Watts Reales 852 w, Formato ATX, Compatible Con Posición Inferior Si",
        image:"https://mla-s1-p.mlstatic.com/841418-MLA44596970630_012021-F.jpg",
        name:"FUENTE ASUS ROG THOR 850W",
        price:77250},
        {category:"CO",
        date:"2023-05-02",
        description:" - - CARACTERISTICAS GENERALES Consumo 5 w Tdp 100 w, Tipo De Disipasión: Aire, DIMENSIONES Altura 123 mm, COMPATIBILIDAD: Socket Compatibles 1200,1200 Comet Lake",
        image:"https://teamtecno.com.ar/wp-content/uploads/2021/06/1618975055dc9f82a2e5cd2513806f93587ea401e0.jpg",
        name:"COOLER CPU ID COOLING SE-902-SD V2",
        price:4790},
        {category:"SI",
        date:"2023-05-02",
        description:" - Caracterísiticas:Respaldo reclinable en multiples ángulos (90º / 130º / 170º), Marco de acero con diseño ergonómico.Soporta hasta 90kg.Almohadillas apoya cervical y lumbar.",
        image:"https://s3-sa-east-1.amazonaws.com/saasargentina/SHmJdi9RptjyWMk4Kzea/imagen",
        name:"SILLA GAMER LEVEL UP",
        price:64860},
      

        ];
        window.localStorage.setItem('products',JSON.stringify( ProductsA));
        window.location.reload()
    }



function renderizarProductos(ProductsA) {
    cardContainer.innerHTML = ``;

    products.forEach((product,index )=> {
        
    const card = document.createElement('article');
    card.classList.add('card');

    card.innerHTML += `
    
    <div class="card__header">
        <img src="${product.image}" alt="${product.name}" class="card__image">
    </div>
    <div class="card__body">
        <div class="card__title">
        ${product.name}
        </div>
        <p class="card__description">
        ${product.description}    
        </p>
            <div class="card__date">
                ${product.date}
            </div>
            <div class="card__price">
                $ ${product.price}
            </div>
    </div>
    <div class="card__footer">
        <div class="card__btn-container">
            <a href="/pages/product-detail/product-detail.html?id=${index}" class="card__btn-detail" >
            Detalle
            </a>
        </div>  
        <div class="card__btn-container">
            <button onclick="agregarOrden(${index})" class="card__btn" >
                Agregar
            </button>
        </div>
    </div>`


    cardContainer.appendChild(card);

    });

}

// funcion para los botones de eleccion de categoria
function elegirCategoria(category){
    const cartCategory = document.getElementById('cards__category');
    let text;

    switch (category) {
        case "MO":
            text = 'Categoria: Monitores';
            break;
        case "AU":
            text = 'Categoria: Auriculares';
            break;
        case "ME":
            text = 'Categoria: Memorias';
            break;
        case "FU":
            text = 'Categoria: Fuentes';
            break;
        case "CO":
            text = 'Categoria: Coolers';
            break;
        case "SI":
            text = 'Categoria: Sillas Gamers';
            break;  

        }

        if(category != 'Todos')
            btnCloseCategory.style.display = 'block';
        else
        btnCloseCategory.style.display = 'none';
        cartCategory.innerHTML = `${text}`
        filtrarProductos(category)

}

btnCloseCategory.addEventListener('click',() => {
    elegirCategoria('Todos')

})

function AgregarCart (product){
    if(!currentUser){
        showAlert('Para poder agregar productos debe loguearse',null,8000)
        setTimeout(() => {
            window.location.href='/pages/login/login.html'
        }, 8000); 
            
        return
    }

let userCart=allCarts?.filter((el)=> el?.email === currentUser?.email)||[]


    let index = (userCart[0].order.findIndex(el=>el.product==product.id))
    
    if(index !== -1){
        userCart[0].order[index].quantity++ 
    }else{
        userCart[0].order.push({
            product:product.id,
            quantity:1
        })
    }
    
    window.localStorage.setItem('cart',JSON.stringify(userCart))
    renderOrder(userCart)
    actualizarBadge(userCart)
    showAlert('Producto agregado al carro de compras correctamente!','ok')
}


function searchP(evt){
    if(evt.keyCode !==13 && evt.target.id !== 'search-index'){
        return
    }
    const searchValue=document.getElementById('search-product-index').value.toLowerCase()
    let searchResults = products.filter((el)=>{
        return el.name.toLowerCase().includes(searchValue) ||
        el.category.toLowerCase().includes(searchValue)         
    })
    if(searchResults.length > 1) {document.querySelector('.section-cards__products-count').innerHTML = `Se encontraron ${searchResults.length} productos`}
    else{ document.querySelector('.section-cards__products-count').innerHTML = `Se encontró 1 producto`}
    if(searchResults.length === 0) {document.querySelector('.section-cards__products-count').innerHTML = `No se encontraron productos. Puede buscar con palabras similares.`}

    renderizarProductos(searchResults)
}

function cleanSearchIndex(){
    renderizarProductos(products)
    document.getElementById('search-product-index').value=null
}


renderizarProductos(products)

