import React from "react";
import person from "../../assets/images/pessoasss1.svg"
import tvcabo from "../../assets/images/svgs/logo/tvcabo.svg"
import {Link} from "react-router-dom"
import {Button} from "../../components"
function Splash() {
  return (
    <React.Fragment>
      <section className="sp_wrapper">
            <main className="sp_container">
            <div className='sp_content'>
            
               <span className='sp_highlight'>
                <p>Explora</p>
                <p>O teu mundo</p>
               </span>

               <div className='sp_container_subtitle'>
                <p>by</p>
                <div className="sp_img_subtitle">
                  <img src={tvcabo} alt="" />
                  <span className='sp_subtitle'>
                  Sempre ligados.
                    </span>
                </div>
               </div>

               <div className='sp_btn'>
                <Link to="/lead">
                <Button text="INICIAR" className="btn btn_Light" /> 
              </Link>
               </div>
            </div>

            <div className='sp_person_img'>
                <img src={person} alt="" />
            </div>
            </main>
        </section>
    </React.Fragment>
  );
}

export { Splash };
