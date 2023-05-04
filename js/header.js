const signIn = document.getElementById('sign-in');


function renderHeaderLinks() {

    const currentUser = JSON.parse(localStorage.getItem ('currentUser'));
    
    if(currentUser) {
        signIn.innerHTML =`<div onclick="logout()"class ="navbar_nav-link">Logout</div>`;


        const adminProductLink = createLinkElement('admin-product', 'Admin Product', 'li');
        const productListItem = document.createElement('li');

        const adminUserLink = createLinkElement('admin-user', 'Admin Users', 'li');
        
        const userListItem = document.createElement('li');

    } else {
        const link = document.createLinkElement('login', 'login');
        signIn.replaceChildren(link);
        // link.setAttribute('target', '_black');
        // signIn.innerHTML = `<a href ="/pages/login/login.html" class="navbar_nav-link">Login</a>`
    }
}

function createListItemElement (path, text){
    const link = document.createElement('a')
}

function createLinkElement(path, text) {
    
    const listItem = document.createElement('li');
    link.classList.add('navbar_nav-link');
    link.href = `/pages/${path}/${patch}.html`;
    link.innerText= text;

    // if(type) {
    //     li = document.createElement(type);
    // }   li.appendChild(link)
    // return type
}

