const signIn = document.getElementById('sign-in');

function renderHeaderLinks() {

    const currentUser = JSON.parse(localStorage.getItem ('currentUser'));
    
    if(currentUser) {
        signIn.innerHTML =`<div onclick="logout()"class ="navbar_nav-link">Logout</div>`
    } else {
        signIn.innerHTML = `<a href ="/pages/login/login.html" class="navbar_nav-link">Login</a>`
    }
}
