import React, { useState } from "react";
import { Button, Modal } from "../../components";
import { useQuiz } from "../../context/quizContext";

function Register() {
  
  const { setUserInfo } = useQuiz();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [OpenModal, setOpenModal] = useState(false);
  const [valueModal, setvalueModal] = useState({});

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!name || !email || !phone) {
      setOpenModal(true);
      setvalueModal({
        className: "btn_warn",
        text: "Por favor, preencha todos os campos obrigatórios.",
        buttonText: "OK",
      });
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

        // Save user data to context
        setUserInfo({ name, email, phone });

        // Show success modal
        setOpenModal(true);
        setvalueModal({
          className: "btn_sucess",
          text: "Obrigado por se registrar!",
          to: "/information",
          buttonText: "Continuar",
        });
      } else {
        console.error("Falha ao enviar o formulário:", response.statusText);
        setOpenModal(true);
        setvalueModal({
          className: "btn_warn",
          text: "Ocorreu um erro ao enviar o formulário. Tente novamente.",
          buttonText: "Tentar Novamente",
        });
      }
    } catch (error) {
      console.error("Erro de rede:", error);
      setOpenModal(true);
      setvalueModal({
        className: "btn_warn",
        text: "Ocorreu um erro de rede. Verifique sua conexão e tente novamente.",
        buttonText: "Tentar Novamente",
      });
    }
  };


  return (
    <React.Fragment>
      <section className="re_wrapper">
        {OpenModal && (
          <Modal
            text={valueModal.text}
            setOpenModal={setOpenModal}
            className={valueModal.className}
            to={valueModal.to}
            buttonText={valueModal.buttonText}
          />
        )}
        <main className="re_container">
          <div className="re_highlight">
            <span>PREENCHE <br />O FORMULÁRIO </span>
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
