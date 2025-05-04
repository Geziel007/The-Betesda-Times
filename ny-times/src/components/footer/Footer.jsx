import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div>
      <hr className="linhaFooter"></hr>
      <section className="flexFooter">
        <footer>
          <p>
            © Todos os direitos Reservados para{" "}
            <span className="textoFooter">The Betesda Times</span> 2025.
          </p>
        </footer>
      </section>
    </div>
  );
};

export default Footer;
