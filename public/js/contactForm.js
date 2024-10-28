document.addEventListener("DOMContentLoaded", function () {
  const contactForm = document.getElementById("contactForm");
  const modal = document.querySelector(".modal");
  const modalTitle = document.querySelector(".modal__title");
  const modalImage = document.querySelector(".modal__img");
  const modalParagraph = document.querySelector(".modal__paragraph");
  const closeModal = document.querySelector(".modal__close");

  if (contactForm) {
    contactForm.addEventListener("submit", async function (event) {
      event.preventDefault();

      const formData = new FormData(contactForm);
      const data = Object.fromEntries(formData);

      try {
        const response = await fetch("/api/send-email", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        });

        // Actualizar contenido del modal según el resultado
        if (response.ok) {
          modalTitle.textContent = "¡Mensaje enviado!";
          modalParagraph.textContent =
            "Tu correo ha sido enviado exitosamente. Te responderemos lo antes posible, ¡mantente atento!";
          modalImage.src = "/public/img/modal/mail_sent.svg"; // Imagen de éxito
          modalImage.alt = "Correo enviado con éxito";
        } else {
          modalTitle.textContent = "Error al enviar";
          modalParagraph.textContent =
            "Hubo un problema al enviar el correo. Intenta de nuevo.";
          modalImage.src = "/public/img/modal/mail_error.svg"; // Imagen de error en caso de conexión
          modalImage.alt = "Error de conexión";
        }

        // Mostrar el modal
        modal.classList.add("modal--show");
      } catch (error) {
        console.error("Error de conexión:", error);
        modalTitle.textContent = "Error de conexión";
        modalParagraph.textContent =
          "No se pudo enviar el correo. Por favor, revisa tu conexión.";
        modalImage.src = "/public/img/modal/mail_connect.svg"; // Imagen de error en caso de conexión
        modalImage.alt = "Error de conexión";
        modal.classList.add("modal--show");
      }
    });
  }

  // Cerrar el modal cuando se hace clic en el enlace de cierre
  closeModal.addEventListener("click", (e) => {
    e.preventDefault();
    modal.classList.remove("modal--show");
  });
});
