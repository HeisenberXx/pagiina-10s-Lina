
// Se crea la modal para cuando se envie el correo
var modal = new tingle.modal({
  footer: true,
  stickyFooter: false,
  closeMethods: ['overlay', 'button', 'escape'],
  closeLabel: "Close",
  cssClass: ['custom-class-1', 'custom-class-2'],
  onOpen: function() {
      console.log('modal open');
  },
  onClose: function() {
      console.log('modal closed');
  },
  beforeClose: function() {
      // here's goes some logic
      // e.g. save content before closing the modal
      return true; // close the modal
      return false; // nothing happens
  }
});
modal.setContent('<h3 style="display: flex; justify-content: center; align-items-center; font-weight: 400">Se ha enviado el correo correctamente</h3>');

modal.addFooterBtn('Entendido', 'tingle-btn tingle-btn--primary', function() {
  // here goes some logic
  modal.close();
});

// Evento que se dispara cuando se envia el formulario
document.addEventListener('submit', (ev) => {
  //Obteniendo los argumentos del formulario
  const nombre = document.getElementById('nombre')
  const correoElectronico = document.getElementById('correo')
  const asunto = document.getElementById('asunto')
  const mensaje = document.getElementById('mensaje')
 
  ev.preventDefault()
  const hojaDeVida = document.querySelector('#file').files[0];
  if (hojaDeVida == undefined) {
    Email.send({
      // SecureToken: '83217d87-1916-46b2-93f2-046b1b90309f',
      SecureToken: '9aa48d7b-b48d-409a-81e4-68159d12880d',
      To: 'gerencia@10s.com.co',
      From: "gerencia@10s.com.co",
      Subject: `${asunto.value}`,
      Body: `<strong>Nombre: </strong> ${nombre.value} <br>
    <strong>Correo: </strong> ${correoElectronico.value} <br>
    <strong>Mensaje: </strong> ${mensaje.value}`,
    }).then((v) => {
      modal.open();
    });
  } else {
    const lector = new FileReader()
    lector.readAsDataURL(hojaDeVida)



    lector.onloadend = function () {
      const dataUri = lector.result

      Email.send({
        SecureToken: '9aa48d7b-b48d-409a-81e4-68159d12880d',
        To: 'gerencia@10s.com.co',
        From: "gerencia@10s.com.co",
        Subject: `${asunto.value}`,
        Body: `<strong>Nombre: </strong> ${nombre.value} <br>
    <strong>Correo: </strong> ${correoElectronico.value} <br>
    <strong>Mensaje: </strong> ${mensaje.value}`,
        Attachments: [
          {
            name: hojaDeVida.name,
            data: dataUri
          }
        ]
      }).then((v) => {
        modal.open();
      });
    }
  }

})

document.querySelector(".navbar-toggler").addEventListener("click", () => {
  document.querySelector(".offcanvas-collapse").classList.toggle("open");
});

