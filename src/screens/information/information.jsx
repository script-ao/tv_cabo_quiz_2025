import React from "react";
import person from "../../assets/images/pessoa2.svg"
import master from "../../assets/images/svgs/icon/master.svg"
function Infomation() {
  
  return (
    <React.Fragment>
       <section className="inf_wrapper">
            <main className="inf_container">
            <div className='inf_content'>
            
               

               <div className='inf_container_image'>
                
               <img src={master} alt="" />
                
               </div>

               <div className='inf_description'>
               <p>Faz uma selfie com o teu<br/>  Diploma e prova que
               <br/>
               <span>A tua Fibra é o Teu Mundo!</span>
               
               </p>
               </div>
            </div>

            <div className='inf_person_img'>
                <img src={person} alt="" />
            </div>
            </main>
        </section>
    </React.Fragment>
  );
}

export { Infomation };
