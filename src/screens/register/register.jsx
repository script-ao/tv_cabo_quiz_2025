import React from "react";

function Register() {
  return (
    <React.Fragment>
      <section className="re_wrapper">
        <main className="re_container">
          <div className="re_highlight">
            <h2>PREENCHE <br/>O FORMULÁRIO </h2>
          </div>

            <form className="re_form">
          <div className="re_container_form">
              <div className="re_container_input">
                <label htmlFor="name_input">Nome: <span>*</span></label>
                <input type="text" id="name_input"/>
              </div>
              <div className="re_container_input">
                <label htmlFor="email_input">Email: <span>*</span></label>
                <input type="email" id="email_input"/>
              </div>
              <div className="re_container_input">
                <label htmlFor="phone_input">Email: <span>*</span></label>
                <input type="number" id="phone_input"/>
              </div>
          </div>
            <div className="re_btn">
              <button>Enviar</button>
            </div>
            </form>
        </main>
      </section>
    </React.Fragment>
  );
}

export { Register };
