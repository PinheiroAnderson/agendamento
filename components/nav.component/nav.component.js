// navBarComponent()

// function navBarComponent() {

//     const element = document.getElementById('navbar-component')
//     const navbar = `
//     <nav class="navbar navbar-expand-lg fixed-top">
//     <div class="container">
//         <!-- <a class="navbar-brand" href="#">Navbar</a> logo da loja -->
//         <img src="./img/logo.jpg" height="40" alt="">
//         <button class="navbar-toggler bg-yellow" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
//             aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
//             <span class="navbar-toggler-icon"></span>
//         </button>
//         <div class="collapse navbar-collapse" id="navbarNav">
//             <ul class="navbar-nav me-auto">
//                 <li class="nav-item">
//                     <a class="nav-link" aria-current="page" href="index.html">Inicio</a>
//                 </li>
//                 <li class="nav-item">
//                     <a class="nav-link" href="index.html#services">Serviços</a>
//                 </li>
//                 <li class="nav-item">
//                     <a class="nav-link" href="index.html#contact">Contato</a>
//                 </li>
//             </ul>
//             <ul class="navbar-nav me-1">
//                 <li class="nav-item">
//                     <a class="nav-link" href="login.html">Login</a>
//                 </li>
//             </ul>
//         </div>
//     </div>
// </nav>`

//     element.innerHTML = navbar

// }




export function navBarComponentTemplate() {

    const localTemplate = 'components/nav.component/nav.component.html'
    const localStyle = 'components/nav.component/nav.component.css'
    const element = document.getElementById('navbar-component')
    
    element.innerHTML = ''
    element.innerHTML += `<link rel="stylesheet" href="${localStyle}">` 
    
    fetch(localTemplate)
        .then((res) => res.text())
        .then((nav) => {

            element.innerHTML += nav

        })
        .catch((error) => {

            console.error("Erro o carregar a navBar",error)

        })

}