document.addEventListener("DOMContentLoaded", function () {
  const contactForm = document.getElementById("contactForm");
  const modal = document.querySelector(".modal");
  const modalTitle = document.querySelector(".modal__title");
  const modalParagraph = document.querySelector(".modal__paragraph");
  const closeModal = document.querySelector(".modal__close");

  if (contactForm) {
    contactForm.addEventListener("submit", async function (event) {
      event.preventDefault();

      const formData = new FormData(contactForm);
      const data = Object.fromEntries(formData);

      try {
        const response = await fetch(
          "http://localhost:3000/enviar-formulario",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
          }
        );

        // Actualizar contenido del modal según el resultado
        if (response.ok) {
          modalTitle.textContent = "¡Mensaje enviado!";
          modalParagraph.textContent =
            "Tu correo ha sido enviado correctamente.";
        } else {
          modalTitle.textContent = "Error al enviar";
          modalParagraph.textContent =
            "Hubo un problema al enviar el correo. Intenta de nuevo.";
        }

        // Mostrar el modal
        modal.classList.add("modal--show");
      } catch (error) {
        console.error("Error de conexión:", error);
        modalTitle.textContent = "Error de conexión";
        modalParagraph.textContent =
          "No se pudo enviar el correo. Por favor, revisa tu conexión.";
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
