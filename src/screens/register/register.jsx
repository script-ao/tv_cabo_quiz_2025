import React, {useState} from "react";
import {Button} from "../../components"
function Register() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')

  function onSubimit(e){
    e.preventDefault();

    if( name === "" ||email === "" || phone ===""){
      alert("Porfavor preenche o campo vazio")
    }
    const payload={
      name,
      email,
      phone,
    }

    localStorage.setItem("user", JSON.stringify(payload))
  }
  return (
    <React.Fragment>
      <section className="re_wrapper">
        <main className="re_container">
          <div className="re_highlight">
            <h2>PREENCHE <br/>O FORMULÁRIO </h2>
          </div>

            <form className="re_form" onSubmit={onSubimit}>
          <div className="re_container_form">
              <div className="re_container_input">
                <label htmlFor="name_input">Nome: <span>*</span></label>
                <input type="text" id="name_input" value={name} onChange={(e) => setName(e.target.value)}/>
              </div>
              <div className="re_container_input">
                <label htmlFor="email_input">Email: <span>*</span></label>
                <input type="email" id="email_input" value={email} onChange={(e) => setEmail(e.target.value)}/>
              </div>
              <div className="re_container_input">
                <label htmlFor="phone_input">Telefone: <span>*</span></label>
                <input type="number" id="phone_input" value={phone} onChange={(e) => setPhone(e.target.value)}/>
              </div>
          </div>
            <div className="re_btn">
              <Button text="ENVIAR" className="btn" /> 
            </div>
            </form>
        </main>
      </section>
    </React.Fragment>
  );
}

export { Register };
