
var telefonoRegex = /^\d{10}$/;
var emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

var provinciaSelect = document.getElementById('provincia');


fetch('./js/provincias.json')
  .then(response => response.json())
  .then(data => {

    for (var i = 0; i < data.length; i++) {
      var option = document.createElement('option');
      option.value = data[i].nombre;
      option.textContent = data[i].nombre;
      provinciaSelect.appendChild(option);
    }
  })
  .catch(error => {
    console.error('Error al obtener las provincias:', error);
  });


function validateForm(event) {
  event.preventDefault(); 

  
  var nombre = document.getElementById('nombre').value;
  var apellido = document.getElementById('apellido').value;
  var provincia = document.getElementById('provincia').value;
  var telefono = document.getElementById('telefono').value;
  var email = document.getElementById('email').value;
  var empresa = document.getElementById('empresa').value;
  var texto = document.getElementById('texto').value;


  if (!telefonoRegex.test(telefono)) {
    alert('Por favor, ingresa un número de teléfono válido.');
    return;
  }


  if (!emailRegex.test(email)) {
    alert('Por favor, ingresa una dirección de correo electrónico válida.');
    return;
  }
}