// // Obtener el modal
// var modal = document.getElementById("modal");

// // Obtener la imagen y el modal
// var modalImg = document.getElementById("imgModal");
// var captionText = document.getElementById("caption");

// // Asignar el evento a cada imagen
// var imgs = document.querySelectorAll(".content-img img");
// imgs.forEach(function (img) {
//   img.onclick = function () {
//     modal.style.display = "block";
//     modalImg.src = this.src;
//     captionText.innerHTML = this.alt;
//   };
// });

// // Obtener el botón de cierre
// var span = document.getElementsByClassName("close")[0];

// // Cuando se hace clic en el botón de cierre, cerrar el modal
// span.onclick = function () {
//   modal.style.display = "none";
// };

// Obtener el modal
var modal = document.getElementById("modal");

// Obtener la imagen y el modal
var modalImg = document.getElementById("imgModal");
var captionText = document.getElementById("caption");

// Asignar el evento a cada contenedor de imagen
var containers = document.querySelectorAll(".content-img");

containers.forEach(function (container) {
  // Asignar el evento de clic al contenedor
  container.addEventListener("click", function () {
    var img = container.querySelector("img"); // Obtener la imagen
    var caption = container.querySelector("h3"); // Obtener el h3 dentro de la capa

    if (img && caption) {
      modal.style.display = "block"; // Mostrar el modal
      modalImg.src = img.src; // Asignar la imagen al modal
      captionText.innerHTML = caption.innerText; // Asignar el texto del h3 al caption del modal
    }
  });
});

// Obtener el botón de cierre
var span = document.getElementsByClassName("close")[0];

// Cuando se hace clic en el botón de cierre, cerrar el modal
span.onclick = function () {
  modal.style.display = "none";
};
