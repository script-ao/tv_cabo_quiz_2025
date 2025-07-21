import React, { useState } from "react";
import { Button, Modal } from "../../components";


function Lead() {
  const [ageRange, setAgeRange] = useState("");
  const [isClient, setIsClient] = useState("");
  const [residence, setResidence] = useState("");
  const [OpenModal, setOpenModal] = useState(false);
  const [valueModal, setvalueModal] = useState({});
  

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!ageRange || !isClient || !residence) {
      setOpenModal(true)
      setvalueModal(
        {
          className: "btn_warn",
          text: "Preenche o formulario."
        }
      )
      return;
    }

    const payload = {
      ageRange,
      isClient,
      residence,
    };

    try {
      const response = await fetch('https://platform.bisc8.digital/webhook/first_form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        console.log("Formulário enviado com sucesso!");
        setOpenModal(true)
        setvalueModal(
          {
            className: "btn_sucess",
            text: "Obrigado por preencher",
            to: "/intro"
          }
        )
        //navigate("/intro");
      } else {
        console.error("Falha ao enviar o formulário:", response.statusText);
        setOpenModal(true)
        setvalueModal(
          {
            className: "btn_warn",
            text: "Ocorreu um erro ao enviar o formulário. Tente novamente.",
            to: ""
          }
        )
      }
    } catch (error) {
      console.error("Erro de rede:", error);
      setOpenModal(true)
      setvalueModal(
        {
          className: "btn_warn",
          text: "Ocorreu um erro de rede. Verifique sua conexão e tente novamente.",
          to: ""
        }
      )
    }
  };

  
  return (
    <React.Fragment>
      <section className="le_wrapper">
        {OpenModal && <Modal
          text={valueModal.text}
          setOpenModal={setOpenModal}
          className={valueModal.className}
          to={valueModal.to}
        />}
        <main className="le_container">
          <div className="le_highlight">
            <span>Vamos<br />Começar </span>
          </div>

          <form className="le_form" onSubmit={handleSubmit}>
            <div className="le_container_form">
              <div className="le_container_input">
                <label htmlFor="age_range_input">Qual é a tua faixa etária: <span>*</span></label>
                <select
                  id="age_range_input"
                  name="ageRange"
                  value={ageRange}
                  onChange={(e) => setAgeRange(e.target.value)}
                  required
                >
                  <option value="" disabled>Selecciona uma opção</option>
                  <option value="18-24">18 - 24</option>
                  <option value="25-34">25 - 34</option>
                  <option value="35-44">35 - 44</option>
                  <option value="45-54">45 - 54</option>
                  <option value="55+">55 - ou mais</option>
                </select>
              </div>
              <div className="le_container_input">
                <label htmlFor="is_client_input">És cliente TVCABO? <span>*</span></label>
                <select
                  id="is_client_input"
                  name="isClient"
                  value={isClient}
                  onChange={(e) => setIsClient(e.target.value)}
                  required
                >
                  <option value="" disabled>Selecciona uma opção</option>
                  <option value="Sim">Sim</option>
                  <option value="Não">Não</option>
                  <option value="Não tem o serviço na minha zona">Não tem o serviço na minha zona.</option>
                </select>
              </div>
              <div className="le_container_input">
                <label htmlFor="residence_input">Qual é a tua área de residência?<span>*</span></label>
                <select
                  id="residence_input"
                  name="residence"
                  value={residence}
                  onChange={(e) => setResidence(e.target.value)}
                  required
                >
                  <option value="" disabled>Selecciona uma opção</option>
                   <optgroup label="Luanda">
                   <option value="luanda-belas">Belas</option>
                   <option value="luanda-cacuaco">Cacuaco</option>
                   <option value="luanda-cazenga">Cazenga</option>
                   <option value="luanda-IcoloBengo">Icolo e Bengo</option>
                  <option value="luanda-Luanda"> Luanda</option>
                   <option value="luanda-quicama"> Quiçama</option>
                  <option value="luanda-KilambaKiaxi">Kilamba Kiaxi</option>
                   <option value="luanda-Talatona"> Talatona</option>
                   <option value="luanda-Viana"> Viana</option>

                   
                  </optgroup>
                  <option value="Benguela">Benguela</option>
                  <option value="Huila">Huíla</option>
                  <option value="Huambo">Huambo</option>
                  <option value="Zaire">Zaire</option>
                  <option value="sem cubertura">Não listado(sem cubertura TVCABO)</option>

                  
                </select>
              </div>
            </div>
            <div className="le_btn">
              <Button text="ENVIAR" className="btn btn_Light" type="submit" />
            </div>
          </form>
        </main>
      </section>
    </React.Fragment>
  );
}

export { Lead };
