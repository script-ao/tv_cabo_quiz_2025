import React from "react";

function Splash() {
  return (
    <React.Fragment>
      <section className="sp_wrapper">
            <main className="sp_container">
            <div className='sp_content'>
            
               <span className='sp_highlight'>
                <p>Explora</p><br/>
                <p>O teu mundo</p>
               </span>

               <div className='sp_container_subtitle'>
                <p>by</p>
                <span className='sp_subtitle'> <p>tvcabo</p> <br/>
                <p>sempre ligado</p>
               </span>
               </div>

               <div className='sp_btn'>
                <button> INICIAR</button>
               </div>
            </div>

            <div className='sp_person_img'>
                {/*<img src="" alt="" />*/}
            </div>
            </main>
        </section>
    </React.Fragment>
  );
}

export { Splash };
