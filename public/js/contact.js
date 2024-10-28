// Obtener el formulario
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault(); // Evitar el envío predeterminado del formulario

  // Obtener valores
  var nombre = document.getElementById("nombre").value.trim();
  var apellido = document.getElementById("apellido").value.trim();
  var correo = document.getElementById("correo").value.trim();
  var telefono = document.getElementById("telefono").value.trim();
  var mensaje = document.getElementById("mensaje").value.trim();
  var terms = document.getElementById("terms").checked;

  // Validar campos vacíos
  if (!nombre || !apellido || !correo || !telefono || !mensaje) {
    alert("Por favor, complete todos los campos.");
    return;
  }

  // Validar formato de correo
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(correo)) {
    alert("Por favor, ingrese un correo electrónico válido.");
    return;
  }

  // Validar número de teléfono (8 dígitos)
  var phoneRegex = /^[0-9]{8}$/;
  if (!phoneRegex.test(telefono)) {
    alert("Por favor, ingrese un número de teléfono válido de 8 dígitos.");
    return;
  }

  // Validar que se acepten los términos
  if (!terms) {
    alert("Debe aceptar los términos y condiciones.");
    return;
  }

  // Si todo es válido, aquí puedes enviar el formulario con AJAX (opcional)
  alert("Formulario enviado correctamente.");

  // Si quisieras usar AJAX para enviar el formulario sin recargar la página:
  var formData = new FormData(this);

  fetch("ruta_al_backend", {
    method: "POST",
    body: formData,
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.success) {
        alert("Mensaje enviado exitosamente.");
      } else {
        alert("Hubo un error al enviar el mensaje.");
      }
    })
    .catch((error) => {
      console.error("Error:", error);
    });
});
