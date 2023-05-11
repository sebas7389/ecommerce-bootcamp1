//1- Obtener los datos del formulario
//1-a Guardar el formulario en una variable
const loginForm = document.getElementById('loginForm');
loginForm.addEventListener('submit', (event) => {
    event.preventDefault ();
    
    const {email, password} =loginForm.elements;
    console.log(email.value,password.value)
    
    const users = JSON.parse(localStorage.getItem('users'))||[];


    //2- Chequear los datos ingresadps con los usarios que tengo
    //2a- Obtener los usuarios almacenados

    const user = users.find((usr) => {
       if(usr.email === email.value) {
                return true;
            }
            return false;
    }) //{name, password, email, }
    
    // Se pone ! cuando no existe, si user no existe o si user.password es distinto del password alertar que hay un error y hacer un return.
    if(!user||user.password !== password.value) {
        showAlert('Usuario incorrecto', 'error!');
        
        }
        // Otra forma seria poner un else cuando los datos no son iguales y repetir

   
    localStorage.setItem('currentUser' , JSON.stringify(user));

    //TODO: Insertar alerta custom
    showAlert('Login correcto te redireccionaremos en unos instantes...')
    
    setTimeout(()=> {
        window.location.href = '/index.html';
    },1500)
});

    //a- Email que me ingreso, lo tiene algun usuario de mi array
    //b- password deberian ser las mismas
//3- Guardar en el localStorage un registro que va a ser currentUser - user

//Function logaut
//Borrar el registro en el localStorage