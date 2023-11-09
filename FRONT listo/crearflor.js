const form =document.querySelector("form");

form.addEventListener('submit', (event) => {
  event.preventDefault(); 
  
  const imagen = document.querySelector('#imagen').value;
  const nombre = document.querySelector('#nombre').value;
  const descripcion = document.querySelector('#descripcion').value;

  
  const FloresElement = {
    imagen: imagen,
    nombre: nombre,
    descripcion: descripcion
  };

  
  enviarDatosAlBackend(FloresElement);
});
function enviarDatosAlBackend(FloresElement) {
    const url = "http://localhost:8080/movimientos/crear";
  
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(FloresElement)
    };
  
    fetch(url, options)
      .then(response => response.text())
      .then(responseData => {
     
        console.log(responseData);
        
      })
      .catch(error => {
        
        console.error('Error:', error);
      });
  }

  //function validarNuevaFlor() {

    //console.log("se añadio la flor con exito"); //para ver si funciona
    //formCrear.reset(); //lo agregue al final para que si borre pero tmb envie
    //return false; // para que no borre

//}
  
