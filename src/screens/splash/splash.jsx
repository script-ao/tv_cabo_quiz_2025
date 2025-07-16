import React from "react";
import person from "../../assets/images/pessoasss1.svg"
import tvcabo from "../../assets/images/svgs/logo/tvcabo.svg"
import {Link} from "react-router-dom"
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
                <img src={tvcabo} alt="" />
                <span className='sp_subtitle'>
                
               </span>
               </div>

               <div className='sp_btn'>
                <Link to="/intro">
                <button> INICIAR</button>
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
