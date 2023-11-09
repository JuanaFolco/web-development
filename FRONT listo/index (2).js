const bottonMas = document.getElementById("botonForm");
const FloresElement = document.getElementById("contenedorFlor");
const form =document.querySelector("form");
const API = "http://localhost:8080/movimientos/todos";
let users = [];

botonForm.addEventListener("click", (e) => {
    e.preventDefault();
    fetch(API).then(res => {
        if (res.ok) {
            res.json().then(resJson => {
                const indiceAleatorio = Math.floor(Math.random() * resJson.length);
                const florAleatoria = resJson[indiceAleatorio];

                agregarFlorPantalla(florAleatoria);
                agregarNombrePantalla(florAleatoria);
                agregarDescPantalla(florAleatoria);


            })
        }
    }
    )
});


// form.addEventListener("submit" , async (e)=> {
// e.preventDefault();
// const res= await fetch(API,{
//  method: "POST" ,
//  headers: {
//     "Content-Type" : "application/json"
//  },
//  body: JSON.stringify( {
//     name: e.target[0].value,
//  })

// })
//     console.log(res);
//     if(!res.ok) return;
//     const resJson = await res.json();
//     console.log(e);
//     agregarFlorPantalla(resJson)

// });




function agregarFlorPantalla(flor) {
     const p = document.createElement("img")
     console.log(flor);
     p.src = flor.imagen;
    FloresElement.appendChild(p)
    
}

function agregarNombrePantalla(flor) {
    const s = document.createElement("p")
    s.textContent = flor.nombre;
   FloresElement.appendChild(s)
   s.classList = "nombreFlor"
}

function agregarDescPantalla(flor) {
    const w = document.createElement("p")
    w.textContent = flor.descripcion;
   FloresElement.appendChild(w)
   w.classList = "descripcionFlor"
   
}

//boton que envie y resetee el input text del footer
function validar() {

    console.log("se envio el comentario con exito"); //para ver si funciona
    enviar.reset(); //lo agregue al final para que si borre pero tmb envie
    return false; // para que no borre

}

function validarFlor() {

    console.log("se envio el comentario con exito"); //para ver si funciona
    formFlor.reset(); //lo agregue al final para que si borre pero tmb envie
    return false; // para que no borre

}



//pag aparte q se llame barra flores admin

// menu desplegable
function toggleDropdown() {
    var menu = document.getElementById("dropdown-menu");
    if (menu.style.display === "none") {
      menu.style.display = "block";
    } else {
      menu.style.display = "none";
    }
  }

