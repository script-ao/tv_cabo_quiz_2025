import React, { useState } from "react";
import { Button, Mordal } from "../../components";

function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
   const [OpenMordal, setOpenMordal] = useState(false);
    const [valueMordal, setvalueMordal] = useState({});

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!name || !email || !phone) {
     

      setOpenMordal(true)
      setvalueMordal(
          {
            className:"btn_warn",
            text:"Por favor, preencha todos os campos obrigatórios."
          }
        )
      return;
    }

    const payload = {
      name,
      email,
      phone,
    };

    try {
      const response = await fetch('https://platform.bisc8.digital/webhook/last_form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        console.log("Formulário enviado com sucesso!");
        
       setOpenMordal(true)
        setvalueMordal(
          {
            className:"btn_sucess",
            text:"Obrigado por se registrar!",
            to: "/intro"
          }
        )
      } else {
        console.error("Falha ao enviar o formulário:", response.statusText);
       setOpenMordal(true)
        setvalueMordal(
          {
            className:"btn_warn",
            text:"Ocorreu um erro ao enviar o formulário. Tente novamente.",
            to: ""
          }
        )
      }
    } catch (error) {
      console.error("Erro de rede:", error);
     setOpenMordal(true)
      setvalueMordal(
          {
            className:"btn_warn",
            text:"Ocorreu um erro de rede. Verifique sua conexão e tente novamente.",
            to: ""
          }
        )
    }
  };

  return (
    <React.Fragment>
      <section className="re_wrapper">
         {OpenMordal && <Mordal 
                text={valueMordal.text}
                setOpenMordal={setOpenMordal}
                className={valueMordal.className}
                to={valueMordal.to}
                />}
        <main className="re_container">
          <div className="re_highlight">
            <h2>PREENCHE <br/>O FORMULÁRIO </h2>
          </div>

          <form className="re_form" onSubmit={handleSubmit}>
            <div className="re_container_form">
              <div className="re_container_input">
                <label htmlFor="name_input">Nome: <span>*</span></label>
                <input 
                  type="text" 
                  id="name_input" 
                  value={name} 
                  onChange={(e) => setName(e.target.value)} 
                  required 
                />
              </div>
              <div className="re_container_input">
                <label htmlFor="email_input">Email: <span>*</span></label>
                <input 
                  type="email" 
                  id="email_input" 
                  value={email} 
                  onChange={(e) => setEmail(e.target.value)} 
                  required 
                />
              </div>
              <div className="re_container_input">
                <label htmlFor="phone_input">Telefone: <span>*</span></label>
                <input 
                  type="number" 
                  id="phone_input" 
                  value={phone} 
                  onChange={(e) => setPhone(e.target.value)} 
                  required 
                />
              </div>
            </div>
            <div className="re_btn">
              <Button text="ENVIAR" className="btn btn_Light" type="submit" />
            </div>
          </form>
        </main>
      </section>
    </React.Fragment>
  );
}

export { Register };
