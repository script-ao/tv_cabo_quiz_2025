import React from "react";
import person from "../../assets/images/pessoa2.svg"
import master from "../../assets/images/svgs/icon/master.svg"
function Certificate() {

  const user = JSON.parse(localStorage.getItem('user')) || {};


  console.log(user)
  
  return (
    <React.Fragment>
       <section className="ce_wrapper">
            <main className="ce_container">
            <div className='ce_content'>
            
               

               <div className='ce_container_image'>
                
               <img src={master} alt="" />
                
               </div>

               <div className='ce_description'>
               <p>Faz uma selfie com o teu<br/>  Diploma e prova que
               <br/>
               <span>A tua Fibra é o Teu Mundo!</span>
               
               </p>
               </div>
            </div>

            <div className='ce_person_img'>
                <img src={person} alt="" />
            </div>
            </main>
        </section>
    </React.Fragment>
  );
}

export { Certificate };
