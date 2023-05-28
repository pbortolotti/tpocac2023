//Funcion del scrolltop

scrollTopButton('.scroll-top-btn');

function scrollTopButton(btn) {
  const $ScrollBtn = $(btn);

  $(window).scroll(function () {
    let scrollTop = $(this).scrollTop();

    scrollTop > 350 ? $ScrollBtn.removeClass('hidden') : $ScrollBtn.addClass('hidden');
  })

  $ScrollBtn.click(function () {
    window.scrollTo({
      behavior: 'smooth',
      top: 0
    })
  })
}

//Titulo, escrito en Jquery con animacion

let titulo = $('#id1').fadeIn(3500);
$('#id1').text("URBAN STREET ONLINE!")

let tituloCervezas = $('#id2').fadeIn(3500);
$('#id2').text("Probá nuestras distintas variedades de cerveza!")

//Funcion mostrar mensaje


let mostrarMensaje = () =>{
   event.preventDefault()
   swal("Felicidades!", "Ya estas registrado, recibiras nuestras novedades en tu correo!","success");
}

let mensajePromo = () =>{
  event.preventDefault()
  swal("Promos!", "Encargá mediante el icono de whatsapp, especificando el numero de promo solicitada");
}

let mensajeDelivery = () =>{
  event.preventDefault()
  swal("Pedidos", "Encargá mediante el icono de whatsapp, especificando tu pedido.");
}

//Funcion mostrar nav y footer

document.addEventListener("DOMContentLoaded", function() {
  fetch("navbar.html")
    .then(response => response.text())
    .then(data => {
      document.getElementById("navbarContainer").innerHTML = data;
    });

  fetch("footer.html")
    .then(response => response.text())
    .then(data => {
      document.getElementById("footerContainer").innerHTML = data;
    });
});

//Funcion Formulario
const $form = document.querySelector('#form')
$form.addEventListener('submit', handleSubmit)

async function handleSubmit(event) {
  event.preventDefault()
  const form = new FormData(this)
  const response = await fetch(this.action, {
    method: this.method,
    body:form,
    headers:{
      'Accept': 'application/json'      }
  })

  if(response.ok){
    this.reset()
    swal({
      title: "Tu mensaje fue enviado!",
      text: "Gracias por contactarte, nos comunicaremos con vos lo mas pronto posible.",
      icon: "success",
    });
    
  }
}