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
    
    
    //c- Verificar si hay en el localStorage algun usuario guardado ya con ese email
    
    //d- Verificar que los datos ingresados de password y passoword2 son exactamente igual
    
    
    //e- Guardarlo en el localStorage
    
    //f- Limpiamos el formulario, podemos llevar al usuario a la pagina de login
})