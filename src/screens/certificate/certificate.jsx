import React, {useEffect} from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/images/svgs/logo/tvcabo.svg"
function Certificate() {

  const user = JSON.parse(localStorage.getItem('user')) || '';
  const navigate= useNavigate()
  const hoje = new Date();
  const meses = [
  'janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho',
  'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'
];
const dia = hoje.getDate();
const mesNome = meses[hoje.getMonth()];
const ano = hoje.getFullYear();
const dataFormatada = `${dia} de ${mesNome} de  ${ano}`

   /*useEffect(() => {
      if(!user){
        navigate("/")
      }
   },[user, navigate])*/


  /*useEffect(() => {
    const time = setTimeout(() =>{
      localStorage.clear()
      navigate("/")
    }, 10000)

    return () => clearTimeout(time)
  },[navigate])*/
  
  
  return (
    <React.Fragment>
       <section className="ce_wrapper">
            <main className="ce_container">
            <div className='ce_content'>
              <div className="ce_container_logo">
                <div className="ce_logo_img">
                  <img src={logo} alt=""/>
                </div>
                <p>Sempre ligado</p>
              </div>
               
               <div className="ce_description">
                  <h2>A TV CABO </h2>
                  <h3>Certifica que o mundo de</h3>

               </div>
                  <div className="ce_inf">
                      <span>{user.name}</span>
                  </div>

                  <div className="ce_inf_date">

                    <h4>TEM FIBRA.</h4>

                    <div className="ce_date">
                      <span>Data: {dataFormatada}</span>

                    </div>
                      <div className="ce_assin"></div>

                  </div>

              
            </div>

            
            </main>
        </section>
    </React.Fragment>
  );
}

export { Certificate };
