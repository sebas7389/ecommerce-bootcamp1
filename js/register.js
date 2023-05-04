//1- Obtener formulario y almacenarlo en una variable de JS
const registerForm = document.querySelector('#registerForm');
//b- Obtener boton de submit
const registerBtn = document.getElementById('registerSubmit');

//2- Vamos a escuchar el evento directamente en JS
registerForm.addEventListener('submit', (event) => {
  console.log('Submit event');
  //a- Preventdefault
  event.preventDefault();
  //b- Tomar los datos y armar el objeto usuario
  const el = event.target.elements;
  console.log(el)

  //d- Verificar que los datos ingresados de password y passoword2 son exactamente igual
  if (el.password.value !== el.password2.value) {
    showAlert(`El password no coinciden`, " warnning");
    return;
  }
  //c- Verificar si hay en el localStorage algun usuario guardado ya con ese email

  //i- Obtener los usuarios guardados en el localstorage
  const users = JSON.parse(localStorage.getItem("users")) || [];

  const userExist = checkIfUserExist(users);
  //existe:retorno y muestro un alert
  if (userExist) {
    alert(`El email ya existe`);
    return;
  }

  //no existe: sigo con mi sintaxis normalmente
  console.log(`sigue`)
  const user = {
  
    name: el.name.value,
    age: el.age.value,
    password: el.password.value,
    email: el.email.value,
    gender: el.gender.value
}
  //e- insertar en mi array de usuarios el nuevo user (lista de usuarios)
  users.push(user);

  //e- Guardarlo en el localStorage
  localStorage.setItem("users", JSON.stringify(users)); //user ahora tiene un usuario mas

  //f- Limpiamos el formulario, podemos llevar al usuario a la pagina de login
  //a - Resetear el formulario
  //registerForm.reset();

function checkIfUserExist(users, emailToSearch) {
//* 3 Versiones
//ii- Recorrer el array con un forEach
//!====SOLUCION 3
const indexOfUser = users.findIndex ( usuario => {
    if(usuario.email ===emailToSearch) {
      //Solamente trabaja dentro del findIndex
        return true;
    }
})

if(indexOfUser >= 0) {
    console.warn(`El usuario ya existe findIndex` );
    //Retorno mi funcion
    return;
}
}
//!-

//!SOLUCION 1
// let userEmailExist = false;
//     users.forEach(usr => {
//         if(usr.email === el.email.value) {
//           userEmailExist = true;
//        }
//     })       
//  if (userEmailExist) {
//     console.warn(`El usuario ya existe`);
//     return
//  }
//!


//* SOLUCION 2
// const userExist = users.find(user => {
//     if (user.email ===el.email.value) {
//         return true;
// }
// return false; // No es necesario ya que si no lo defino se hace un return undefined (falsy)
// })
//  if (userExist) {
//         console.warn(`El usuario ya existe`);
//         return;
//}
//*
})