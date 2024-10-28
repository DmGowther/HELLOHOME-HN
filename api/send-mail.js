const sgMail = require("@sendgrid/mail");

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

module.exports = async (req, res) => {
  if (req.method === "POST") {
    const { nombre, apellido, correo, telefono, mensaje } = req.body;

    const msg = {
      to: correo,
      from: "brayanjpp.code@gmail.com",
      subject: `Mensaje de ${nombre} ${apellido}`,
      text: `Has recibido un mensaje de ${nombre} ${apellido}\n\nCorreo: ${correo}\nTeléfono: ${telefono}\nMensaje: ${mensaje}`,
      html: `<p>Has recibido un mensaje de <strong>${nombre} ${apellido}</strong></p>
             <p>Correo: ${correo}</p>
             <p>Teléfono: ${telefono}</p>
             <p>Mensaje:</p>
             <p>${mensaje}</p>`,
    };

    try {
      await sgMail.send(msg);
      res.status(200).json({ message: "Correo enviado correctamente" });
    } catch (error) {
      console.error("Error al enviar el correo:", error);
      res.status(500).json({ message: "Error al enviar el correo" });
    }
  } else {
    res.status(405).json({ message: "Método no permitido" });
  }
};
