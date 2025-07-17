import React from "react";
import {Button} from "../../components"
function Lead() {
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
                <label htmlFor="name_input">Qual é a sua faixa etária: <span>*</span></label>
               

                <select name="" id="">
                  <option value="">18-24</option>
                   <option value="">25-34</option>
                   <option value="">35-44</option>
                   <option value="">45-54</option>
                   <option value="">55- ou mais</option>
                </select>
                
              </div>
              <div className="re_container_input">
                <label htmlFor="email_input">És cliente tvcabo?: <span>*</span></label>
                 <select name="" id="">
                  <option value="">Sim</option>
                   <option value="">Não</option>
                   <option value="">Não tenho serviço na minha zona</option>
                   
                </select>
              </div>
              <div className="re_container_input">
                <label htmlFor="phone_input">Qual é sua area de residencia? <span>*</span></label>
                 <select name="" id="">
                  <option value="">Luanda</option>
                   <option value="">Benguela</option>
                   <option value="">Huila</option>
                   <option value="">Huambo</option>
                   <option value="">Zaire</option>
                   
                </select>
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

export { Lead };
