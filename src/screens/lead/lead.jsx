import React, {useState} from "react";
import {Button} from "../../components"
function Lead() {

  const[age, setAge] =useState('');
  const [customer, setCustomer]= useState('') 
  const [residence, setResidence] = useState('')

  function onSubmit (e){
    e.preventDefault();
    

    if(age === "" || customer === "" || residence === ""){
      alert("Seleciona os campos vazios");
    }

    const payload= {
      age_group: age,
      customer,
      residence

    }

    console.log(payload)
    
  }
  return (
    <React.Fragment>
      <section className="le_wrapper">
        <main className="le_container">
          <div className="le_highlight">
            <h2>Responde <br/>O FORMULÁRIO </h2>
          </div>

            <form className="le_form" onSubmit={onSubmit}>
          <div className="le_container_form">
              <div className="le_container_input">
                <label htmlFor="age_input">Qual é a sua faixa etária? <span>*</span></label>
               

                <select  id="age_input" value={age} onChange={(e) => setAge(e.target.value)}>
                  <option value=""  
                   defaultValue="Seleciona uma opção" 
                   disabled>
                    Seleciona uma opção
                  </option>
                  <option value="18-24">18-24</option>
                   <option value="25-34">25-34</option>
                   <option value="35-44">35-44</option>
                   <option value="45-54">45-54</option>
                   <option value="55-ou mais"> 55 - ou mais</option>
                </select>
                
              </div>
              <div className="le_container_input">
                <label htmlFor="customer_input">És cliente tvcabo? <span>*</span></label>
                 <select  id="customer_input" value={customer} onChange={(e) => setCustomer(e.target.value)}>
                  <option value=""  
                   defaultValue="Seleciona uma opção" 
                   disabled>
                    Seleciona uma opção
                  </option>
                  <option value="sim">Sim</option>
                   <option value="nao">Não</option>
                   <option value="nao tenho servico minha zona">Não tenho serviço na minha zona</option>
                   
                </select>
              </div>
              <div className="le_container_input">
                <label htmlFor="residence_input">Qual é sua area de residencia? <span>*</span></label>
                 <select  id="residence_input" value={residence} onChange={(e) => setResidence(e.target.value)}>
                   <option value=""  
                   defaultValue="Seleciona uma opção" 
                   disabled>Seleciona uma opção</option>
                  <option value="luanda" >Luanda</option>
                   <option value="bengela">Benguela</option>
                   <option value="huila">Huila</option>
                   <option value="huambo">Huambo</option>
                   <option value="zaire">Zaire</option>
                   
                </select>
              </div>
          </div>
            <div className="le_btn">
              <Button text="ENVIAR" className="btn" /> 
            </div>
            </form>
        </main>
      </section>
    </React.Fragment>
  );
}

export { Lead };
