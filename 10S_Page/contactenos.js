
document.addEventListener('submit', (ev) => {
  //Obteniendo los argumentos del formulario
  const nombre = document.getElementById('nombre')
  const correoElectronico = document.getElementById('correo')
  const asunto = document.getElementById('asunto')
  const mensaje = document.getElementById('mensaje')
  console.log("probando")
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
      alert('Se envio el correo');
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
        alert('Se envio el correo');
      });
    }
  }

})

document.querySelector(".navbar-toggler").addEventListener("click", () => {
  document.querySelector(".offcanvas-collapse").classList.toggle("open");
});

