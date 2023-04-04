const  showAlert = (text, type, success) => {
    
    //*VAMOS A HACER NUESTRO ALERT CUSTOM
    //Crea un elemento HTML Node
    const alertDialog = document.createElement('div');
    //Añade una clase
    alertDialog.classList.add('alert-dialog');
    alertDialog.innerText = text;

    document.body.appendChild(alertDialog);

if(type ==='error') {
alertDialog.style.backgroundColor = 'red';
}
if(type ==='warning') {
    alertDialog.style.backgroundColor = 'orage'
}
//Alerta para demorar su desaparecion, luego de haberlo creado lineas anterior con  document createElement
setTimeout(() => alertDialog.classList.add('show'),10)

setTimeout(()=> {
        alertDialog.remove();
        // window.location.href = '/pages/login/login.html'
    }, 3000)
}