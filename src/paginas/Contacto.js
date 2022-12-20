import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

export default function Contacto() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_z1owthj",
        "template_xzza34u",
        form.current,
        "v3jLsuSj4uQ1n0GGz"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <div className="container mensajeria">
      <form ref={form} onSubmit={sendEmail}>
        <label className="texto">Nombres</label>
        <br></br>
        <input
          className="form-control"
          type="text"
          name="user_name"
          placeholder="Inserte su nombre"
        />
        <br></br>
        <label className="texto">Email</label>
        <br></br>
        <input
          className="form-control"
          type="email"
          name="user_email"
          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
          placeholder="inserte su correo electronico"
        />
        <br></br>

        <label className="Contact">Numero de contacto</label>
        <br></br>
        <input
          className="form-control"
          type="tel"
          name="contact_number"
          maxlength="12"
          pattern="[0-9+]+\d+"
          placeholder="inserte su numero de de prefijo y su numero telefonico, ejm +34000000000"
        />
        <br></br>

        <label className="texto">Mensaje</label>
        <br></br>
        <textarea
          className="form-control"
          name="message"
          placeholder="Inserte su mensaje y nos contactaremos con usted lo mas pronto posible . . ."
        />
        <br></br>
        <input
          className="btn btn-outline-primary "
          type="submit"
          value="Send"
        />
      </form>
    </div>
  );
}
