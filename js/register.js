//1- Obtener formulario y almacenarlo en una variable de JS
const registerForm = document.querySelector('#registerForm');
//b- Obtener boton de submit
const registerBtn = document.getElementById(`registerSubmit`);


//2- Vamos a escuchar el evento directamente en JS
registerForm.addEventListener('submit', (event)=> {
    
    console.log('Submit event')
    //a- Preventdefault
    event.preventDefault();
    //b- Tomar los datos y armar el objeto usuario
    const el = event.target.elements;
    //d- Verificar que los datos ingresados de password y passoword2 son exactamente igual
    if(el.password1.value!== el.password2.value) {
        showAlert(`El password no coinciden`, ' warnning')
        return;
    }
    //c- Verificar si hay en el localStorage algun usuario guardado ya con ese email
    
    //i- Obtener los usuarios guardados en el localstorage
    const users = JSON.parse( localStorage.getItem('users'))||[];

 const userExist = checkIfUserExist(users);
 //existe:retorno y muestro un alert
 if(userExist) {
    alert(`El email ya existe`)
    return;
 }

 //no existe: sigo con mi sintaxis normalmente


 const user = {
     fullName:el.fullName.value,
        age:el.age.value,
        password:el.password1.value,
        email:el.email.value,
        gender:el.gender.value
    }
    
    //e- insertar en mi array de usuarios el nuevo user (lista de usuarios)
    users.push(user)
    
    //e- Guardarlo en el localStorage
    localStorage.setItem('users', JSON.stringify(users))//user ahora tiene un usuario mas
    
    //f- Limpiamos el formulario, podemos llevar al usuario a la pagina de login
    //a - Resetear el formulario
    //registerForm.reset();
    showAlert('El usuario se registro correctamente ' , 'success')

})

function checkIfUserExist(users, emaiToSearch) {
    //ii- Recorrer el array con un forEach
    
}


    
    
    //!SOLUCION 1
    let userEmailExist = false;
    //     users.forEach(usr => {
        
        //         if(usr.email === el.email.value) {
            //             console.warn(`El usuario ya existe`)
            //             userEmailExist = true;
            //             
            
            
            //         }
            //  if (userEmailExist) {
                //     console.warn(`El usuario ya existe`);
                //     return
                //  }
                
// //* SOLUCION 2
// const userExist = users.find(user => {
    //     if (user.email ===el.email.value) {
        //         return true;
        //     }
        //     return false; // No es necesario ya que si no lo defino se hace un return undefined (falsy)
        // })
        //     })
        
        //     if (userExist) {
            //         console.warn(`El usuario ya existe`);
            //         return;
            //     }
            
            
    // //*====SOLUCION 3

    // const indexOfUser = users.findIndex ( u => {
    //     if(u.email ===el.email.value) {
    //         return true
    //     }
    // })

    // if(indexOfUser) {
    //     console.warn(`El usuario ya existe` );
    //     return;
    // }
    
    
    // //3 Versiones
    // //Existe, retorno y muestro un alert
    // //no existe: sigo con mi sintaxis normalmente

