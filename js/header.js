const signIn = document.getElementById('sign-in');
const navbarNavLink = document.getElementById('navbar__nav-linksC');
let Users = JSON.parse(localStorage.getItem("users"));

if (!Users || Users.length === 0) {
    Users = [
        {
            "name": "USUARIO",
            "age": "34",
            "password": "alfabeta",
            "email": "asd@gmail.com",
            "gender": "3",
            "role": "USER_ROLE"
        }
    ];
    localStorage.setItem("users", JSON.stringify(Users));
}



let Products = JSON.parse(localStorage.getItem("Products"));

    if (!Products || Products.length === 0) {
        Products = [{
            date:"2023-05-02",
            description:" - Monitor Curvo Gamer TUF Gaming VG24VQ, 23.6 pulgadas Full HD (1920 x 1080), 144Hz, Extreme Low Motion Blur™, FreeSync™, 1ms (MPRT), Monitor de juegos 1500R Full HD de 23.6 pulgadas",
            image:"https://fullh4rd.com.ar/img/productos/Pics_Prod/monitor-24-asus-vg24vq-curvo-gaming-144hz-audio-0.jpg",
            name:"MONITOR 24 ASUS VG24VQ CURVO GAMING 144HZ AUDIO",
            price:24900},

            {
            date:"2023-05-02",
            description:" - - Producto de audio: auriculares Micrófono Desmontable Sí , Respuesta de frecuencia de auriculares: 20Hz - 20 kHz, Sensibilidad de auriculares: 113dB (+/- 3dB), Impedancia: 32 ohmios a 1 kHz",
            image:"https://benchmarkhardware.com/wp-content/uploads/2019/06/Corsair_Corsair-HS35-Stereo_Stereo_BH_2-1280x720.jpg",
            name:"AURICULARES CORSAIR GAMING HS35 GREEN",
            price:13738},

            {
            date:"2023-05-02",
            description:" - Capacidad 16 gb Velocidad 3000 mhz, Tipo DDR4 Cantidad De Memorias 1, Latencia 16 cl Voltaje 1.35 v, Aplicación: Computadoras de escritorio",
            image:"https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_17125_Memoria_GeiL_DDR4_16GB_3000MHz_Super_Luce_RGB_Black_981aafa9-grn.jpg",
            name:"MEMORIA GEIL DDDR4 16GB 3000MHZ SUPER LUCE RGB BLACK",
            price:29899},

            {
            date:"2023-05-02",
            description:" - Watts Nominal 850 w, Watts Reales 852 w, Formato ATX, Compatible Con Posición Inferior Si",
            image:"https://mla-s1-p.mlstatic.com/841418-MLA44596970630_012021-F.jpg",
            name:"FUENTE ASUS ROG THOR 850W",
            price:77250},

            {
            date:"2023-05-02",
            description:" - - CARACTERISTICAS GENERALES Consumo 5 w Tdp 100 w, Tipo De Disipasión: Aire, DIMENSIONES Altura 123 mm, COMPATIBILIDAD: Socket Compatibles 1200,1200 Comet Lake",
            image:"https://teamtecno.com.ar/wp-content/uploads/2021/06/1618975055dc9f82a2e5cd2513806f93587ea401e0.jpg",
            name:"COOLER CPU ID COOLING SE-902-SD V2",
            price:4790},

            {
            date:"2023-05-02",
            description:" - Caracterísiticas:Respaldo reclinable en multiples ángulos (90º / 130º / 170º), Marco de acero con diseño ergonómico.Soporta hasta 90kg.Almohadillas apoya cervical y lumbar.",
            image:"https://s3-sa-east-1.amazonaws.com/saasargentina/SHmJdi9RptjyWMk4Kzea/imagen",
            name:"SILLA GAMER LEVEL UP",
            price:64860},
          
        ] 
            localStorage.setItem('products',JSON.stringify( Products));
};

let Order = JSON.parse(sessionStorage.getItem("order")) || [];

const badgeHTML = document.getElementById('card-count')

// va a ser la lista de lo que la persona ordene y vaya agregando
function actualizarBadge() {
    let totalQuantity = 0;
    Order.forEach((producto) => {
        totalQuantity += producto.quantity
    })


    badgeHTML.innerText = totalQuantity
    
    actualizarBadge()
}



function renderHeaderLinks(){    

    const currentUser = JSON.parse(localStorage.getItem('currentUser'))
    
    if(currentUser){//pregunta si el usuario existe
        signIn.innerHTML =  '<div onclick="logout()" class="navbar__nav-link">Logout</div>'

        if(currentUser.role === 'ADMIN_ROLE'){

            const adminProductLink = createListItemElement('admin-product', 'Admin Product');

            const adminUserLink = createListItemElement('admin-user', 'Admin Users');
            //const li = document.createElement('li')   //? SI quisieramos que quede bien seria esta linea (ejemplo 1)            

            navbarList.appendChild(adminProductLink) //y ahora lo agregamos al navbar
            navbarList.appendChild(adminUserLink) //y ahora lo agregamos al navbar
        }

    }else{        
        const link = createLinkElement('login', 'Login')
        signIn.replaceChildren(link)
    }
}

function createListItemElement(path, text){
    const listItem = document.createElement('li')
    listItem.classList.add('navbar__nav-item')

    listItem.setAttribute('id', path)
    link = createLinkElement(path,  text) //insertamos dentro del li el adminProductLink y lo mismo con el siguiente

    listItem.appendChild(link)
    return listItem
}


//con la siguiente funcion creamos las rutas de acceso, entonces segun cada cosa que hagamos tendra su pagina
function createLinkElement(path, text, type = null){
    let li;
    const link = document.createElement('a')
    link.classList.add('navbar__nav-link')
    link.href =`/pages/${path}/${path}.html`
    link.innerText = text
    
    return link
}

function logout(){
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    
    if(currentUser.role === 'ADMIN_ROLE'){
        document.getElementById('admin-product').remove(); //eliminamos los 2 botones cuando nos deslogueamos de un role admin
        document.getElementById('admin-user').remove(); //eliminamos los 2 botones cuando nos deslogueamos
    }

    localStorage.removeItem('currentUser');
    localStorage.removeItem('order')
    renderHeaderLinks();
}

renderHeaderLinks();

