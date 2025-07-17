import React from "react";
import world from "../../assets/images/svgs/icon/mundo.svg"
import {Button} from "../../components"
function Trivia() {

  const respost = ["Internet Ilimitada", "Plano de tv", "Plano voz", "TvCabo Play"]
  return (
    <React.Fragment>
      <section className="tr_wrapper">
        <main className="tr_container">
          <div className="tr_progress-bar">
            <div className="tr_progress-fill"></div>
          </div>
          <div className="tr_container_aw">
            <div className="tr_container_questions">
              <div className="tr_word">
               
                  <div className="tr_world_img">
                    <img src={world} alt="" />
                    
                  </div>
                 
               

                <div className="tr_separation"></div>
              </div>
              <div className="tr_questions">
                <p>Qual serviço TVCABO é essencial para garantir que a sua experiência de jogo online seja fluida e sem interrupções, mesmo em momentos de pico?</p>
              </div>
            </div>

            <div className="tr_resp">
              {respost.map((item, index) => <Button className={index === 0 ?' btn_Light_corect' :'btn_questions'} key={index} text={item}/>)}
            </div>
          </div>
        </main>
      </section>
    </React.Fragment>
  );
}

export { Trivia };
