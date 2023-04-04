//1-a Guardar el formulario en una variable
const loginForm = document.getElementById('loginForm');

//1- Obtener los datos del formulario
loginForm.addEventListener('submit', (event) => {
    event.preventDefault();
    console.dir (loginForm);

    const {email, password} =loginForm.elements;

    console,log ( email, password)
    
    //2- Chequear los datos ingresadps con los usarios que tengo
    //2a- Obtener los usuarios almacenados
const users = JSON.parse(localStorage.getItem('users'))||[];

const user = users.find(usr) => {
if(usr.email ===email.value) {
    return true;
}
return false;
})//{name, password, email, }

if(!user) {
    alert('Los datos ingresados no son correctos');
}

if(user.password === password.value) {
    localStorage.setItem('currentUser' , JSON.stringify(user));
    alert('Login correcto')
}

});
    //a- Email que me ingreso, lo tiene algun usuario de mi array
    //b- password deberian ser las mismas
//3- Guardar en el localStorage un registro que va a ser currentUser - user

//Function logaut
//Borrar el registro en el localStorage